import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FacebookIcon, InstagramIcon } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/img/logo3.png";

export default function Footer() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const linkClass = ({ isActive }) =>
    isActive ? "active-link active" : "hover:text-[#153DFC]";

  /* 🔥 ONE GLOBAL SCROLL FUNCTION */
  const handleScroll = (id) => (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("hero-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document
        .getElementById("hero-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#F7F9FF]">
      <div className="border-t border-gray-300" />

      <div className="max-w-7xl mx-auto px-7 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LOGO */}
          <div
            onClick={handleHomeClick}
            className="cursor-pointer select-none flex items-center justify-center"
          >
            <img
              src={logo}
              alt="logo"
              className="w-12 h-14 scale-300 object-contain transition-all duration-300"
            />
          </div>

          {/* 🔥 LINKS */}
          <div className="flex gap-6 font-medium text-gray-800 cursor-pointer">

            <NavLink to="/" onClick={handleHomeClick} className={linkClass}>
              Home
            </NavLink>

            <NavLink
              to="/"
              onClick={handleScroll("quiz-section")}
              className="hover:text-[#153DFC]"
            >
              How It Works
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
              onClick={handleScroll("pricing-section")}
              className="hover:text-[#153DFC]"
            >
              Plans
            </NavLink>

            <NavLink to="/playlist" className={linkClass}>
                Playlist
              </NavLink>

            <NavLink
              to="/"
              onClick={handleScroll("faq-section")}
              className="hover:text-[#153DFC]"
            >
              FAQ
            </NavLink>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-3">
            {[
              {
                icon: FacebookIcon,
                link: "https://www.facebook.com/soundtrackmynight",
              },
              {
                icon: InstagramIcon,
                link: "https://www.instagram.com/soundtrackmynight",
              },
            ].map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-500 
                text-white bg-linear-to-r from-[#bb5cff] to-[#4b84ff]
                hover:text-black transition-all duration-300 ease-out
                hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        <hr className="my-5" />

        {/* BOTTOM */}
        <div className="flex justify-between text-xs text-gray-700">
          <p>© 2025 All rights reserved.</p>

          <div className="flex gap-4">
            <NavLink to="/terms" className={linkClass}>
              Terms & Conditions
            </NavLink>

            <NavLink to="/privacy-policy" className={linkClass}>
              Privacy Policy
            </NavLink>

            <NavLink to="/cookie-policy" className={linkClass}>
              Cookie Policy
            </NavLink>

            <NavLink to="/refund-policy" className={linkClass}>
              Refund Policy
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}