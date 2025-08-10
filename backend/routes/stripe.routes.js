// routes/stripe.routes.js
import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import Appointment from "../models/Appointment.model.js";
import cors from "cors";

dotenv.config();
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
  const { appointmentDetails } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Consultation with Dr. ${appointmentDetails.doctorName}`,
            },
            unit_amount: 2000, // $20
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:5173/payment-success?data=${encodeURIComponent(JSON.stringify(appointmentDetails))}`,
      cancel_url: `http://localhost:5173/payment-failure`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe session error:", err);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

export default router;
