import { Star, Building2, GraduationCap, Clock, DollarSign, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./../ui/button";
import { Card, CardContent } from "./../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./../ui/avatar";
import { Badge } from "./../ui/badge";
import { useEffect,useState } from "react";
import { useUser } from "@clerk/clerk-react";
import BookingModal from "../appointment/BookingModal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SearchFilters from "./SearchFilters";
import { toast } from "sonner";

const AllDoctors = () => {
  const { user } = useUser();
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />);
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case "Available Today":
        return "text-blue-600";
      case "Available Tomorrow":
        return "text-blue-500";
      case "Fully Booked":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const [allDoctors, setallDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/api/doctors") 
      .then(res => res.json())
      .then(data => {
        setallDoctors(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch doctors:", err);
        setLoading(false);
      });
  }, []);
const [searchText, setSearchText] = useState("");
const [selectedSpecialty, setSelectedSpecialty] = useState("all");
const [selectedHospital, setSelectedHospital] = useState("all");
  const filteredDoctors = allDoctors.filter((doctor) => {
    const matchesSearch = searchText.trim().length === 0 ||
      doctor.name.toLowerCase().includes(searchText.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchText.toLowerCase()) ||
      doctor.specialties.some(s => s.toLowerCase().includes(searchText.toLowerCase()));
  
    const matchesSpecialty = selectedSpecialty === "all" || doctor.specialty === selectedSpecialty;
    const matchesHospital = selectedHospital === "all" || doctor.hospital === selectedHospital;
  
    return matchesSearch && matchesSpecialty && matchesHospital;
  });
  
  const [sortBy, setSortBy] = useState("relevance");
  const sortedDoctors = [...filteredDoctors].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    } else if (sortBy === "experience") {
      const aYears = parseInt(a.experience);
      const bYears = parseInt(b.experience);
      return bYears - aYears;
    } else if (sortBy === "price") {
      return a.consultationFee - b.consultationFee;
    } else {
      return 0; 
    }
  });  
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 10;
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = sortedDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(allDoctors.length / doctorsPerPage);
  const [showModal, setShowModal] = useState(false);
const [selectedDoctor, setSelectedDoctor] = useState(null);  


  return (
    <>
    <SearchFilters
  searchText={searchText}
  onSearchChange={setSearchText}
  selectedSpecialty={selectedSpecialty}
  onSpecialtyChange={setSelectedSpecialty}
  selectedHospital={selectedHospital}
  onHospitalChange={setSelectedHospital}
/>
    <section className="bg-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="sm:flex space-y-4 items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">All Doctors</h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border-0">
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="experience">Experience</SelectItem>
                <SelectItem value="price">Price</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 space-y-6">
          {currentDoctors.map((doctor) => (
            <>
            <Card key={doctor._id} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left: Doctor Info */}
                  <div className="lg:col-span-2">
                    <div className="flex space-x-4">
                      <Avatar className="sm:h-20 sm:w-20">
                        <AvatarImage src={doctor.image} alt={doctor.name} />
                        <AvatarFallback className="bg-gray-200 text-gray-700 text-lg">
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                            <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                          </div>
                          <span className={`text-sm font-medium ${getAvailabilityColor(doctor.availability)}`}>
                            {doctor.availability}
                          </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center mb-3">
                          <div className="flex mr-2">
                            {renderStars(doctor.rating)}
                          </div>
                          <span className="text-sm font-medium text-gray-700 mr-1">{doctor.rating}</span>
                          <span className="text-sm text-gray-500">({doctor.reviewCount} reviews)</span>
                        </div>

                        {/* Hospital and Education */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Building2 className="h-4 w-4 mr-2 text-blue-500" />
                            <span>{doctor.hospital}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <GraduationCap className="h-4 w-4 mr-2 text-blue-500" />
                            <span>{doctor.education}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-2 text-blue-500" />
                            <span>{doctor.experience}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <DollarSign className="h-4 w-4 mr-2 text-blue-500" />
                            <span>${doctor.consultationFee} per consultation</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4">{doctor.description}</p>

                        {/* Specialties */}
                        <div className="flex flex-wrap gap-2">
                          {doctor.specialties.map((specialty, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex flex-col justify-center space-y-3">
                    <Button 
                      className={`w-full cursor-pointer ${
                        doctor.availability === "Fully Booked" 
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                      disabled={doctor.availability === "Fully Booked"}
                      onClick = {() => {
                        setSelectedDoctor(doctor);
                        setShowModal(true);
                      }}
                    >
                      Book Appointment
                    </Button>
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 cursor-pointer">
                      <a href={`/Doctors/${doctor._id}`}>
                      View Profile
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <BookingModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            doctor={selectedDoctor}
            user={user}
            onBookingSuccess={(data) => {
              toast.success("Appointment booked!");
            }}
          />
          </>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
  <Pagination className="overflow-x-scroll" >
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
    </>
  );
};

export default AllDoctors;