// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import AppointmentCard from "@/components/user/AppointmentCard";
// import { Calendar, Video, XCircle } from "lucide-react";

// const Appointments = () => {
// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   // Simulate fetching data
// //   useEffect(() => {
// //     const fetchAppointments = async () => {
// //       // Replace this with actual API call
// //       const data = await fetch("/api/appointments").then(res => res.json());
// //       setAppointments(data);
// //       setLoading(false);
// //     };
// //     fetchAppointments();
// //   }, []);
//   const appointments = [
//     {
//       doctorName: "Dr. Maya Gupta",
//       specialty: "Infectious Diseases",
//       date: "Mon, June 2",
//       time: "10:30 AM",
//       location: "City Hospital, Room 214",
//     },
//     {
//       doctorName: "Dr. Aisha Khan",
//       specialty: "Family Medicine",
//       date: "Thu, June 5",
//       time: "4:45 PM",
//       location: "Family Health Clinic, Block B",
//     },
//   ];
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">My Appointments</h1>

//       {loading ? (
//         <p>Loading...</p>
//       ) : appointments.length === 0 ? (
//         <p className="text-gray-600">You have no appointments.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {appointments.map((appt) => (
//             <AppointmentCard
//              // key={appt.id}
//               doctorName={appt.doctorName}
//               specialty={appt.specialty}
//               date={appt.date}
//               time={appt.time}
//               location={appt.location}
//              // videoLink={appt.videoLink}
//              // onReschedule={() => console.log("Reschedule", appt.id)}
//               //onCancel={() => console.log("Cancel", appt.id)}
//               //onJoinCall={() => window.open(appt.videoLink, "_blank")}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Appointments;
