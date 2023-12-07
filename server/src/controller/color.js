const Color = require('../models/Colors');

const addColor = async (req, res) => {
  try {
    const color = await Color.findOne({
      colorName: req.body.colorName,
    });
    if (!color) {
      const colorData = Color.create(req.body);
      if (colorData) {
        res
          .status(200)
          .json({ msg: `Color '${req.body.colorName}' added successfully` });
      } else {
        res.status(500).json({ msg: 'Something went worng' });
      }
    } else {
      console.log('hii this is ');
      res
        .status(409)
        .json({ msg: `Color '${req.body.colorName}' already exists` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' });
  }
};

const getColor = async (req, res) => {
  try {
    const colorData = await Color.find();
    if (colorData) {
      res.status(200).json({
        colorData,
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

const deleteColor = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedColor = await Color.findByIdAndDelete(id);
    if (deletedColor) {
      res.status(200).json({ msg: 'Color deleted successfully' });
    } else {
      res.status(404).json({ error: 'Color not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getColorDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const colorDetails = await Color.findById(id);
    if (colorDetails) {
      res.status(200).json({
        colorDetails,
      });
    } else {
      res.status(404).json({
        error: 'Color not found',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};
const editColor = async (req, res) => {
  try {
    const { id } = req.params;
    const colorDetails = await Color.findById(id);
    if (colorDetails) {
      res.status(200).json({
        colorDetails,
      });
      Color;
      res.status(404).json({
        error: 'Color not found',
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
  addColor,
  getColor,
  editColor,
  getColorDetails,
  deleteColor,
};
