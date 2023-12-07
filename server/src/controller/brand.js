const Brands = require('../models/Brands');

const addBrand = async (req, res) => {
  try {
    const Brand = await Brands.findOne({ name: req.body.name });
    if (!Brand) {
      const brandData = Brands.create(req.body);
      if (brandData) {
        res
          .status(200)
          .json({ msg: `Brand '${req.body.name}' added successfully` });
      } else {
        res.status(500).json({ msg: 'Something went worng' });
      }
    } else {
      res.status(409).json({ msg: `Brand '${req.body.name}' already exists` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' });
  }
};
const getBrands = async (req, res) => {
  try {
    const brandData = await Brands.find();
    if (brandData) {
      res.status(200).json({
        brandData,
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
const deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBrand = await Brands.findByIdAndDelete(id);
    if (deletedBrand) {
      res.status(200).json({ msg: 'Brand deleted successfully' });
    } else {
      res.status(404).json({ error: 'Brand not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getBrandDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const brandDetails = await Brands.findById(id);
    if (brandDetails) {
      res.status(200).json({
        brandDetails,
      });
    } else {
      res.status(404).json({
        error: 'Brand not found',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};
const editBrand = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedBrand = await Brands.findByIdAndUpdate(id, req.body);
    if (updatedBrand) {
      res.status(200).json({
        message: `Brand '${req.body.name}' updated successfully`,
      });
    } else {
      res.status(404).json({
        error: `Brand '${req.body.name}' not found`,
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
  addBrand,
  getBrands,
  editBrand,
  getBrandDetails,
  deleteBrand,
};
