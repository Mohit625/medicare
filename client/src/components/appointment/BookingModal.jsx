import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "@/components/ui/button";

const BookingModal = ({ isOpen, onClose, doctor, user, onBookingSuccess }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    if (!date || !time) return alert("Please select date and time.");
    setLoading(true);

    const res = await fetch("http://localhost:3000/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.id,
        userName: user.fullName,
        userEmail: user.primaryEmailAddress.emailAddress,
        doctorId: doctor.id,
        doctorName: doctor.name,
        specialty: doctor.specialty,
        date,
        time,
        location: doctor.location,
        videoLink: "https://meet.jitsi.com/" + doctor.name.replace(/\s+/g, ""),
      }),
    });

    const result = await res.json();
    setLoading(false);
    onBookingSuccess(result);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Panel className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
          <Dialog.Title className="text-lg font-bold mb-4">Book Appointment with {doctor?.name}</Dialog.Title>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Date</label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Time</label>
              <input
                type="time"
                className="w-full border rounded px-3 py-2"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button onClick={handleBooking} disabled={loading}>
                {loading ? "Booking..." : "Book"}
              </Button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default BookingModal;