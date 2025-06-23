import { Search, Filter } from "lucide-react";
import { Input } from "./../ui/input";
import { Button } from "./../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchFilters = ({searchText,onSearchChange,selectedSpecialty,onSpecialtyChange,selectedHospital,onHospitalChange}) => {
  return (
    <section className="bg-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              value={searchText}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by name, specialty, or condition..."
              className="pl-10 py-3 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <Select value={selectedSpecialty} onValueChange={onSpecialtyChange}>
            <SelectTrigger className="w-full lg:w-48 py-3">
              <SelectValue placeholder="All Specialties" />
            </SelectTrigger>
            <SelectContent className="bg-white border-0">
              <SelectItem value="all">All Specialties</SelectItem>
              <SelectItem value="Cardiologist">Cardiology</SelectItem>
              <SelectItem value="Dermatologist">Dermatology</SelectItem>
              <SelectItem value="Pediatrician">Pediatrics</SelectItem>
              <SelectItem value="Orthopedic Surgeon">Orthopedics</SelectItem>
              <SelectItem value="General Physician">General Medicine</SelectItem>
              <SelectItem value="Neurologist">Neurology</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedHospital} onValueChange={onHospitalChange}>
            <SelectTrigger className="w-full lg:w-48 py-3">
              <SelectValue placeholder="All Hospitals" />
            </SelectTrigger>
            <SelectContent className="bg-white border-0">
              <SelectItem value="all">All Hospitals</SelectItem>
              <SelectItem value="city-general">City General Hospital</SelectItem>
              <SelectItem value="memorial">Memorial Medical Center</SelectItem>
              <SelectItem value="university">University Medical Center</SelectItem>
              <SelectItem value="st-marys">St. Mary's Hospital</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;