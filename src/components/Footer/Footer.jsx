import { NavLink, useNavigate } from "react-router-dom";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/img/logo2.png";

export default function Footer() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // same active underline class (already used in Navbar)
  const linkClass = ({ isActive }) =>
    isActive ? "active-link active" : "hover:text-[#153DFC]";

  return (
    <footer className="bg-[#F7F9FF]">
      {/* TOP BORDER */}
      <div className="border-t border-gray-300" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
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

          {/* MENU */}
          <div className="flex gap-6 text-md text-gray-600">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/quiz" className={linkClass}>
              Quiz
            </NavLink>

            {isAuthenticated && (
              <NavLink to="/playlist/demo" className={linkClass}>
                Playlist
              </NavLink>
            )}

            {/* scroll-based, not route-based */}
            <NavLink to="/" className="hover:text-[#153DFC]">
              Testimonial
            </NavLink>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3">
            {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600  bg-linear-to-r from-[#ba5aff] to-[#5389ff] hover:text-white transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="my-6" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-700">
          <p>© 2025 All rights reserved.</p>

          <NavLink to="/terms" className={linkClass}>
            Privacy and Policy
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
