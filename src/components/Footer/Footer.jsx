import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FacebookIcon, InstagramIcon } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/img/logo2.png";

export default function Footer() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const linkClass = ({ isActive }) =>
    isActive ? "active-link active" : "hover:text-[#153DFC]";

  // ✅ HERO SCROLL
  const scrollToHero = () => {
    document
      .getElementById("hero-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ TESTIMONIAL SCROLL
  const scrollToTestimonials = () => {
    document
      .getElementById("testimonials-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ QUIZ SCROLL
  const scrollToQuizPage = () => {
    document
      .getElementById("quiz-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ HOME
  const handleHomeClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToHero, 300);
    } else {
      scrollToHero();
    }
  };

  // ✅ TESTIMONIAL
  const handleTestimonialClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToTestimonials, 300);
    } else {
      scrollToTestimonials();
    }
  };

  // ✅ QUIZ
  const handleQuizClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/quiz") {
      navigate("/quiz");
      setTimeout(scrollToQuizPage, 300);
    } else {
      scrollToQuizPage();
    }
  };

  return (
    <footer className="bg-[#F7F9FF]">
      <div className="border-t border-gray-300" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LOGO */}
          <div
            onClick={handleHomeClick}
            className="cursor-pointer select-none"
          >
            <img src={logo} alt="logo" className="w-13 h-12" />
          </div>

          {/* MENU */}
          <div className="flex gap-6 font-medium text-gray-800">
            <NavLink to="/" onClick={handleHomeClick} className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/quiz" onClick={handleQuizClick} className={linkClass}>
              Quiz
            </NavLink>

            {isAuthenticated && (
              <NavLink to="/playlist" className={linkClass}>
                Playlist
              </NavLink>
            )}

            <NavLink
              to="/"
              onClick={handleTestimonialClick}
              className="hover:text-[#153DFC]"
            >
              Testimonials
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

        {/* ✅ POLICY LINKS */}
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
