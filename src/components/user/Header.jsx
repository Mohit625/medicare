import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Header = () => {
  const navItems = [
    { name: "Dashboard", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: "Hospitals", href: "/hospitals" },
    { name: "Appointments", href: "/appointments" },
    { name: "Health Records", href: "/health-records" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-600">
                Medicare AI
              </span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                {item.name}
              </Button>
            ))}
          </nav>

          <div className="flex items-center">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback className="bg-blue-100 text-blue-600">
                A
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;