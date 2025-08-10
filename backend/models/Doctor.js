import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({}, { strict: false }); 
// `strict: false` means any JSON fields will be accepted

export default mongoose.model("Doctor", doctorSchema);
