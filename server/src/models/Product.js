const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: false },
  description: { type: String, required: false },
  price: { type: Number, required: false },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
  colors: { type: mongoose.Schema.Types.ObjectId, ref: 'Color' },
  sizes: { type: mongoose.Schema.Types.ObjectId, ref: 'Size' },
  image: { type: String },
  created_at: { type: Date, default: Date.now },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
