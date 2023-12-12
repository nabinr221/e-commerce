import mongoose, { Schema } from "mongoose";

const colorsSchema = new mongoose.Schema(
  {
    colorName: { type: String, required: true },
  },
  { timestamps: true }
);

export const Color = mongoose.model("Color", colorsSchema);
