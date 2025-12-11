import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-b from-blue-200 to-blue-500 rounded-lg"></div>
          <span className="text-white text-xl font-semibold">Logo</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 text-white text-sm">
          <NavLink to="/" className="pb-1 border-b-2 border-transparent hover:border-white transition">
            Home
          </NavLink>
          <NavLink to="/quiz" className="pb-1 border-b-2 border-transparent hover:border-white transition">
            Quiz
          </NavLink>
          <NavLink to="/playlist" className="pb-1 border-b-2 border-transparent hover:border-white transition">
            Playlist
          </NavLink>
          <NavLink to="/testimonial" className="pb-1 border-b-2 border-transparent hover:border-white transition">
            Testimonial
          </NavLink>
        </div>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 bg-white text-blue-600 font-semibold rounded-full shadow-sm hover:shadow-md transition " onClick={"/"}>
          Upgrade for €9
        </button>
      </div>
    </nav>
  );
}
