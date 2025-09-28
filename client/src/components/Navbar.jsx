import React, { useState } from "react";
import {
  Menu,
  X,
  User,
  UserCircle,
  Calendar,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookNow = () => {
    toast.success("Book Now clicked");
  };

  const handleSignIn = () => {
    toast.success("Sign In clicked");
  };

  const navLinks = [
    "IELTS Tests",
    "IELTS Preparation",
    "IELTS Results",
    "Information",
    "Contact Us",
  ];

  return (
    <>
      <Toaster position="top-center" />
      <nav className="bg-white sm:shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-18 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <span
                onClick={() => navigate("/")}
                className="text-3xl font-extrabold text-red-600 hover:text-red-500 cursor-pointer"
              >
                IELTS Pro
              </span>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center space-x-6 ml-10">
                {navLinks.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <span className="flex items-center">
                      {item}
                      <ChevronDown className="w-4 h-4 ms-1" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={handleSignIn}
                className="flex items-center gap-1 text-gray-700 hover:text-red-600 transition-colors cursor-pointer"
              >
                <User className="w-4 h-4" />
                Sign In
              </button>
              <button
                onClick={handleBookNow}
                className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </button>
            </div>

            {/* Mobile Right Side */}
            <div className="md:hidden flex items-center space-x-3">
              <button onClick={handleSignIn} className="text-sm">
                <UserCircle className="w-6 h-6 text-gray-700 hover:text-red-600" />
              </button>
              <button
                onClick={handleBookNow}
                className="px-3 py-1 bg-red-600 text-white rounded-full text-sm hover:bg-red-700"
              >
                Book Now
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-gray-700 hover:text-red-600 focus:outline-none"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown*/}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 flex flex-col">
          {/* Links */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="flex justify-between items-center px-4 py-6 text-gray-700 hover:text-red-600 transition-colors"
              >
                <span>{item}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Bottom buttons */}
          <div className="bg-gray-50 border-t border-gray-200 px-4 pt-4 pb-4 space-y-3">
            <button
              onClick={handleBookNow}
              className="w-full inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white bg-red-600 rounded-full hover:bg-red-700"
            >
              <Calendar className="w-4 h-4" />
              Book now
            </button>
            <button
              onClick={handleSignIn}
              className="w-full inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100"
            >
              <User className="w-4 h-4" />
              Sign In
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
