import { useState } from "react";
import { Stethoscope, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser, SignOutButton } from "@clerk/clerk-react";
import { Link,useLocation } from "react-router-dom"; // for SPA routing

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
    { name: "Health Records", href: "/Health_Records" },
    { name: "Blog", href: "/blog" },
  ];

  const links = isSignedIn ? userLinks : guestLinks;
  const location = useLocation();
const currentPath = location.pathname;

  if (!isLoaded) {
    return (
      <header className="h-16 flex items-center justify-center bg-white border-b">
        <span className="text-gray-500 text-sm">Loading...</span>
      </header>
    );
  }

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          
              <Stethoscope className="h-7 w-7 text-teal-600" />
              <span className="text-gray-800">Medicare AI</span>
           
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
        {links.map((item) => {
  const isActive = currentPath === item.href;
  return (
    <Link
      key={item.name}
      to={item.href}
      className={`text-sm font-medium transition-colors ${
        isActive
          ? "text-teal-600 border-b-2 border-teal-600 "
          : "text-gray-700 hover:text-green-700"
      }`}
    >
      {item.name}
    </Link>
  );
})}
        </nav>

        {/* Right Side - Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isSignedIn ? (
            <>
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.imageUrl} />
                <AvatarFallback>{user.firstName?.[0] || "U"}</AvatarFallback>
              </Avatar>
              <SignOutButton>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-800">
                  Sign Out
                </Button>
              </SignOutButton>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={() => (window.location.href = "/sign-in")}>
                Sign In
              </Button>
              <Button onClick={() => (window.location.href = "/sign-up")}>
                Get Started
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700 hover:text-blue-600">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm px-4 py-3 space-y-3">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block text-gray-700 hover:text-blue-600 text-base font-medium"
            >
              {link.name}
            </Link>
          ))}
          <hr className="my-3 border-gray-200" />
          {isSignedIn ? (
            <div className="space-y-3 text-center">
              <Avatar className="h-14 w-14 mx-auto">
                <AvatarImage src={user.imageUrl} />
                <AvatarFallback>{user.firstName?.[0] || "U"}</AvatarFallback>
              </Avatar>
              <div className="text-lg font-semibold text-gray-800">{user.fullName}</div>
              <SignOutButton>
                <Button variant="outline" className="w-full">
                  Sign Out
                </Button>
              </SignOutButton>
            </div>
          ) : (
            <>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => (window.location.href = "/sign-in")}
              >
                Sign In
              </Button>
              <Button className="w-full" onClick={() => (window.location.href = "/sign-up")}>
                Get Started
              </Button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
