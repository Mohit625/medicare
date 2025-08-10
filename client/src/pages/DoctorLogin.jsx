import { useState } from "react";

const DoctorLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!name || !password) {
      setError("Please enter both name and password.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/doctors/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("doctor", JSON.stringify(data.doctor));
        window.location.href = "/doctor-dashboard";
      } else {
        setError(data.message || "Login failed. Please check credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Doctor Login</h2>

        <input
          type="text"
          placeholder="Doctor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 mb-4 rounded focus:outline-none focus:ring"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-4 rounded focus:outline-none focus:ring"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>

        {error && <p className="text-red-600 mt-3 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default DoctorLogin;
