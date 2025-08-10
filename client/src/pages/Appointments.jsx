import React from "react";
import { CalendarIcon, ClockIcon, MapPinIcon, PlusIcon, SearchIcon, UserIcon, VideoIcon } from "lucide-react";
import CalendarCard from "@/components/appointment/CalendarCard";
import { useUser } from "@clerk/clerk-react";
import { useState,useEffect } from "react";
import { AppointmentCard } from "@/components/appointment/AppointmentCard";
// Reusable Button component (basic version)
const Button = ({ children, className = "", variant = "solid", ...props }) => {
  const baseClasses =
    "px-4 py-2 rounded text-sm font-medium inline-flex items-center gap-2 transition";
  const styles =
    variant === "outline"
      ? "border border-blue-300 text-blue-600 bg-white hover:bg-blue-50"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button className={`${baseClasses} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Main Appointments page
const Appointments = () => {
  const { user, isSignedIn } = useUser();
  const stat = ["upcoming","past"];
const [upcomingAppointments, setUpcomingAppointments] = useState([]);
const [pastAppointments, setPastAppointments] = useState([]);
const [rebookDoctor, setRebookDoctor] = useState(null);
const [rebookIssue, setRebookIssue] = useState("");

const handleRebook = async (appointment) => {
  try {
    const res = await fetch(`https://medicare-ired.onrender.com/api/doctors/${appointment.doctorId}`);
    const doctor = await res.json();
    setRebookDoctor(doctor);
    setShowRebookModal(true);
  } catch (err) {
    console.error("Failed to fetch doctor for rebooking:", err);
  }
};
useEffect(() => {
  if (!isSignedIn) return;

  const fetchAppointments = async () => {
    try {
      const res = await fetch(`https://medicare-ired.onrender.com/api/appointments?userId=${user.id}`);
      const data = await res.json();
      const now = new Date();

      const upcoming = [];
      const past = [];

      data.forEach((appt) => {
        const apptDate = new Date(`${appt.date} ${appt.time}`);
        if (apptDate >= now && appt.status !== "Cancelled") {
          upcoming.push(appt);
        } else {
          past.push(appt);
        }
      });

      setUpcomingAppointments(upcoming);
      setPastAppointments(past);
    } catch (err) {
      console.error("Failed to fetch appointments:", err);
    }
  };

  fetchAppointments();
}, [user, isSignedIn]);
const handleCancelAppointment = async (id) => {
  if (!confirm("Are you sure you want to cancel this appointment?")) return;
  try {
    const res = await fetch(`https://medicare-ired.onrender.com/api/appointments/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Cancelled" }),
    });
    const updated = await res.json();
    setUpcomingAppointments((prev) => prev.filter((appt) => appt._id !== id));
    setPastAppointments((prev) => [...prev, updated]);

  } catch (err) {
    console.error("Failed to Cancel appointment:", err);
  }
};
const handleDeleteAppointment = async (id) => {
  if (!confirm("Are you sure you want to cancel this appointment?")) return;

  try {
    await fetch(`https://medicare-ired.onrender.com/api/appointments/${id}`, {
      method: "DELETE",
    });
    setUpcomingAppointments((prev) => prev.filter((appt) => appt._id !== id));
  } catch (err) {
    console.error("Failed to Delete appointment:", err);
  }
};
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <main className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between mb-10">

        <div className="my-auto">
        <h1 className="text-3xl font-bold mb-2">Your Appointments</h1>
        <p className="text-gray-600 mb-6">Manage and join your appointments easily.</p>

        <div className="mb-6 flex gap-4 flex-wrap">
            <a href="/Doctors" >
          <Button>
            <PlusIcon size={16} />
            Book New Appointment
          </Button>
            </a>
            <a href="/Doctors" >
          <Button variant="outline">
            <SearchIcon size={16} />
            Find a Doctor
          </Button>
            </a>
          
        </div>
        </div>
        <CalendarCard appointments={upcomingAppointments}/>
        </div>


        <section className="mb-10">
        {upcomingAppointments.length >0?
        <>
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          <div className="grid md:grid-cols-2 gap-8 ">
            {upcomingAppointments?.map((appt,index) => (
              <AppointmentCard key={index} appointment={appt} stats={stat[0]} onCancel={handleCancelAppointment} />
            ))}
          </div>
        </>
          : <h2 className="text-xl font-semibold m-auto">You haven’t booked any appointments yet.</h2>}
        </section>

        <section>
        {pastAppointments.length >0?
        <>
          <h2 className="text-xl font-semibold mb-4">Past Appointments</h2>
          <div className="grid md:grid-cols-2 gap-8 ">
            {pastAppointments.map((appt) => (
              <AppointmentCard key={appt._id} appointment={appt} stats={stat[1]} onCancel={handleDeleteAppointment} onRebook={handleRebook}/>
            ))}
          </div>
        </>:<div></div>}
        </section>
      </main>
    </div>
  );
};

export default Appointments;
