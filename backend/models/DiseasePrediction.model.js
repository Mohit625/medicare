import mongoose from "mongoose";

const DiseasePredictionSchema = new mongoose.Schema({
  userId: String,
  diseases: [
    {
        disease: { type: String, required: true },
        confidence: { type: String, required: true },
        why: { type: String, required: true }
    }
  ],
},{ timestamps: true });
const DiseasePrediction = mongoose.model("DiseasePrediction", DiseasePredictionSchema);
export default DiseasePrediction;