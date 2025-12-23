import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/img/logo2.png";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

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

  /* ======================
     SCROLL HELPERS
  ====================== */
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
      Cookies.remove("token", { secure: true, sameSite: "strict" });
      logout();
      toast.success("Logged Out");
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
        {/* LOGO → HOME + HERO SCROLL */}
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

          <NavLink
            to="/"
            onClick={handleTestimonialClick}
            className="hover:text-[#9810FA]"
          >
            Testimonial
          </NavLink>
        </div>

        {/* AUTH */}
        <div className="hidden md:flex">
          <button
            onClick={handleAuthClick}
            className={`h-10 px-6 rounded-full font-semibold border-2 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]
              ${
                isAuthenticated
                  ? "bg-red-500 text-white hover:bg-red-700 border-none"
                  : "border-green-500 text-green-500 hover:bg-green-600 hover:text-white"
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
            <NavLink to="/" onClick={handleHomeClick} className={linkClass}>
              Home
            </NavLink>

            <NavLink
              to="/quiz"
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
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
              className={`mt-2 h-10 rounded-full font-bold border-2 cursor-pointer transition-all
                ${
                  isAuthenticated
                    ? "bg-red-500 text-white hover:bg-red-700 border-none"
                    : "border-green-500 text-green-500 hover:bg-green-600 hover:text-white"
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
