import express from "express";
import { registerTenant } from "../controllers/tenantController.js";

const router = express.Router();

router.post("/register", registerTenant);

export default router;
