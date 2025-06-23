import { Routes, Route, useNavigate , useLocation } from "react-router-dom";
import { SignIn, SignUp, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import Header from "./../src/components/home/Header";
import Dashboard from "./../src/pages/Dashboard";
import HomePage from "./../src/pages/HomePage";
import { Footer } from "./components/home/Footer";
import Doctors from "./../src/pages/Doctors";
import Hospitals from "./../src/pages/Hospitals";
import Blog from "./../src/pages/Blog";
import Appointments from "./pages/Appointments";
import { Toaster } from "sonner";
import Health_Records from "./pages/Health_Records";
import DoctorDetail from "./components/doctor/DoctorDetail";
const AuthRedirect = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      isSignedIn &&
      (location.pathname === "/" ||
        location.pathname.startsWith("/sign-in") ||
        location.pathname.startsWith("/sign-up"))
    ) {
      navigate("/dashboard");
    }
  }, [isSignedIn, location.pathname, navigate]);

  return null;
};

function App() {
  return (
    <>
     <Toaster position="top-right" richColors />
      <Header />
      <AuthRedirect />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Doctors/:id" element={<DoctorDetail />} />
        <Route path="/Hospitals" element={<Hospitals />} />
        <Route path="/Appointments" element={<Appointments />} />
        <Route path="/Health_Records" element={<Health_Records />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
