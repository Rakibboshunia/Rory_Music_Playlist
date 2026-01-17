import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import cookie from "../../assets/img/cookie.png";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (consent !== "accepted") {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookie_consent", "accepted", {
      expires: 10,
      path: "/",
    });
    setShow(false);
  };

  const handleReject = () => {
    Cookies.remove("cookie_consent", { path: "/" });
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <div
        className="
          relative
          w-full max-w-6xl
          bg-white/80 backdrop-blur-2xl
          rounded-4xl
          border border-black/10
          shadow-[0_40px_120px_-20px_rgba(0,0,0,0.45)]
          p-6 md:p-10
          animate-fade-in
        "
      >
        {/* PREMIUM GLOW FRAME */}
        <div className="absolute inset-0 rounded-4xl bg-linear-to-r from-[#155DFC]/25 via-[#9810FA]/20 to-[#155DFC]/25 blur-3xl -z-10 animate-pulse" />

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* ICON */}
          <div className="shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#155DFC]/15 to-[#9810FA]/15 flex items-center justify-center shadow-inner">
              <img
                src={cookie}
                alt="cookie banner"
                className="w-10 h-10"
              />
            </div>
          </div>

          {/* TEXT */}
          <p className="text-lg md:text-xl text-black leading-relaxed">
            We use cookies to make Soundtrack My Night work properly, understand how visitors use the site, and improve your experience. Some cookies are essential, while others help us analyse usage and personalise content.
          </p>
        </div>

        {/* ACTIONS */}
        <div className="mt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-end gap-4">
          <button
            onClick={handleReject}
            className="
              w-full md:w-auto
              px-6 py-3
              rounded-full
              border border-blue-600
              text-black
              text-sm md:text-base
              transition-all duration-300
              hover:bg-linear-to-r hover:from-[#155DFC] hover:to-[#9810FA]
              hover:text-white
              hover:scale-[1.02]
              active:scale-[0.96]
              cursor-pointer
              flex items-center justify-center gap-2
            "
          >
            <FiXCircle size={20} />
            Reject non-essential cookies
          </button>

          <button
            onClick={handleAccept}
            className="
              w-full md:w-auto
              px-6 py-3
              rounded-full
              bg-linear-to-r from-[#155DFC] to-[#9810FA]
              text-white
              text-sm md:text-base
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-[0_15px_40px_rgba(21,93,252,0.45)]
              active:scale-[0.96]
              cursor-pointer
              flex items-center justify-center gap-2
            "
          >
            Accept all cookies
            <FiCheckCircle size={20} />
          </button>
        </div>

        {/* FOOTER */}
        <p className="mt-6 text-xs md:text-sm text-gray-600 text-center md:text-right">
          You can change or withdraw your consent at any time via the cookie
          settings link in the footer.{" "}
          <a
            href="/cookie-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-purple-600"
          >
            Cookie Settings
          </a>
        </p>
      </div>
    </div>
  );
}
