const mongoose = require('mongoose');

const BikeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  image: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
  manufacturer: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
  }
});

module.exports = mongoose.model('bike', BikeSchema);
