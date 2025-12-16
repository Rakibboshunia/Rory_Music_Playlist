import { NavLink } from "react-router-dom";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    // ✅ CHANGE HERE: pt-56
    <footer className="bg-[#F7F9FF] pt-10">
      <div className="border-t border-gray-300" />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500" />
            <span className="text-lg font-semibold text-gray-900">Logo</span>
          </div>

          <div className="flex gap-8 text-sm text-gray-600">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/quiz">Quiz</NavLink>
            <NavLink to="/playlist">Playlist</NavLink>
            <NavLink to="/">Testimonial</NavLink>
          </div>

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

        <hr className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-800">
          <p>© 2025 All rights reserved.</p>
          <a href="#">Privacy and Policy</a>
        </div>
      </div>
    </footer>
  );
}