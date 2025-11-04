import express from "express";
import authRoutes from "./authRoutes.js";
import tenantRoutes from "./tenantRoutes.js";
import tableRoutes from "./tableRoutes.js";
import menuRoutes from "./menuRoutes.js";
import orderRoutes from "./orderRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/tenants", tenantRoutes);
router.use("/tables", tableRoutes);
router.use("/menus", menuRoutes);
router.use("/orders", orderRoutes);

export default router;
