const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { validateBike } = require('../../helpers/validationSchema');
const cloudinary = require('../../config/cloudinary');
const upload = require('../../config/multer');

const Bike = require('../../models/Bike');
const User = require('../../models/User');

// @route    GET api/bikes
// @desc     Get all bikes
// @access   Public
router.get('/', async (req, res) => {
  try {
    const bikes = await Bike.find().populate('user', ['name']);
    res.json(bikes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/bikes/:id
// @desc     Get bike by ID
// @access   Public
router.get('/:id', async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);

    if (!bike) {
      return res.status(404).json({ msg: 'Bike not found' });
    }

    res.json(bike);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server error' });
  }
});

// @route    POST api/bikes
// @desc     Add a stolen bike
// @access   Private
router.post('/', upload.single('image'), auth, async (req, res) => {
  try {
    const cloudinaryData = req.file
      ? await cloudinary.uploader.upload(req.file.path)
      : null;

    const result = await validateBike(req.body);

    const data = {
      ...(cloudinaryData && {
        image: cloudinaryData.secure_url,
        cloudinary_id: cloudinaryData.public_id
      }),
      user: req.user.id,
      manufacturer: result.manufacturer,
      model: result.model,
      year: result.year
    };

    const newBike = new Bike(data);

    const bike = await newBike.save();

    return res.json(bike);
  } catch (err) {
    if (err.isJoi) return res.status(400).send(err.details);
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

// @route    Update api/bikes/:id
// @desc     Update a bike
// @access   Private
router.put('/:id', upload.single('image'), auth, async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);

    if (!bike) return res.status(404).send('Bike not found');

    if (bike.cloudinary_id) {
      await cloudinary.uploader.destroy(bike.cloudinary_id);
    }

    let cloudinaryData;
    if (req.file) {
      cloudinaryData = await cloudinary.uploader.upload(req.file.path);
    }

    const { image, cloudinary_id, manufacturer, model, year } =
      await validateBike(req.body);

    const data = {
      ...((cloudinaryData || image) && {
        image: cloudinaryData?.secure_url || image
      }),
      ...((cloudinaryData || cloudinary_id) && {
        cloudinary_id: cloudinaryData?.public_id || cloudinary_id
      }),
      manufacturer,
      model,
      year
    };

    const updatedBike = await Bike.findByIdAndUpdate(req.params.id, data, {
      new: true
    });

    res.send(updatedBike);
  } catch (err) {
    if (err.isJoi) return res.status(400).send(err.details);
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

// @route    DELETE api/bikes/:id
// @desc     Delete a bike
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);

    if (bike.cloudinary_id) {
      await cloudinary.uploader.destroy(bike.cloudinary_id);
    }

    if (!bike) {
      return res.status(404).json({ msg: 'Bike not found' });
    }

    await bike.remove();
    res.json({ msg: 'Bike removed' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Server error' });
  }
});

// @route    DELETE api/bikes
// @desc     Delete user & user bikes
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    const bikes = await Bike.find({
      user: req.user.id
    });
    const cloudinary_ids = bikes.map(({ cloudinary_id }) => cloudinary_id);

    if (cloudinary_ids.length > 0) {
      await cloudinary.api.delete_resources(cloudinary_ids);
    }

    // Remove user bikes
    // Remove user
    await Promise.all([
      Bike.deleteMany({ user: req.user.id }),
      User.findOneAndRemove({ _id: req.user.id })
    ]);

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
