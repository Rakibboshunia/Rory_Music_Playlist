import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, hasAccount, logout } = useAuth();

  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solidNavbar = !isHome || scrolled;

  const scrollToTestimonials = () => {
    const el = document.getElementById("testimonials-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleTestimonialClick = (e) => {
    e.preventDefault();

    if (!isHome) {
      navigate("/");
      setTimeout(scrollToTestimonials, 300);
    } else {
      scrollToTestimonials();
    }

    setMenuOpen(false);
  };

  // 🔐 LOGIN / LOGOUT BUTTON LOGIC (UNCHANGED)
  const handleAuthClick = () => {
    setMenuOpen(false);

    if (isAuthenticated) {
      logout();
      navigate("/");
    } else {
      if (!hasAccount) {
        navigate("/signup");
      } else {
        navigate("/login");
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${solidNavbar ? "bg-[#F4F7FF] shadow-sm" : "bg-transparent"}`}
    >
      {/* MAIN BAR */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">

        {/* LOGO */}
        <div className="font-semibold text-2xl">
          <span className={solidNavbar ? "text-gray-900" : "text-white"}>
            Music
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div
          className={`hidden md:flex items-center gap-8 text-medium font-medium 
            ${solidNavbar ? "text-gray-700" : "text-white"}`}
        >
          <NavLink to="/" className="hover:text-[#ad3bff]">Home</NavLink>
          <NavLink to="/quiz" className="hover:text-[#ad3bff]">Quiz</NavLink>
          <NavLink to="/playlist/:id" className="hover:text-[#ad3bff]">Playlist</NavLink>
          <NavLink to="/" className="hover:text-[#ad3bff]" onClick={handleTestimonialClick}>
            Testimonial
          </NavLink>
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Upgrade */}
          <button
            className={`h-10 px-6 rounded-full cursor-pointer hover:bg-white/85 text-sm font-semibold transition
              ${
                solidNavbar
                  ? "bg-linear-to-r from-[#9810FA] to-[#155DFC] text-white hover:shadow-lg"
                  : "bg-white text-blue-600 hover:bg-gray-100"
              }`}
          >
            Upgrade €9
          </button>

          {/* 🔐 Login / Logout (GREEN / RED BORDER ADDED) */}
          <button
            onClick={handleAuthClick}
            className={`h-10 px-6 rounded-full text-sm font-semibold transition cursor-pointer border-2
              ${
                isAuthenticated
                  ? "border-none text-white bg-red-500 hover:bg-red-600"
                  : "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
              }`}
          >
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-xl
            ${solidNavbar ? "text-gray-900" : "text-white"}`}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col gap-3 px-4 py-4 text-sm text-gray-700">
            <NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/quiz">Quiz</NavLink>
            {/* <NavLink onClick={() => setMenuOpen(false)} to="/playlist">Playlist</NavLink> */}
            <NavLink to="/" onClick={handleTestimonialClick}>Testimonial</NavLink>

            {/* Upgrade */}
            <button className="h-10 px-6 rounded-full bg-blue-500 text-white text-[16px] font-semibold">
              Upgrade €9
            </button>

            {/* 🔐 Login / Logout (GREEN / RED BORDER ADDED) */}
            <button
              onClick={handleAuthClick}
              className={`h-10 px-6 rounded-full border-2 text-[16px] font-bold transition
                ${
                  isAuthenticated
                    ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                    : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                }`}
            >
              {isAuthenticated ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
