import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmBooking = async () => {
      const query = new URLSearchParams(location.search);
      const rawData = query.get("data");
      if (!rawData) return;

      const appointment = JSON.parse(decodeURIComponent(rawData));

      const res = await fetch("http://localhost:3000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointment),
      });

      if (res.ok) {
        toast.success("Appointment booked successfully!");
        navigate("/Appointments");
      } else {
        toast.error("Payment succeeded but booking failed.");
      }
    };

    confirmBooking();
  }, [location, navigate]);

  return <p>Processing your appointment...</p>;
};

export default PaymentSuccess;
