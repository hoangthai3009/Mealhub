import express from "express";
import { protect } from "../middlewares/authProtect.js";
import {
    createTables,
    getTables,
    updateTable,
    deleteTable,
} from "../controllers/tableController.js";

const router = express.Router();

router.post("/create", protect("ADMIN"), createTables);

router.get("/", protect("ADMIN", "STAFF"), getTables);

router.patch("/:id", protect("ADMIN", "STAFF"), updateTable);

router.delete("/:id", protect("ADMIN"), deleteTable);

export default router;
