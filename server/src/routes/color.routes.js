import { Router } from "express";
import {
  addColor,
  getColorList,
  getColorDetail,
  updateColor,
  deleteColor,
} from "../controllers/color.controller.js";

const router = Router();

router.route("/").post(addColor);
router.route("/").get(getColorList);
router.route("/:id").get(getColorDetail);
router.route("/:id").put(updateColor);
router.route("/:id").delete(deleteColor);

export default router;
