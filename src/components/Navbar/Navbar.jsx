import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const { user } = useAuth();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solidNavbar = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all
        ${solidNavbar ? "bg-white shadow" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <span className={`font-bold text-xl ${solidNavbar ? "text-black" : "text-white"}`}>
          Logo
        </span>

        {/* MENU */}
        <div className={`hidden md:flex gap-8 text-sm object-center ${solidNavbar ? "text-gray-700" : "text-white"}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
          <NavLink to="/playlist">Playlist</NavLink>
          <NavLink to="/testimonial">Testimonial</NavLink>
        </div>

        {/* SIGNUP ONLY */}
        {!user && (
          <NavLink
            to="/signup"
            className={`px-5 py-2 rounded-full text-sm
              ${solidNavbar ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
          >
            Sign Up
          </NavLink>
        )}
      </div>
    </nav>
  );
}
