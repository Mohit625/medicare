export const bookAppointment = async (appointmentData) => {
    const res = await fetch("http://localhost:3000/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointmentData),
    });
    return await res.json();
  };
  