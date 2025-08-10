import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  userId: { type: String, required: true },       
  userName: { type: String, required: true },     
  userEmail: { type: String, required: true },    
  issue: { type: String, required: true },    
  doctorId: { type: String },
  doctorName: { type: String, required: true },
  specialty: { type: String, required: true },
  fees: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String },
  videoLink: { type: String },

  status: {
    type: String,
    default: "upcoming",
  },
}, { timestamps: true });

const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);
export default Appointment;
