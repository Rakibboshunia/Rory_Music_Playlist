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
    Cookies.set("cookie_consent", "accepted", { expires: 7 });
    setShow(false);
  };

  const handleReject = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-black p-6 md:px-20 z-50 shadow-xl">
      
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <img
          src={cookie}
          alt="cookie banner"
          className="w-14 h-14 flex-shrink-0"
        />

        <p className="text-xl text-black leading-relaxed">
          We use cookies to make Soundtrack My Night work properly, understand how visitors use the site, and improve your experience. Some cookies are essential, while others help us analyse usage and personalise content.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4 mt-5">
        <button
          onClick={handleReject}
          className="w-full md:w-auto px-6 py-3 rounded-full border border-blue-600 text-black text-md hover:bg-linear-to-r from-[#155DFC] hover:text-white hover:scale-[1.03] to-[#9810FA] transition cursor-pointer flex items-center justify-center gap-2"
        >
          <FiXCircle size={20} />
          Reject non-essential cookies
        </button>

        <button
          onClick={handleAccept}
          className="w-full md:w-auto px-6 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white text-md hover:scale-[1.03] transition cursor-pointer flex items-center justify-center gap-2"
        >
          Accept all cookies
          <FiCheckCircle size={20} />
        </button>
      </div>

      <p className="text-sm text-gray-600 mt-4 text-center md:text-right">
        You can change or withdraw your consent at any time via the cookie
        settings link in the footer.{" "}
        <a
          href="/cookie-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600"
        >
          Cookie Settings
        </a>
      </p>
    </div>
  );
}
