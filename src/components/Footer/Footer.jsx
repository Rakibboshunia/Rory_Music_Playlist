import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP PART */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-b from-blue-200 to-blue-500 rounded-lg"></div>
            <span className="text-xl font-semibold text-gray-800">Logo</span>
          </div>

          {/* Navigation */}
          <div className="flex gap-10 text-gray-700 text-sm">
            <Link to="/">Home</Link>
            <Link to="/quiz">Quiz</Link>
            <Link to="/playlist">Playlist</Link>
            <Link to="/testimonial">Testimonial</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-600 text-lg">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* BOTTOM PART */}
        <div className="mt-12 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© 2025 All rights reserved.</p>
          <p className="mt-3 md:mt-0">Privacy and Policy</p>
        </div>

      </div>
    </footer>
  );
}
