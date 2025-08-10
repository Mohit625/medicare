import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdEventNote, MdSettings, MdMenu, MdClose } from "react-icons/md";
import { Stethoscope } from "lucide-react";

const DoctorLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", icon: <MdDashboard />, path: "/doctor-dashboard" },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
        `}
      >
        {/* Sidebar header for mobile */}
        <div className="flex items-center justify-between p-4 md:hidden">
          <div className="text-xl font-bold text-blue-600">TeleMed</div>
          <button onClick={() => setIsSidebarOpen(false)}>
            <MdClose className="text-2xl" />
          </button>
        </div>

        <div className="hidden md:flex justify-center py-6 text-2xl font-bold">
          
              <Stethoscope className="h-7 w-7 text-teal-600" />
              <span className="text-gray-800">Medicare AI</span>
           
        </div>

        <ul className="space-y-4 px-6 text-gray-700">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
                  pathname === item.path
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay (for mobile) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-auto">
        {/* Top bar for mobile */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
          <button onClick={() => setIsSidebarOpen(true)}>
            <MdMenu className="text-2xl" />
          </button>
          <div className="text-lg font-bold flex">
          
              <Stethoscope className="h-7 w-7 text-teal-600" />
              <span className="text-gray-800">Medicare AI</span>
           
        </div>
          
          <div className="w-6" /> {/* Placeholder to balance menu button */}
        </div>

        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
};

export default DoctorLayout;
