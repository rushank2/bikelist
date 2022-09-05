const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validateUser } = require('../../helpers/validationSchema');

const User = require('../../models/User');

// @route    POST api/users
// @desc     Sign up user
// @access   Public
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = await validateUser(req.body);

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    user = new User({
      name,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '5 days' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    if (err.isJoi) return res.status(400).send(err.details);
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
