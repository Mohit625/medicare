import { Input } from "./../ui/input";
import { Button } from "./../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./../ui/select";
import { Search, Filter } from "lucide-react";

const BlogSearch = () => {
  return (
    <div className="mb-12">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search articles, topics, or authors..."
            className="pl-10"
          />
        </div>
        <div className="sm:flex space-y-2 gap-3 bg-accent">
          <Select className="bg-white" >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent className="bg-white border-0"  >
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="innovation">Innovation</SelectItem>
              <SelectItem value="wellness">Wellness</SelectItem>
              <SelectItem value="patient-stories">Patient Stories</SelectItem>
              <SelectItem value="medical-news">Medical News</SelectItem>
              <SelectItem value="healthcare-tips">Healthcare Tips</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="All Authors" />
            </SelectTrigger>
            <SelectContent className="bg-white border-0" >
              <SelectItem value="all">All Authors</SelectItem>
              <SelectItem value="dr-john-evans">Dr. John Evans</SelectItem>
              <SelectItem value="dr-emma-carter">Dr. Emma Carter</SelectItem>
              <SelectItem value="dr-alicia-lin">Dr. Alicia Lin</SelectItem>
              <SelectItem value="dr-raj-malhotra">Dr. Raj Malhotra</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="text-blue-600">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;