import { NavLink } from "react-router-dom";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/img/logo2.png";

export default function Footer() {
  const { isAuthenticated } = useAuth();

  return (
    <footer className="bg-[#F7F9FF]">
      {/* TOP BORDER */}
      <div className="border-t border-gray-300" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-15 h-14"
            />
          </div>

          {/* MENU */}
          <div className="flex gap-6 text-md text-gray-600">
            <NavLink to="/" className="hover:text-[#153DFC]">
              Home
            </NavLink>

            <NavLink to="/quiz" className="hover:text-[#153DFC]">
              Quiz
            </NavLink>

            {/* ✅ Playlist ONLY when logged in */}
            {isAuthenticated && (
              <NavLink
                to="/playlist/demo"
                className="hover:text-[#153DFC]"
              >
                Playlist
              </NavLink>
            )}

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
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition"
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

          <NavLink to="/terms" className="hover:underline">
            Privacy and Policy
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
