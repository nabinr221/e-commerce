const express = require('express');
const router = express.Router();
const FeatureController = require('../controller/feature');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('../e-commerce-ui/src/assets/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single('image');

router.post('/', upload, FeatureController.addFeatureImg);
router.get('/', FeatureController.getFeatureImg);
// router.get('/:id', brandController.getBrandDetails);
// router.put('/:id', brandController.editBrand);
// router.delete('/:id', brandController.deleteBrand);

module.exports = router;
