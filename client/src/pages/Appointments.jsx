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
const [upcomingAppointments, setUpcomingAppointments] = useState([]);
useEffect(() => {
  if (!isSignedIn) return;

  const fetchAppointments = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/appointments?userId=${user.id}`);
      const data = await res.json();
      setUpcomingAppointments(data);
    } catch (err) {
      console.error("Failed to fetch appointments:", err);
    }
  };

  fetchAppointments();
}, [user, isSignedIn]);
const handleCancelAppointment = async (id) => {
  if (!confirm("Are you sure you want to cancel this appointment?")) return;

  try {
    await fetch(`http://localhost:3000/api/appointments/${id}`, {
      method: "DELETE",
    });
    setUpcomingAppointments((prev) => prev.filter((appt) => appt._id !== id));
  } catch (err) {
    console.error("Failed to cancel appointment:", err);
  }
};
  const pastAppointments = [
    {
      id: "4",
      doctor: {
        name: "Dr. Michael Chen",
        specialty: "Orthopedic Surgeon",
        image:
          "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=80&q=80",
      },
      date: "May 15, 2025",
      time: "2:00 PM",
      type: "in-person",
      status: "completed",
    },
    {
      id: "5",
      doctor: {
        name: "Dr. Lisa Wong",
        specialty: "Dermatologist",
        image:
          "https://images.unsplash.com/photo-1594824388853-c6b99e4b5c88?auto=format&fit=crop&w=80&q=80",
      },
      date: "April 28, 2025",
      time: "11:30 AM",
      type: "video",
      status: "completed",
    },
    {
        id: "6",
        doctor: {
          name: "Dr. Robert Smith",
          specialty: "General Physician",
          image:
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        },
        date: "April 10, 2025",
        time: "9:15 AM",
        type: "in-person",
        status: "cancelled",
      },
  ];
  
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
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          <div className="grid md:grid-cols-2 gap-8 ">
            {upcomingAppointments?.map((appt,index) => (
              <AppointmentCard key={index} appointment={appt} onCancel={handleCancelAppointment} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Past Appointments</h2>
          <div className="grid md:grid-cols-2 gap-8 ">
            {pastAppointments.map((appt) => (
              <AppointmentCard key={appt.id} appointment={appt} onCancel={handleCancelAppointment}/>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Appointments;
