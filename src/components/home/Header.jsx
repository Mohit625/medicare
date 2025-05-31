import { useState } from "react";
import {
  Stethoscope,
  Menu,
  X,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser, SignOutButton } from "@clerk/clerk-react";

const Header = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const guestLinks = [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/Doctors" },
    { name: "Hospitals", href: "/Hospitals" },
    { name: "Services", href: "#" },
    { name: "Reviews", href: "#" },
    { name: "Blog", href: "/Blog" },
    { name: "Contact", href: "#" },
  ];

  const userLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Doctors", href: "/Doctors" },
    { name: "Hospitals", href: "/hospitals" },
    { name: "Appointments", href: "/appointments" },
    { name: "Health Records", href: "/health-records" },
    { name: "Blog", href: "/blog" },
  ];

  if (!isLoaded) {
    return (
      <header className="h-16 bg-white border-b shadow-sm flex items-center justify-center">
        <span className="text-sm text-gray-500">Loading...</span>
      </header>
    );
  }

  const links = isSignedIn ? userLinks : guestLinks;

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {isSignedIn ? (
              <>
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-blue-600">Medicare AI</span>
              </>
            ) : (
              <>
                <Stethoscope className="h-8 w-8 text-teal-600" />
                <span className="text-xl font-bold text-gray-900">Medicare AI</span>
              </>
            )}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Buttons Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {isSignedIn ? (
              <>
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.imageUrl} alt={user.fullName || "User"} />
                  <AvatarFallback>
                    {user.firstName?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <SignOutButton>
                  <Button variant="ghost" className="text-teal-600 hover:text-teal-800">
                    Sign Out
                  </Button>
                </SignOutButton>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white transition"
                  onClick={() => (window.location.href = "/sign-in")}
                >
                  Sign In
                </Button>
                <Button
                  className="bg-teal-600 text-white hover:bg-teal-700 transition"
                  onClick={() => (window.location.href = "/sign-up")}
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 text-base font-medium"
              >
                {item.name}
              </a>
            ))}

            <hr className="my-3 border-gray-200" />

            {isSignedIn ? (
              <div className="flex flex-col items-center space-y-3 px-2">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={user.imageUrl} alt={user.fullName || "User"} />
                  <AvatarFallback>
                    {user.firstName?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <span className="text-lg font-semibold text-gray-900">
                  {user.fullName || "User"}
                </span>
                <SignOutButton>
                  <Button
                    variant="outline"
                    className="w-full text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white transition"
                  >
                    Sign Out
                  </Button>
                </SignOutButton>
              </div>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="w-full text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white transition"
                  onClick={() => (window.location.href = "/sign-in")}
                >
                  Sign In
                </Button>
                <Button
                  className="w-full bg-teal-600 text-white hover:bg-teal-700 transition"
                  onClick={() => (window.location.href = "/sign-up")}
                >
                  Get Started
                </Button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
