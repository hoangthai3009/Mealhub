import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  tenant: { type: mongoose.Schema.Types.ObjectId, ref: "Tenant", required: true },
  name: { type: String, required: true },
  description: { type: String },
  order: { type: Number, default: 0 },
}, { timestamps: true });

categorySchema.index({ tenant: 1, name: 1 }, { unique: true });

export default mongoose.model("Category", categorySchema);
