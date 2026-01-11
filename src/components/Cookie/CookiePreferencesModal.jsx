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
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-xl p-16 shadow-2xl animate-slideUpCenter">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            Customize Consent Preferences
          </h2>
          <button onClick={closePreferences}>
            <FiX size={20}/>
          </button>
        </div>

        {/* Categories */}
        <div className="space-y-8 text-md text-gray-700">
          <div>
            <div className="text-xl text-black">
                Essential Cookies
            </div>
            <p>
              These cookies are required for the website to function and cannot
              be switched off. They include things like security, session
              management, and remembering your playlist access.
            </p>
          </div>

          <div>
            <div className="text-xl text-black">
                Analytics Cookies
            </div>
            <p>
              These cookies help us understand how visitors interact with the
              site (e.g. pages visited, time spent), so we can improve
              performance and usability. All data is anonymised.
            </p>
          </div>

          <div>
            <div className="text-xl text-black">
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">

            <button
            onClick={acceptAll}
            className="w-full sm:w-auto px-4 py-2 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white text-md hover:scale-[1.03] transition cursor-pointer flex items-center justify-center gap-2"
          >
            <FiCheckCircle size={20} />
            Accept all cookies
          </button>

          <button
            onClick={rejectAll}
            className="w-full sm:w-auto px-4 py-2 rounded-full border border-blue-600 text-black text-md hover:bg-linear-to-r from-[#155DFC] hover:text-white hover:scale-[1.03] to-[#9810FA] transition cursor-pointer flex items-center justify-center gap-2"
          >
            <FiXCircle size={20} />
            Reject non-essential cookies
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-4 text-center">
          You can change or withdraw your consent at any time via the cookie
          settings link in the footer{" "}
          <a href="/cookie-policy" className="underline text-blue-600 hover:text-purple-600">
            Cookie Settings
          </a>
        </p>
      </div>
    </div>
  );
}
