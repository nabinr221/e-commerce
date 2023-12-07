const mongoose = require('mongoose');

const featureImgSchema = new mongoose.Schema({
  name: { type: String, required: false },
  image: {
    type: String,
    default:
      'https://img.freepik.com/free-psd/we-create-websites-banner-template_23-2148772437.jpg?w=2000',
  },
});

const Feature = mongoose.model('Feature', featureImgSchema);

module.exports = Feature;
