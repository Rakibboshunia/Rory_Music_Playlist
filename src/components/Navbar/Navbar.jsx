import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/img/logo2.png";
import Cookies from "js-cookie";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

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
    navigate("/");
    setTimeout(scrollToTestimonials, 300);
    setMenuOpen(false);
  };

  const handleAuthClick = () => {
    setMenuOpen(false);
    if (isAuthenticated) {
      Cookies.remove("token", { secure: true, sameSite: "strict" });
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  // 🔗 shared active link class (already in your CSS)
  const linkClass = ({ isActive }) =>
    isActive ? "active-link active" : "hover:text-[#9810FA]";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${solidNavbar ? "bg-[#F4F7FF] shadow-sm" : "bg-transparent"}`}
    >
      {/* MAIN BAR */}
      <div className="max-w-7xl mx-auto px-5 py-2 flex items-center justify-between">

        {/* LOGO (CLICK → HOME + POINTER) */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer select-none"
        >
          <img
            src={logo}
            alt="logo"
            className="w-15 h-14"
          />
        </div>

        {/* DESKTOP MENU */}
        <div
          className={`hidden md:flex items-center gap-8 font-medium 
            ${solidNavbar ? "text-gray-700" : "text-white"}`}
        >
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/quiz" className={linkClass}>Quiz</NavLink>

          {isAuthenticated && (
            <NavLink to="/playlist" className={linkClass}>
              Playlist
            </NavLink>
          )}

          <NavLink
            to="/"
            onClick={handleTestimonialClick}
            className="hover:text-[#9810FA]"
          >
            Testimonial
          </NavLink>
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex">
          <button
            onClick={handleAuthClick}
            className={`h-10 px-6 rounded-full font-semibold border-2 transition cursor-pointer
              ${
                isAuthenticated
                  ? "bg-red-500 text-white hover:bg-red-700 border-none"
                  : "border-green-500 text-green-500 hover:bg-green-700 hover:text-white"
              }`}
          >
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-xl ${
            solidNavbar ? "text-gray-900" : "text-white"
          }`}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col gap-3 px-4 py-4 text-sm text-gray-700">
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/quiz" onClick={() => setMenuOpen(false)} className={linkClass}>
              Quiz
            </NavLink>

            {isAuthenticated && (
              <NavLink
                to="/playlist"
                onClick={() => setMenuOpen(false)}
                className={linkClass}
              >
                Playlist
              </NavLink>
            )}

            <NavLink to="/" onClick={handleTestimonialClick}>
              Testimonial
            </NavLink>

            <button
              onClick={handleAuthClick}
              className={`mt-2 h-10 rounded-full font-bold border-2
                ${
                  isAuthenticated
                    ? "bg-red-500 text-white hover:bg-red-700 border-none"
                    : "border-green-500 text-green-500 hover:bg-green-700 hover:text-white"
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
