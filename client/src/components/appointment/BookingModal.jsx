// 1. ==== BookingModal.jsx (Frontend) ====
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "@/components/ui/button";

const BookingModal = ({ isOpen, onClose, doctor, user }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [issue, setIssue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    if (!date || !time || !issue) return alert("Please fill all fields.");
    setLoading(true);

    const res = await fetch("http://localhost:3000/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        appointmentDetails: {
          userId: user.id,
          userName: user.fullName,
          userEmail: user.primaryEmailAddress.emailAddress,
          issue,
          doctorId: doctor.id,
          doctorName: doctor.name,
          specialty: doctor.specialty,
          fees:doctor.consultationFee,
          date,
          time,
          location: doctor.location,
          videoLink: "https://meet.jitsi.com/" + doctor.name.replace(/\s+/g, ""),
        },
      }),
    });

    const data = await res.json();
    setLoading(false);
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Payment initiation failed.");
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Panel className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
          <Dialog.Title className="text-lg font-bold">Book Appointment with {doctor?.name}</Dialog.Title>
          <Dialog.Title className="mb-4">Fees: ${doctor?.consultationFee}</Dialog.Title>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Date</label>
              <input type="date" className="w-full border rounded px-3 py-2" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium">Issue</label>
              <input type="text" className="w-full border rounded px-3 py-2" value={issue} onChange={(e) => setIssue(e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium">Time</label>
              <input type="time" className="w-full border rounded px-3 py-2" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button onClick={handleBooking} disabled={loading}>{loading ? "Booking..." : "Book & Pay"}</Button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default BookingModal;
