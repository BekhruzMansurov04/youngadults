import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const navItems = [
    { label: "Bosh sahifa", path: "/" },
    { label: "Biz haqimizda", path: "/About" },
    { label: "Konsalting", path: "/consulting" },
    { label: "Kurslar", path: "/courses" },
    { label: "Blog", path: "/Blog" },
  ];

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <header className="bg-gradient-to-r from-orange-50 to-white backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/YA-Logo.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl font-bold text-blue-900">Young Adults</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="text-blue-900 font-medium hover:text-orange-500 transition duration-200"
            >
              {item.label}
            </Link>
          ))}

          {user ? (
            <button
              onClick={handleProfileClick}
              className="bg-blue-900 hover:bg-orange-500 text-white font-semibold px-5 py-2 rounded-full transition duration-200"
            >
              {user.first_name ? user.first_name.split(" ")[0] : user.email.split("@")[0]}
            </button>
          ) : (
            <button
              onClick={() => navigate("/register")}
              className="bg-orange-500 hover:bg-blue-900 text-white font-semibold px-5 py-2 rounded-full transition duration-200"
            >
              Ro'yxatdan o'tish
            </button>
          )}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-orange-500 text-2xl"
        >
          <FaBars />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-orange-50 to-white px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-blue-900 font-medium hover:text-orange-500 transition duration-150"
            >
              {item.label}
            </Link>
          ))}

          {user ? (
            <button
              onClick={() => {
                handleProfileClick();
                setIsOpen(false);
              }}
              className="mt-3 w-full bg-blue-900 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-full"
            >
              {user.first_name ? user.first_name.split(" ")[0] : user.email.split("@")[0]}
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/register");
                setIsOpen(false);
              }}
              className="mt-3 w-full bg-orange-500 hover:bg-blue-900 text-white font-semibold px-4 py-2 rounded-full"
            >  
              Ro'yxatdan o'tish
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;