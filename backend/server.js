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

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// Load local JSON data
const tips = JSON.parse(fs.readFileSync('updated_health_tips.json', 'utf8'));
const doctors = JSON.parse(fs.readFileSync('doctors_list_with_images.json', 'utf8'));
const hospitals = JSON.parse(fs.readFileSync('hospitals_list.json', 'utf8'));

app.use("/api/user-profile", userProfileRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/disease-predictions', DiseasePredictionRoutes);

// Other APIs
app.get("/", (req, res) => res.send("API is running..."));
app.get('/api/tips', (_, res) => res.json(tips));
app.get('/api/tips/:id', (req, res) => {
  const tip = tips[parseInt(req.params.id)];
  tip ? res.json(tip) : res.status(404).json({ error: 'Tip not found' });
});
app.get('/api/doctors', (_, res) => res.json(doctors));
app.get('/api/doctors/:id', (req, res) => {
  const doctor = doctors.find(d => d.id === parseInt(req.params.id));
  doctor ? res.json(doctor) : res.status(404).json({ error: 'Doctor not found' });
});
app.get('/api/hospitals', (_, res) => res.json(hospitals));
app.get('/api/hospitals/:name', (req, res) => {
  const name = decodeURIComponent(req.params.name);
  const hospital = hospitals.find(h => h.name.toLowerCase() === name.toLowerCase());
  hospital ? res.json(hospital) : res.status(404).json({ error: 'Hospital not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 API server running at http://localhost:${PORT}`);
});
