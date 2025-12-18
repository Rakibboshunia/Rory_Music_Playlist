import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solidNavbar = !isHome || scrolled;

  const scrollToTestimonials = () => {
    const el = document.getElementById("testimonials-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleTestimonialClick = (e) => {
    e.preventDefault();

    if (!isHome) {
      navigate("/");
      setTimeout(scrollToTestimonials, 300);
    } else {
      scrollToTestimonials();
    }

    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${solidNavbar ? "bg-[#F4F7FF] shadow-sm" : "bg-transparent"}`}
    >
      {/* MAIN BAR */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="font-semibold text-base">
          <span className={solidNavbar ? "text-gray-900" : "text-white"}>
            Logo
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div
          className={`hidden md:flex items-center gap-6 text-sm font-medium
            ${solidNavbar ? "text-gray-700" : "text-white"}`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
          <NavLink to="/playlist">Playlist</NavLink>
          <NavLink to="/" onClick={handleTestimonialClick}>
            Testimonial
          </NavLink>
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <button
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition
              ${
                solidNavbar
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-blue-600 hover:bg-gray-100"
              }`}
          >
            Upgrade €9
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-xl
            ${solidNavbar ? "text-gray-900" : "text-white"}`}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col gap-3 px-4 py-4 text-sm text-gray-700">
            <NavLink onClick={() => setMenuOpen(false)} to="/">
              Home
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/quiz">
              Quiz
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/playlist">
              Playlist
            </NavLink>
            <NavLink to="/" onClick={handleTestimonialClick}>
              Testimonial
            </NavLink>

            <button className="mt-2 py-2 rounded-full bg-blue-600 text-white text-sm">
              Upgrade €9
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
