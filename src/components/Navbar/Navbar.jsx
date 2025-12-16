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

  // 🔥 SCROLL HANDLER (NavLink friendly)
  const scrollToTestimonials = () => {
    const el = document.getElementById("testimonials-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleTestimonialClick = (e) => {
    e.preventDefault();

    if (!isHome) {
      navigate("/");
      setTimeout(scrollToTestimonials, 120);
    } else {
      scrollToTestimonials();
    }

    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${solidNavbar ? "bg-white shadow" : "bg-transparent"}`}
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
          className={`hidden md:flex gap-8 text-sm
            ${solidNavbar ? "text-gray-700" : "text-white"}`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
          <NavLink to="/playlist">Playlist</NavLink>

          {/* ✅ TESTIMONIAL (NavLink style) */}
          <NavLink to="/" onClick={handleTestimonialClick}>
            Testimonial
          </NavLink>
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <button
            className={`px-5 py-2 rounded-full text-sm transition
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

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col gap-4 px-6 py-6 text-gray-700">
            <NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/quiz">Quiz</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/playlist">Playlist</NavLink>

            {/* ✅ MOBILE TESTIMONIAL */}
            <NavLink to="/" onClick={handleTestimonialClick}>
              Testimonial
            </NavLink>

            <button className="mt-4 py-2 rounded-full bg-blue-600 text-white">
              Upgrade for €9
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
