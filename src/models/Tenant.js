import mongoose from "mongoose";

const tenantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    domain: { type: String },
    plan: { type: String, default: "free" },
    status: { type: String, enum: ["TRIAL", "ACTIVE", "SUSPENDED"], default: "TRIAL" },
}, { timestamps: true });

export default mongoose.model("Tenant", tenantSchema);
