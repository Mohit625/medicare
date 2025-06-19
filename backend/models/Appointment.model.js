import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  userId: { type: String, required: true },       // Unique ID from Clerk/Auth
  userName: { type: String, required: true },     // Full name of the user
  userEmail: { type: String, required: true },    // Email of the user

  doctorId: { type: String },
  doctorName: { type: String, required: true },
  specialty: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String },
  videoLink: { type: String },

  status: {
    type: String,
    enum: ["upcoming", "completed", "cancelled"],
    default: "upcoming",
  },
}, { timestamps: true });

const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);
export default Appointment;
