import express from "express";
import fs from "fs";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;
dotenv.config();

import appointmentRoutes from "./routes/appointment.routes.js";
import userProfileRoutes from "./routes/userProfile.routes.js";
import DiseasePredictionRoutes from "./routes/diseaseprediction.routes.js";
import ImageDetectionRoutes from "./routes/imagediseasedetection.routes.js"
import stripeRoutes from "./routes/stripe.routes.js";

import Doctor from "./models/Doctor.js";
import Hospital from "./models/Hospital.js";
import HealthTip from "./models/HealthTip.js";

app.use(cors({ origin: '*' }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection failed:", err));

app.use("/api", stripeRoutes);
app.use("/api/user-profile", userProfileRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/disease-predictions', DiseasePredictionRoutes);
app.use('/api/image-disease-predictions', ImageDetectionRoutes);

app.get("/", (req, res) => res.send("API is running..."));
app.get('/api/tips', async (_, res) => {
  try {
    const tips = await HealthTip.find();
    res.json(tips);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch health tips" });
  }
});

app.get('/api/tips/:id', async (req, res) => {
  try {
    const tip = await HealthTip.findById(req.params.id);
    tip ? res.json(tip) : res.status(404).json({ error: 'Tip not found' });
  } catch (err) {
    res.status(500).json({ error: "Invalid tip ID" });
  }
});

app.get('/api/doctors', async (_, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch doctors" });
  }
});

app.get('/api/doctors/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    doctor ? res.json(doctor) : res.status(404).json({ error: 'Doctor not found' });
  } catch (err) {
    res.status(500).json({ error: "Invalid doctor ID" });
  }
});

app.post('/api/doctors/login', async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ error: "Name and password are required" });
  }

  try {
    const doctor = await Doctor.findOne({ name });

    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    if (doctor.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const { password: _, ...doctorInfo } = doctor.toObject();
    return res.status(200).json({
      message: "Login successful",
      doctor: doctorInfo
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});


app.get('/api/hospitals', async (_, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch hospitals" });
  }
});

app.get('/api/hospitals/:name', async (req, res) => {
  try {
    const hospital = await Hospital.findOne({ name: new RegExp(`^${req.params.name}$`, 'i') });
    hospital ? res.json(hospital) : res.status(404).json({ error: 'Hospital not found' });
  } catch (err) {
    res.status(500).json({ error: "Invalid hospital name" });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 API server running at http://localhost:${PORT}`);
});
