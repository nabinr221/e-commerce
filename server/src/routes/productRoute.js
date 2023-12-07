const express = require('express');
const app = express.Router();
const productController = require('../controller/product');
// const uploadMiddleware = require('../middlewares/productImage/upload');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('../e-commerce-ui/src/assets/products'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage }).single('image');

app.post('/', upload, productController.addProduct);
app.get('/', productController.getProducts);
app.get('/:id', productController.getProductDetails);
app.put('/:id', upload, productController.editProduct);
app.delete('/:id', productController.deleteProduct);

module.exports = app;
