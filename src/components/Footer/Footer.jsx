import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F7F9FF]">
      {/* TOP DIVIDER */}
      <div className="border-t border-gray-300" />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* MAIN ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500" />
            <span className="text-lg font-semibold text-gray-900">
              Logo
            </span>
          </div>

          {/* MENU */}
          <div className="flex gap-8 text-sm text-gray-600">
            <NavLink to="/" className="hover:text-gray-900">
              Home
            </NavLink>
            <NavLink to="/quiz" className="hover:text-gray-900">
              Quiz
            </NavLink>
            <NavLink to="/playlist" className="hover:text-gray-900">
              Playlist
            </NavLink>
            <NavLink to="/" className="hover:text-gray-900">
              Testimonial
            </NavLink>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 ">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
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
        
        <br />
        <hr />
        {/* BOTTOM ROW */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-800">
          <p>© 2025 All rights reserved.</p>

          <a href="#" className="hover:text-gray-800">
            Privacy and Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
