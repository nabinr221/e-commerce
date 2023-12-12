import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Category } from "../models/category.model.js";
import { mongoose } from "mongoose";

const handleCategoryError = (statusCode, message) => {
  throw new ApiError(statusCode, message);
};

const validateCategoryId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid Category ID");
  }
};

const findCategoryById = async (id) => {
  const Category = await Category.findById(id);
  if (!Category) {
    throw new ApiError(404, "Category not found");
  }
  return Category;
};

/**
 * Category controller for add Category records
 */
const addCategory = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  console.log(name);
  if (!name?.trim()) {
    return handleCategoryError(400, "Category Name field is required");
  }
  const existingCategory = await Category.findOne({ name });
  if (existingCategory) {
    return handleCategoryError(409, "Category Name already exists");
  }
  const category = await Category.create({
    name: name.toLowerCase(),
  });
  const categoryDetails = await Category.findById(category._id);
  if (!categoryDetails) {
    return handleCategoryError(
      500,
      "Something went wrong while adding Category"
    );
  }
  return res
    .status(201)
    .json(new ApiResponse(200, categoryDetails, "Category Added Successfully"));
});

/**
 * controller for fetch all Category records
 */
const getCategoryList = asyncHandler(async (req, res) => {
  const CategoryList = await Category.find();
  if (!CategoryList || CategoryList.length === 0) {
    return handleCategoryError(404, "No Categorys found");
  }
  return res.status(200).json(new ApiResponse(200, CategoryList));
});

/**
 * controller for fetch  single Category records
 */
// const getCategoryDetail = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   validateCategoryId(id);
//   const CategoryDetails = await findCategoryById(id);
//   if (!CategoryDetails) {
//     return handleCategoryError(404, "Category not found");
//   }
//   return res.status(200).json(new ApiResponse(200, CategoryDetails));
// });

/**
 * controller for update Category records
 */
// const updateCategory = asyncHandler(async (req, res) => {
//   const { CategoryName } = req.body;
//   const CategoryId = req.params.id;
//   if (!CategoryName?.trim()) {
//     throw new ApiError(400, "Category Name field is required");
//   }
//   validateCategoryId(CategoryId);
//   const existingCategory = await findCategoryById(CategoryId);
//   if (!existingCategory) {
//     throw new ApiError(404, "Category Not Found");
//   }
//   const existedUser = await Category.findOne({ CategoryName });
//   if (!existedUser) {
//     return res
//       .status(409)
//       .json(new ApiResponse(409, existedUser, "Category Name already exists"));
//   }
//   // Update the Category
//   existingCategory.CategoryName = CategoryName.toLowerCase();
//   const updatedCategory = await existingCategory.save();

//   return res
//     .status(200)
//     .json(
//       new ApiResponse(
//         200,
//         updatedCategory,
//         "Category Name Updated Successfully"
//       )
//     );
// });

/**
 * Category controller for delete Category records
 */
// const deleteCategory = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   validateCategoryId(id);
//   const deletedRecord = await Category.findByIdAndDelete(id);

//   if (!deletedRecord) {
//     return res.status(404).json({ message: "Record not found" });
//   }
//   return res
//     .status(200)
//     .json(new ApiResponse(200, null, "Category deleted successfully"));
// });

export {
  addCategory,
    getCategoryList,
  //   getCategoryDetail,
  //   updateCategory,
  //   deleteCategory,
};
