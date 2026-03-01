import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  FiChevronDown,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";

import SettingsModal from "../../components/SettingsModal";
import logoHero from "../../assets/img/logo.png";
import logoWhite from "../../assets/img/logo3.png";
import toast from "react-hot-toast";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, loading } = useAuth();

  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const dropdownRef = useRef(null);

  if (loading) return null;

  /* SCROLL EFFECT */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* OUTSIDE CLICK CLOSE */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const solidNavbar = !isHome || scrolled;

  const handleLogout = () => {
    localStorage.clear();
    logout();
    toast.success("Logged out");
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `transition duration-200 ${
      isActive
        ? "text-purple-600 font-semibold"
        : "hover:text-purple-600"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          solidNavbar
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer flex items-center"
          >
            <img
              src={solidNavbar ? logoWhite : logoHero}
              alt="logo"
              className="w-14 h-14 scale-[2.7] object-contain"
            />
          </div>

          {/* DESKTOP LINKS */}
          <div
            className={`hidden md:flex items-center gap-10 font-medium
            ${solidNavbar ? "text-gray-800" : "text-white"}`}
          >
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/quiz" className={linkClass}>
              Quiz
            </NavLink>

            <NavLink to="/playlist" className={linkClass}>
              Playlist
            </NavLink>
          </div>

          {/* AUTH SECTION (DESKTOP) */}
          <div className="hidden md:flex relative" ref={dropdownRef}>
            {!user ? (
              // Guest → Login Button
              <button
                onClick={() => navigate("/login")}
                className="px-5 py-2 bg-linear-to-r from-purple-500 to-blue-500 text-white rounded-full hover:shadow-2xl border-2 border-green-300 transition-all shadow-2xl cursor-pointer"
              >
                Login
              </button>
            ) : (
              // Logged In → Profile
              <>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3 px-3 py-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-linear-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold shadow">
                    {user?.profileImage ? (
                      <img
                        src={`${import.meta.env.VITE_BACKEND_URL}${user.profileImage}`}
                        alt="profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      user?.name?.charAt(0)?.toUpperCase()
                    )}
                  </div>

                  <span className="text-sm font-medium">
                    {user?.name?.split(" ")[0]}
                  </span>

                  <FiChevronDown
                    className={`transition-transform ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-15 w-40 bg-white rounded-xl shadow-xl border border-gray-300 py-2 animate-fadeIn">
                    <button
                      onClick={() => {
                        setShowSettings(true);
                        setProfileOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 transition cursor-pointer"
                    >
                      <FiSettings className="inline mr-2" />
                      Settings
                    </button>

                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-red-500 hover:bg-gray-50 transition cursor-pointer"
                    >
                      <FiLogOut className="inline mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE SLIDE MENU */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 z-40
          ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 space-y-6">
            <NavLink to="/" onClick={() => setMobileMenu(false)}>
              Home
            </NavLink>

            <NavLink to="/quiz" onClick={() => setMobileMenu(false)}>
              Quiz
            </NavLink>

            <NavLink to="/playlist" onClick={() => setMobileMenu(false)}>
              Playlist
            </NavLink>

            <hr />

            {!user ? (
              <button
                onClick={() => {
                  navigate("/login");
                  setMobileMenu(false);
                }}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg cursor-pointer"
              >
                Login
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    setShowSettings(true);
                    setMobileMenu(false);
                  }}
                >
                  Settings
                </button>

                <button
                  onClick={handleLogout}
                  className="text-red-500"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />
    </>
  );
}