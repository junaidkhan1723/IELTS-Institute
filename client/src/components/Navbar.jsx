import { User, UserCircle, Calendar } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    toast.success("Book Now clicked");
  };

  const handleSingIn = () => {
    toast.success("SingIn clicked");
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
                className="text-3xl font-extrabold text-red-600 hover:text-red-500 sm:-ms-15 cursor-pointer"
              >
                IELTS Pro
              </span>

              {/*Links */}
              <div className="flex items-center space-x-6 ml-10">
                {navLinks.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-red-600 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4 -me-15">
              <button
                onClick={handleSingIn}
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
