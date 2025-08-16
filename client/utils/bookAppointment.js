export const bookAppointment = async (appointmentData) => {
    const res = await fetch("https://medicare-coral-psi.vercel.app/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointmentData),
    });
    return await res.json();
  };
  