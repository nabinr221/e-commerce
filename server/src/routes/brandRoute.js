const express = require('express');
const router = express.Router();
const brandController = require('../controller/brand');

router.post('/', brandController.addBrand);
router.get('/', brandController.getBrands);
router.get('/:id', brandController.getBrandDetails);
router.put('/:id', brandController.editBrand);
router.delete('/:id', brandController.deleteBrand);

module.exports = router;
