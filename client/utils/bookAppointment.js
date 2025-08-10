export const bookAppointment = async (appointmentData) => {
    const res = await fetch("https://medicare-ired.onrender.com/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointmentData),
    });
    return await res.json();
  };
  