import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { FiChevronDown, FiSettings, FiLogOut, FiLogIn } from "react-icons/fi";

import SettingsModal from "../../components/SettingsModal";

import logoHero from "../../assets/img/logo.png";
import logoWhite from "../../assets/img/logo3.png";
import toast from "react-hot-toast";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout, loading } = useAuth();

  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  if (loading) return null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solidNavbar = !isHome || scrolled;

  const handleLogout = () => {
    logout(); // only context logout
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
            onClick={() => navigate("/")}
            className="cursor-pointer select-none w-12 h-13 ml-2 flex items-center justify-center"
          >
            <img
              src={solidNavbar ? logoWhite : logoHero}
              alt="logo"
              className="w-14 h-14 scale-[3] object-contain transition-all duration-300"
            />
          </div>

          {/* NAV LINKS */}
          <div
            className={`hidden md:flex items-center gap-8 font-medium
            ${solidNavbar ? "text-gray-700" : "text-white"}`}
          >
            <NavLink to="/" className={linkClass}>
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

            <NavLink to="/" className="hover:text-[#9810FA]">
              Testimonials
            </NavLink>
          </div>

          {/* PROFILE */}
          <div className="hidden md:flex relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500 shadow-md">
                {user?.profileImage ? (
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}${user.profileImage}`}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-lg">
                    {user?.name?.charAt(0)?.toUpperCase() || "👤"}
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
              <div className="absolute right-0 mt-14 w-40 text-lg bg-white shadow-lg rounded-xl py-4 border border-gray-300 z-50">
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={() => {
                        setShowSettings(true);
                        setProfileOpen(false);
                      }}
                      className="w-full flex items-center gap-2 text-left px-4 py-2 hover:bg-gray-100"
                    >
                      <FiSettings size={18} />
                      Settings
                    </button>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                    >
                      <FiLogOut size={18} />
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="w-full flex items-center gap-2 text-left px-4 py-2 text-green-600 hover:bg-gray-100"
                  >
                    <FiLogIn size={18} />
                    Login
                  </button>
                )}
              </div>
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