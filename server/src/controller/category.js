const Categories = require('../models/Categories');

const addCategory = async (req, res) => {
  try {
    const category = await Categories.findOne({
      name: req.body.name,
    });
    if (!category) {
      const categoryData = Categories.create({
        name: req.body.name,
        image: req.file.filename,
      });
      if (categoryData) {
        res
          .status(200)
          .json({ msg: `Category '${req.body.name}' added successfully` });
      } else {
        res.status(500).json({ msg: 'Something went worng' });
      }
    } else {
      console.log('hii this is ');
      res
        .status(409)
        .json({ msg: `Category '${req.body.name}' already exists` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' });
  }
};
const getCategroy = async (req, res) => {
  try {
    const categoryData = await Categories.find();
    if (categoryData) {
      res.status(200).json({
        categoryData,
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
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Categories.findByIdAndDelete(id);
    if (deletedCategory) {
      res.status(200).json({ msg: 'Category deleted successfully' });
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getCategoryDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const categoryDetails = await Categories.findById(id);
    if (categoryDetails) {
      res.status(200).json({
        categoryDetails,
      });
    } else {
      res.status(404).json({
        error: 'Category not found',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};
const editCategory = async (req, res) => {
  try {
    // const { id } = req.params;
    // const updatedCategory = await Categories.findByIdAndUpdate(
    //   {
    //     _id: id,
    //     name: req.body.name,
    //     image: req.file.filename,
    //   },
    //   { new: true }
    // );
    const { name } = req.body;
    const updatedFields = { name };

    if (req.file) {
      updatedFields.image = req.file.filename;
    }

    const updatedCategory = await Categories.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true }
    );
    if (updatedCategory) {
      res.status(200).json({
        message: 'Category updated successfully',
      });
    } else {
      res.status(404).json({
        error: 'Category not found',
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
  addCategory,
  getCategroy,
  editCategory,
  getCategoryDetails,
  deleteCategory,
};
