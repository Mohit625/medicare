import { Button } from "./../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant="outline" size="sm" className="p-2">
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white min-w-8 h-8">
        1
      </Button>
      <Button variant="outline" className="min-w-8 h-8">
        2
      </Button>
      <Button variant="outline" className="min-w-8 h-8">
        3
      </Button>
      <Button variant="outline" size="sm" className="p-2">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;