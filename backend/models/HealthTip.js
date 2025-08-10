import mongoose from "mongoose";

const healthTipSchema = new mongoose.Schema({}, { strict: false });

export default mongoose.model("HealthTip", healthTipSchema);
