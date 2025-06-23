import express from "express";
import UserProfile from "../models/UserProfile.model.js"

const router = express.Router();

router.post("/", async (req, res) => {
    try {
      const existing = await UserProfile.findOne({ userId: req.body.userId });
      if (existing) {
        return res.status(400).json({ message: "Profile already exists." });
      }
  
      const profile = new UserProfile(req.body);
      const saved = await profile.save();
      res.status(201).json(saved);
    } catch (err) {
      res.status(500).json({ error: "Failed to save profile", details: err });
    }
  });
  router.get("/", async (req, res) => {
    const { userId } = req.query;
    try {
      const profile = await UserProfile.findOne({ userId });
      if (!profile) return res.status(404).json({ error: "Profile not found" });
      res.json(profile);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch profile", details: err });
    }
  });

export default router;
