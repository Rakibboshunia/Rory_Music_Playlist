import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solidNavbar = !isHome || scrolled;

  return (
    <nav
      className={`fixed py-2 top-0 w-full z-50 transition-all duration-300
        ${solidNavbar ? "bg-[#F4F7FF] shadow" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="font-bold text-xl">
          <span className={solidNavbar ? "text-gray-900" : "text-white"}>
            Logo
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div
          className={`hidden md:flex gap-10 text-md font-medium
            ${solidNavbar ? "text-gray-700" : "text-white"}`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
          <NavLink to="/playlist">Playlist</NavLink>
          <NavLink to="/">Testimonial</NavLink>
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:block ">
          <button
            className={`px-5 py-2 rounded-full text-medium cursor:pointer hover:text-[#AD46FF] transition
              ${
                solidNavbar
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
              }`}
          >
            Upgrade for €9
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-2xl
            ${solidNavbar ? "text-gray-900" : "text-white"}`}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col gap-4 text-xl font-medium p-8 p-8 text-gray-700">
            <NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/quiz">Quiz</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/playlist">Playlist</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/">Testimonial</NavLink>

            <button className="mt-4 py-2 rounded-full cursor-pointer bg-blue-600 text-white">
              Upgrade for €9
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
