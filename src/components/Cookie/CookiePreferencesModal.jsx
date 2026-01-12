import { useCookieConsent } from "../../context/CookieConsentContext";
import { FiCheckCircle, FiX, FiXCircle } from "react-icons/fi";

export default function CookiePreferencesModal() {
  const {
    showPreferences,
    closePreferences,
    acceptAll,
    rejectAll,
  } = useCookieConsent();

  if (!showPreferences) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div
        className="
          relative
          w-full max-w-3xl
          bg-white/85 backdrop-blur-2xl
          rounded-[32px]
          p-16
          shadow-[0_50px_120px_-30px_rgba(0,0,0,0.45)]
          animate-fade-in
        "
      >
        {/* Premium glow frame */}
        <div className="absolute inset-0 rounded-[32px] bg-linear-to-r from-[#155DFC]/25 via-[#9810FA]/20 to-[#155DFC]/25 blur-3xl -z-10 animate-pulse" />

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Customize Consent Preferences
          </h2>

          <button
            onClick={closePreferences}
            className="
              w-10 h-10
              rounded-full
              flex items-center justify-center
              text-gray-600
              hover:bg-black/5
              hover:rotate-90
              transition
              cursor-pointer
            "
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Categories */}
        <div className="space-y-10 text-gray-700 text-base leading-relaxed">
          <div>
            <div className="text-xl font-semibold text-gray-900 mb-2">
              Essential Cookies
            </div>
            <p>
              These cookies are required for the website to function and cannot
              be switched off. They include things like security, session
              management, and remembering your playlist access.
            </p>
          </div>

          <div>
            <div className="text-xl font-semibold text-gray-900 mb-2">
              Analytics Cookies
            </div>
            <p>
              These cookies help us understand how visitors interact with the
              site (e.g. pages visited, time spent), so we can improve
              performance and usability. All data is anonymised.
            </p>
          </div>

          <div>
            <div className="text-xl font-semibold text-gray-900 mb-2">
              Marketing / Functional Cookies
            </div>
            <p>
              These cookies may be used to personalise your experience, remember
              preferences, and help us show relevant content or follow up on
              your quiz results.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={acceptAll}
            className="
              w-full sm:w-auto
              px-6 py-3
              rounded-full
              bg-linear-to-r from-[#155DFC] to-[#9810FA]
              text-white
              text-base
              font-semibold
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-[0_15px_40px_rgba(21,93,252,0.45)]
              active:scale-[0.96]
              cursor-pointer
              flex items-center justify-center gap-2
            "
          >
            <FiCheckCircle size={20} />
            Accept all cookies
          </button>

          <button
            onClick={rejectAll}
            className="
              w-full sm:w-auto
              px-6 py-3
              rounded-full
              border border-blue-600
              text-black
              text-base
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
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-8 text-center">
          You can change or withdraw your consent at any time via the cookie
          settings link in the footer{" "}
          <a
            href="/cookie-policy"
            className="underline text-blue-600 hover:text-purple-600"
          >
            Cookie Settings
          </a>
        </p>
      </div>
    </div>
  );
}
