const express = require('express');
const router = express.Router();
const colorController = require('../controller/color');

router.post('/', colorController.addColor);
router.get('/', colorController.getColor);
router.get('/:id', colorController.getColorDetails);
router.put('/:id', colorController.editColor);
router.delete('/:id', colorController.deleteColor);

module.exports = router;
