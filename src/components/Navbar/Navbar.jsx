import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { FiChevronDown } from "react-icons/fi";

import SettingsModal from "../../components/SettingsModal";

import logoHero from "../../assets/img/logo.png";
import logoWhite from "../../assets/img/logo3.png";

import Cookies from "js-cookie";
import toast from "react-hot-toast";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout, loading } = useAuth();

  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  /* ================= PROFILE (LocalStorage Sync) ================= */
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("profile");
    return saved
      ? JSON.parse(saved)
      : {
          fullName: "Jay Hargudson",
          email: "rory@gmail.com",
          image: null,
        };
  });

  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);

  if (loading) return null;

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solidNavbar = !isHome || scrolled;

  /* ================= NAVIGATION ================= */

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

  const handleLogout = () => {
    Cookies.remove("token");
    logout();
    toast.success("Logged out");
    navigate("/login");
    setProfileOpen(false);
  };

  const linkClass = ({ isActive }) =>
    isActive ? "active-link active" : "hover:text-[#9810FA]";

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${solidNavbar ? "bg-[#ffffff] shadow-sm" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={handleHomeClick}
            className="cursor-pointer select-none w-12 h-13 ml-2 flex items-center justify-center"
          >
            <img
              src={solidNavbar ? logoWhite : logoHero}
              alt="logo"
              className="w-14 h-14 scale-[3] object-contain transition-all duration-300"
            />
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
              Testimonials
            </NavLink>
          </div>

          {/* PROFILE DROPDOWN */}
          <div className="hidden md:flex relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 shadow-md">
                {profile.image ? (
                  <img
                    src={profile.image}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-lg">
                    👤
                  </div>
                )}
              </div>

              <FiChevronDown
                className={`transition-transform duration-300 ${
                  profileOpen ? "rotate-180" : ""
                }`}
                size={20}
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-16 w-40 bg-white shadow-lg rounded-xl py-3 border z-50">

                {isAuthenticated && (
                  <button
                    onClick={() => {
                      setShowSettings(true);
                      setProfileOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Settings
                  </button>
                )}

                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      navigate("/login");
                      setProfileOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-green-600 hover:bg-gray-100 cursor-pointer"
                  >
                    Login
                  </button>
                )}
              </div>
            )}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden text-xl cursor-pointer ${
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
            </div>
          </div>
        )}
      </nav>

      {/* SETTINGS MODAL */}
      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        profile={profile}
        setProfile={setProfile}
      />
    </>
  );
}