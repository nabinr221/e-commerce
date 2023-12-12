import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Color } from "../models/color.model.js";
import { mongoose } from "mongoose";

const handleColorError = (statusCode, message) => {
  throw new ApiError(statusCode, message);
};

const validateColorId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid color ID");
  }
};

const findColorById = async (id) => {
  const color = await Color.findById(id);
  if (!color) {
    throw new ApiError(404, "Color not found");
  }
  return color;
};

/**
 * color controller for add color records
 */
const addColor = asyncHandler(async (req, res, next) => {
  const { colorName } = req.body;
  if (!colorName?.trim()) {
    return handleColorError(400, "Color Name field is required");
  }
  const existingColor = await Color.findOne({ colorName });
  if (existingColor) {
    return handleColorError(409, "Color Name already exists");
  }
  const color = await Color.create({
    colorName: colorName.toLowerCase(),
  });
  const colorDetails = await Color.findById(color._id);
  if (!colorDetails) {
    return handleColorError(500, "Something went wrong while adding Color");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, colorDetails, "Color Added Successfully"));
});

/**
 * controller for fetch all color records
 */
const getColorList = asyncHandler(async (req, res) => {
  const colorList = await Color.find();
  if (!colorList || colorList.length === 0) {
    return handleColorError(404, "No colors found");
  }
  return res.status(200).json(new ApiResponse(200, colorList));
});

/**
 * controller for fetch  single color records
 */
const getColorDetail = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateColorId(id);
  const colorDetails = await findColorById(id);
  if (!colorDetails) {
    return handleColorError(404, "Color not found");
  }
  return res.status(200).json(new ApiResponse(200, colorDetails));
});

/**
 * controller for update color records
 */
const updateColor = asyncHandler(async (req, res) => {
  const { colorName } = req.body;
  const colorId = req.params.id;
  if (!colorName?.trim()) {
    throw new ApiError(400, "Color Name field is required");
  }
  validateColorId(colorId);
  const existingColor = await findColorById(colorId);
  if (!existingColor) {
    throw new ApiError(404, "Color Not Found");
  }
  const existedUser = await Color.findOne({ colorName });
  if (!existedUser) {
    return res
      .status(409)
      .json(new ApiResponse(409, existedUser, "Color Name already exists"));
  }
  // Update the color
  existingColor.colorName = colorName.toLowerCase();
  const updatedColor = await existingColor.save();

  return res
    .status(200)
    .json(
      new ApiResponse(200, updatedColor, "Color Name Updated Successfully")
    );
});

/**
 * color controller for delete color records
 */
const deleteColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateColorId(id);
  const deletedRecord = await Color.findByIdAndDelete(id);

  if (!deletedRecord) {
    return res.status(404).json({ message: "Record not found" });
  }
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Color deleted successfully"));
});

export { addColor, getColorList, getColorDetail, updateColor, deleteColor };
