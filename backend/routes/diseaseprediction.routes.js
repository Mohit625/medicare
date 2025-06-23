import express from "express";
import DiseasePrediction from "../models/DiseasePrediction.model.js";

const router = express.Router();
router.post("/", async (req, res) => {
    try {
      const prediction = new DiseasePrediction(req.body);
      const saved = await prediction.save();
      res.status(201).json(saved);
    } catch (err) {
      res.status(500).json({ error: "Failed to store prediction", details: err });
    }
  });
  router.get("/", async (req, res) => {
    const { userId } = req.query;
    try {
      const prediction = await DiseasePrediction.find({ userId });
      res.json(prediction);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch appointments" });
    }
  });
  export default router;