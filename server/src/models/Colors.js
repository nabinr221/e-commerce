const mongoose = require('mongoose');

const colorsSchema = new mongoose.Schema({
  colorName: { type: String, required: true },
});

const Color = mongoose.model('Color', colorsSchema);

module.exports = Color;
