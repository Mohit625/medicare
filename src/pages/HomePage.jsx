import { NotificationBanner } from "./../components/home/NotificationBanner";
import  Header  from "./../components/home/Header";
import { HeroSection } from "./../components/home/HeroSection";
import { ServicesSection } from "./../components/home/ServicesSection";
import { StatsSection } from "./../components/home/StatsSection";
import { DoctorsSection } from "./../components/home/DoctorsSection";
import { HospitalsSection } from "./../components/home/HospitalsSection";
import { TestimonialsSection } from "./../components/home/TestimonialsSection";
import { BlogSection } from "./../components/home/BlogSection";
import { FAQSection } from "./../components/home/FAQSection";
import { CTASection } from "./../components/home/CTASection";
import { Footer } from "./../components/home/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <DoctorsSection />
        <HospitalsSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
}
