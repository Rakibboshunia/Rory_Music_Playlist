import cookie from "../../assets/img/cookie.png";
import { useCookieConsent } from "../../context/CookieConsentContext";

export default function CookieFloatingButton() {
  const { openPreferences } = useCookieConsent();

  return (
    <button
      onClick={openPreferences}
      className="fixed bottom-5 left-5 z-40 w-14 h-14 rounded-full bg-linear-to-r from-[#9810FA] to-[#155DFC] shadow-xl border border-black/10 flex items-center justify-center hover:scale-105 transition"
      aria-label="Cookie settings"
    >
      <img src={cookie} alt="Cookies" className="w-8 h-8  cursor-pointer" />
    </button>
  );
}
