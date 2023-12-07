const express = require('express');
const router = express.Router();
const CategoryController = require('../controller/category');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('../e-commerce-ui/src/assets/category'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single('image');

router.post('/', upload, CategoryController.addCategory);
router.get('/', CategoryController.getCategroy);
router.get('/:id', CategoryController.getCategoryDetails);
router.put('/:id', upload, CategoryController.editCategory);
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;
