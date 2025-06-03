import HeroSection from "./../components/doctor/HeroSection";
import SpecialtyGrid from "./../components/doctor/SpecialtyGrid";
import FeaturedDoctors from "./../components/doctor/FeaturedDoctors";
import AllDoctors from "./../components/doctor/AllDoctors";
import HospitalsList from "./../components/doctor/HospitalsList";
import Testimonials from "./../components/doctor/Testimonials";

const Doctors = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <SpecialtyGrid />
      <FeaturedDoctors />
      <AllDoctors />
      <HospitalsList />
      <Testimonials />
    </div>
  );
};

export default Doctors;