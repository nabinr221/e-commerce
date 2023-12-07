const mongoose = require('mongoose');

const sizesSchema = new mongoose.Schema({
  size: { type: String, required: true },
});

const Size = mongoose.model('Size', sizesSchema);

module.exports = Size;
