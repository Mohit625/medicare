import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    bloodGroup: { type: String, required: true },
    diseases: [{ type: String }],
  }, { timestamps: true });
  
  const UserProfile = mongoose.model("UserProfile", userProfileSchema);
  
  export default UserProfile;
