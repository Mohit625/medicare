import express from "express";
import Appointment from "../models/Appointment.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    const saved = await appointment.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to save appointment", details: err });
  }
});

router.get("/", async (req, res) => {
  const { userId, doctorId } = req.query;

  try {
    const filter = {};
    if (userId) filter.userId = userId;
    if (doctorId) filter.doctorId = doctorId;

    const appointments = await Appointment.find(filter);
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Appointment.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Appointment not found" });
    res.json({ message: "Appointment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete appointment", details: err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: "Appointment not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update appointment", details: err });
  }
});

export default router;
