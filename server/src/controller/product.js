const Product = require('../models/Product');

const addProduct = async (req, res) => {
  try {
    const imgUrl = req.file.filename;
    const productData = Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      brand: req.body.brand,
      colors: req.body.colors,
      image: req.file.filename,
    });
    if (productData) {
      res
        .status(200)
        .json({ msg: `Product '${req.body.name}' added successfully` });
    } else {
      res.status(500).json({ msg: 'Something went worng' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' });
  }
};
const getProducts = async (req, res) => {
  try {
    const productData = await Product.find();
    if (productData) {
      res.status(200).json({
        productData,
      });
    } else {
      res.status(500).json({
        msg: 'Something went wrong',
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: 'Something went wrong',
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (deletedProduct) {
      res.status(200).json({ msg: 'Product deleted successfully' });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const productDetails = await Product.findById(id)
      .populate('brand')
      .populate('category')
      .populate('colors');
    if (productDetails) {
      res.status(200).json({
        productDetails,
      });
    } else {
      res.status(404).json({
        error: 'Product not found',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};
const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
    if (updatedProduct) {
      res.status(200).json({
        msg: `Product ${req.body.name} updated successfully`,
      });
    } else {
      res.status(404).json({
        error: 'Product not found',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};

module.exports = {
  addProduct,
  getProducts,
  editProduct,
  getProductDetails,
  deleteProduct,
};
