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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const solidNavbar = !isHome || scrolled;

  const handleLogout = () => {
    localStorage.clear();
    logout();
    navigate("/login");
  };

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -90;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 200);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -90;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 transition duration-200 text-[15px] tracking-wide ${
      isActive
        ? "text-purple-600 font-semibold"
        : "hover:text-purple-600"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          solidNavbar
            ? "bg-white/60 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* LOGO */}
          <div onClick={() => navigate("/")} className="cursor-pointer flex items-center">
            <img
              src={solidNavbar ? logoWhite : logoHero}
              alt="logo"
              className="w-14 h-14 scale-[2] sm:scale-[2.7] object-contain"
            />
          </div>

          {/* DESKTOP MENU */}
          <div
            className={`hidden md:flex items-center gap-8 font-medium ${
              solidNavbar ? "text-gray-800" : "text-white"
            }`}
          >
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <button
              onClick={() => scrollToSection("quiz-section")}
              className="flex items-center gap-2 hover:text-purple-600 transition"
            >
              How It Works
            </button>

            <NavLink to="/quiz" className={linkClass}>
              Quiz
            </NavLink>

            {user && (
              <NavLink to="/playlist" className={linkClass}>
                Playlist
              </NavLink>
            )}

            <button
              onClick={() => scrollToSection("pricing-section")}
              className="flex items-center gap-2 hover:text-purple-600 transition"
            >
              Plans
            </button>

            <button
              onClick={() => scrollToSection("faq-section")}
              className="flex items-center gap-2 hover:text-purple-600 transition"
            >
              FAQ
            </button>
          </div>

          {/* PROFILE / LOGIN */}
          <div className="hidden md:flex relative" ref={dropdownRef}>
            {!user ? (
              <button
                onClick={() => navigate("/login")}
                className="px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:shadow-2xl transition-all hover:scale-[1.08] hover:opacity-95"
              >
                Login
              </button>
            ) : (
              <>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3 px-3 py-2 rounded-full hover:text-black transition"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
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

                  <span className="font-bold">
                    {user?.name?.split(" ")[0]}
                  </span>

                  <FiChevronDown
                    className={`transition-transform ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 top-full mt-3 w-40 bg-white rounded-xl shadow-xl py-2">
                    <button
                      onClick={() => {
                        setShowSettings(true);
                        setProfileOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:scale-[1.05] transition duration-200"
                    >
                      <FiSettings className="inline mr-2" />
                      Settings
                    </button>

                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-red-500 hover:scale-[1.05] transition duration-200"
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

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute top-16 right-0 w-72 px-6 transition-all ${
            mobileMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-5 flex flex-col gap-3 hover:shadow-2xl transition hover:opacity-95">
            <NavLink to="/" onClick={() => setMobileMenu(false)} className="flex items-center gap-2 hover:text-purple-600 transition duration-200 hover:scale-[1.05] hover:shadow-2xl">
              Home
            </NavLink>

            <button
              onClick={() => {
                scrollToSection("quiz-section");
                setMobileMenu(false);
              }}
              className="flex items-center gap-2 hover:text-purple-600 transition duration-200 hover:scale-[1.05] hover:shadow-2xl"
            >
              How It Works
            </button>

            <NavLink to="/quiz" onClick={() => setMobileMenu(false)} className="flex items-center gap-2 hover:text-purple-600 transition duration-200 hover:scale-[1.05] hover:shadow-2xl">
              Quiz
            </NavLink>

            {user && (
              <NavLink to="/playlist" onClick={() => setMobileMenu(false)} className="flex items-center gap-2 hover:text-purple-600 transition duration-200 hover:scale-[1.05] hover:shadow-2xl">
              Playlist
              </NavLink>
            )}

            <button
              onClick={() => {
                scrollToSection("pricing-section");
                setMobileMenu(false);
              }}
              className="flex items-center gap-2 hover:text-purple-600 transition duration-200 hover:scale-[1.05] hover:shadow-2xl"
            >
              Plans
            </button>

            <button
              onClick={() => {
                scrollToSection("faq-section");
                setMobileMenu(false);
              }}
              className="flex items-center gap-2 hover:text-purple-600 transition duration-200 hover:scale-[1.05] hover:shadow-2xl"
            >
              FAQ
            </button>

            <div className="border my-2"></div>

            {!user ? (
              <button
                onClick={() => {
                  navigate("/login");
                  setMobileMenu(false);
                }}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg hover:opacity-95 transition duration-200 hover:shadow-2xl w-full hover:scale-[1.05]"
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
                  className="text-start"
                >
                  Settings
                </button>

                <button onClick={handleLogout} className="text-start text-red-500 hover:scale-[1.05] transition duration-200">
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