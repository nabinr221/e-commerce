import { Router } from "express";
import {
  addCategory,
  getCategoryList,
} from "../controllers/category.controller.js";
const router = Router();

router.route("/").post(addCategory);
router.route("/").get(getCategoryList);

export default router;
