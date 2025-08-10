import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({}, { strict: false });

export default mongoose.model("Hospital", hospitalSchema);
