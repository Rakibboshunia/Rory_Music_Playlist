import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/img/logo2.png";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout, loading } = useAuth();

  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 WAIT UNTIL AUTH READY
  if (loading) return null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solidNavbar = !isHome || scrolled;

  const scrollToHero = () => {
    document
      .getElementById("hero-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTestimonials = () => {
    document
      .getElementById("testimonials-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHomeClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToHero, 300);
    } else {
      scrollToHero();
    }

    setMenuOpen(false);
  };

  const handleTestimonialClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToTestimonials, 300);
    } else {
      scrollToTestimonials();
    }

    setMenuOpen(false);
  };

  const handleAuthClick = () => {
    setMenuOpen(false);

    if (isAuthenticated) {
      Cookies.remove("token");
      logout();
      toast.success("Logged out");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const linkClass = ({ isActive }) =>
    isActive ? "active-link active" : "hover:text-[#9810FA]";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${solidNavbar ? "bg-[#F4F7FF] shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div onClick={handleHomeClick} className="cursor-pointer select-none">
          <img src={logo} alt="logo" className="w-15 h-14" />
        </div>

        {/* DESKTOP MENU */}
        <div
          className={`hidden md:flex items-center gap-8 font-medium
          ${solidNavbar ? "text-gray-700" : "text-white"}`}
        >
          <NavLink to="/" onClick={handleHomeClick} className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/quiz" className={linkClass}>
            Quiz
          </NavLink>

          {isAuthenticated && (
            <NavLink to="/playlist" className={linkClass}>
              Playlist
            </NavLink>
          )}

          <NavLink to="/" onClick={handleTestimonialClick}>
            Testimonial
          </NavLink>
        </div>

        {/* AUTH BUTTON */}
        <div className="hidden md:flex">
          <button
            onClick={handleAuthClick}
            className={`h-10 px-6 rounded-full font-semibold transition-all
              ${
                isAuthenticated
                  ? "bg-red-500 text-white hover:bg-red-700"
                  : "border-2 border-green-500 text-green-500 hover:bg-green-600 hover:text-white"
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
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col gap-3 px-4 py-4 text-gray-700">
            <NavLink to="/" onClick={handleHomeClick}>
              Home
            </NavLink>

            <NavLink to="/quiz" onClick={() => setMenuOpen(false)}>
              Quiz
            </NavLink>

            {isAuthenticated && (
              <NavLink to="/playlist" onClick={() => setMenuOpen(false)}>
                Playlist
              </NavLink>
            )}

            <NavLink to="/" onClick={handleTestimonialClick}>
              Testimonial
            </NavLink>

            <button
              onClick={handleAuthClick}
              className={`mt-2 h-10 rounded-full font-bold
                ${
                  isAuthenticated
                    ? "bg-red-500 text-white"
                    : "border-2 border-green-500 text-green-500 hover:bg-green-600 hover:text-white"
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
