import express from "express";
import { protect } from "../middlewares/authProtect.js";
import {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/create", protect("ADMIN"), createCategory);

router.get("/", protect("ADMIN", "STAFF"), getCategories);

router.patch("/:id", protect("ADMIN", "STAFF"), updateCategory);

router.delete("/:id", protect("ADMIN"), deleteCategory);

export default router;