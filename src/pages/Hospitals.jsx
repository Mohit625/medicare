import { useState,useEffect} from "react";
import { HeroSection } from "./../components/hospital/HeroSection";
import { HospitalCard } from "./../components/hospital/HospitalCard";
import { TestimonialCard } from "./../components/hospital/TestimonialCard";
import { Button } from "./../components/ui/button";
import { Input } from "./../components/ui/input";
import { Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious, } from "./../components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./../components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "./../components/ui/avatar";
import { Search, Filter, ChevronLeft, ChevronRight, Quote } from "lucide-react";



const testimonials = [
  {
    quote: "City General Hospital's emergency team saved my life. I was welcomed with care and compassion, and the doctors were incredibly skilled.",
    name: "Alex T.",
    location: "Boston, MA"
  },
  {
    quote: "At Memorial Medical Center, my son's cancer treatment was handled by world-class professionals. The staff supported us every step of the way.",
    name: "Priya S.",
    location: "New York, NY"
  },
  {
    quote: "The maternity care at St. Mary's Hospital was exceptional. The nurses made sure my family felt comfortable and safe throughout.",
    name: "Linda G.",
    location: "Los Angeles, CA"
  }
];

export default function Hospitals() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/api/hospitals") // Update if deployed elsewhere
      .then(res => res.json())
      .then(data => {
        setHospitals(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch hospitals:", err);
        setLoading(false);
      });
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const hospitalsPerPage = 10;
  const indexOfLastHospital = currentPage * hospitalsPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalsPerPage;
  const currenthospital = hospitals.slice(indexOfFirstHospital, indexOfLastHospital);
  const totalPages = Math.ceil(hospitals.length / hospitalsPerPage);
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) return <p className="text-center text-gray-600">Loading hospitals...</p>;
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      {/* Quote Section */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Medical professionals illustration placeholder */}
              <div className="bg-gradient-to-br from-blue-100 to-white rounded-2xl p-8 relative overflow-hidden">
                <div className="flex justify-center items-center h-64">
                  <div className="flex space-x-4">
                    <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                      <AvatarFallback className="bg-blue-200 text-blue-800 text-lg font-semibold">
                        👩‍⚕️
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                      <AvatarFallback className="bg-blue-200 text-blue-800 text-lg font-semibold">
                        👨‍⚕️
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Quote className="w-12 h-12 text-blue-400" />
              <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed">
                "Wherever the art of medicine is loved, there is also a love of humanity."
              </blockquote>
              <cite className="text-lg text-blue-600 font-medium block">
                — Hippocrates
              </cite>
              
              <div className="bg-blue-100 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <blockquote className="text-blue-800 italic">
                  "The best way to find yourself is to lose yourself in the service of others."
                </blockquote>
                <cite className="text-blue-700 font-medium block mt-2">
                  — Mahatma Gandhi
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitals Listing Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">All Hospitals</h2>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Relevance"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="distance">Distance</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currenthospital.map((hospital, index) => (
              <HospitalCard key={index} {...hospital} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-8 flex justify-center">
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
        />
      </PaginationItem>

      {[...Array(totalPages)].map((_, i) => (
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i + 1 === currentPage}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(i + 1);
            }}
          >
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem>
        <PaginationNext
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) setCurrentPage(currentPage + 1);
          }}
        />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</div>
        </div>
      </section>

      {/* Patient Testimonials Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Patients Say About Our Hospitals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stories and feedback from patients who received outstanding care at our partner hospitals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}