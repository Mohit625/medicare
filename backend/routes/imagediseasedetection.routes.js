// import express from "express";
// import multer from "multer";
// import fs from "fs";
// import axios from "axios";
// import DiseasePrediction from "../models/DiseasePrediction.model.js";
// import dotenv from "dotenv";
// dotenv.config();

// const router = express.Router();
// const upload = multer({ dest: "uploads/" });

// const HF_API_KEY = process.env.HF_API_KEY;
// console.log(HF_API_KEY);
// router.post("/", upload.single("image"), async (req, res) => {
//   const { userId } = req.body;

//   if (!req.file) {
//     return res.status(400).json({ error: "No image file uploaded" });
//   }

//   try {
//     const imageBuffer = fs.readFileSync(req.file.path);

//     const hfRes = await axios.post(
//       "https://api-inference.huggingface.co/models/nateraw/resnet50-medical",
//       imageBuffer,
//       {
//         headers: {
//           Authorization: `Bearer ${HF_API_KEY}`,
//           "Content-Type": "application/octet-stream",
//         },
//       }
//     );

//     fs.unlinkSync(req.file.path);

//     const prediction = new DiseasePrediction({
//       userId,
//       imageName: req.file.originalname,
//       prediction: hfRes.data,
//       date: new Date(),
//     });

//     const saved = await prediction.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     console.error("Prediction failed:", err.message);
//     res.status(500).json({ error: "Prediction failed", details: err.message });
//   }
// });
// export default router;