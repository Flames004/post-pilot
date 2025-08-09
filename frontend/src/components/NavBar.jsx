import React from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api.js";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout", {});
      setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-100 transition-colors">
          ✨ PostPilot
        </Link>
        <div className="flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              <Link 
                to="/dashboard" 
                className="text-white hover:text-blue-100 transition-colors font-medium"
              >
                🎯 Dashboard
              </Link>
              <Link 
                to="/history" 
                className="text-white hover:text-blue-100 transition-colors font-medium"
              >
                📚 History
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md"
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="text-white hover:text-blue-100 transition-colors font-medium"
              >
                🔑 Login
              </Link>
              <Link 
                to="/register" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors shadow-md"
              >
                ✍️ Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
