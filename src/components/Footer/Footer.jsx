import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/img/logo2.png";

export default function Footer() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const linkClass = ({ isActive }) =>
    isActive ? "active-link active" : "hover:text-[#153DFC]";

  // ✅ NEW: HERO PAGE SCROLL
  const scrollToHero = () => {
    document
      .getElementById("hero-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ NEW: TESTIMONIAL PAGE SCROLL
  const scrollToTestimonials = () => {
    document
      .getElementById("testimonials-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ NEW: QUIZ PAGE SCROLL
  const scrollToQuizPage = () => {
    document
      .getElementById("quiz-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ NEW: Home → /home + scroll
  const handleHomeClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToHero, 300);
    } else {
      scrollToHero();
    }
  };

  // ✅ NEW: Testimonial → /testimonial + scroll
  const handleTestimonialClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToTestimonials, 300);
    } else {
      scrollToTestimonials();
    }
  };

  // ✅ NEW: QUIZ → /quiz + scroll
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

          {/* LOGO → HOME + HERO */}
          <div
            onClick={handleHomeClick}
            className="cursor-pointer select-none"
          >
            <img src={logo} alt="logo" className="w-15 h-14" />
          </div>

          {/* MENU */}
          <div className="flex gap-6 font-medium text-gray-800">
            <NavLink to="/" onClick={handleHomeClick} className={linkClass}>
              Home
            </NavLink>

            {/* ✅ QUIZ → QUIZ PAGE + SCROLL */}
            <NavLink
              to="/quiz"
              onClick={handleQuizClick}
              className={linkClass}
            >
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
              Testimonial
            </NavLink>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-3">
            {[
              {
                icon: FacebookIcon,
                link: "https://www.facebook.com/@soundtrackmynight",
              },
              {
                icon: InstagramIcon,
                link: "https://www.instagram.com/@soundtrackmynight",
              },
            ].map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-500 
                          text-white bg-linear-to-r from-[#bb5cff] to-[#4b84ff]
                          hover:text-black transition-all duration-300 ease-out
                          hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]"
              >
                <Icon size={23} />
              </a>
            ))}
          </div>

        </div>

        <hr className="my-5" />

        <div className="flex justify-between text-xs text-gray-700">
          <p>© 2025 All rights reserved.</p>

          <NavLink to="/terms" className={linkClass}>
            Privacy and Policy
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
