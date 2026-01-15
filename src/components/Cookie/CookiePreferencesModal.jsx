import { useCookieConsent } from "../../context/CookieConsentContext";
import { FiCheckCircle, FiX, FiXCircle } from "react-icons/fi";

export default function CookiePreferencesModal() {
  const {
    showPreferences,
    closePreferences,
    acceptAll,
    rejectAll,

    // 🆕 missing
    preferences,
    setPreferences,
    savePreferences,
  } = useCookieConsent();

  if (!showPreferences) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative w-full max-w-3xl bg-white/85 backdrop-blur-2xl rounded-[32px] p-16 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.45)] animate-fade-in">
        <div className="absolute inset-0 rounded-[32px] bg-linear-to-r from-[#155DFC]/25 via-[#9810FA]/20 to-[#155DFC]/25 blur-3xl -z-10 animate-pulse" />
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Customize Consent Preferences
          </h2>
          <button
            onClick={closePreferences}
            className="w-10 h-10 rounded-full hover:bg-black/5 transition"
          >
            <FiX size={20} />
          </button>
        </div>
        {/* Preferences */}
        <div className="space-y-8 text-gray-700">
          {/* Essential (locked) */}
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Essential Cookies</h3>
              <span className="text-sm text-gray-500">Always active</span>
            </div>
            <p className="mt-2">
              These cookies are required for the website to function and cannot
              be switched off. They include things like security, session
              management, and remembering your playlist access.
            </p>
          </div>

          {/* Analytics */}
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Analytics Cookies</h3>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    analytics: e.target.checked,
                  })
                }
              />
            </div>
            <p className="mt-2">
              These cookies help us understand how visitors interact with the
              site (e.g. pages visited, time spent), so we can improve
              performance and usability. All data is anonymised.
            </p>
          </div>

          {/* Marketing */}
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">
                Marketing / Functional Cookies
              </h3>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    marketing: e.target.checked,
                  })
                }
              />
            </div>
            <p className="mt-2">
              These cookies may be used to personalise your experience, remember
              preferences, and help us show relevant content or follow up on
              your quiz results.
            </p>
          </div>
        </div>
        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button
            onClick={() => savePreferences(preferences)}
            className="px-4 py-3 rounded-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white font-semibold flex items-center gap-2 cursor-pointer hover:shadow-2xl hover:scale-[1.02]"
          >
            <FiCheckCircle size={20} />
            Save Preferences
          </button>

          <button
            onClick={acceptAll}
            className="px-4 py-3 rounded-full border border-blue-600 cursor-pointer transition-all hover:bg-linear-to-r from-[#155DFC] to-[#9810FA] hover:shadow-2xl hover:scale-[1.02]"
          >
            Accept all cookies
          </button>

          <button
            onClick={rejectAll}
            className="px-4 py-3 rounded-full border border-blue-600 cursor-pointer transition-all hover:bg-linear-to-r from-[#155DFC] to-[#9810FA] hover:shadow-2xl hover:scale-[1.02]"
          >
            Reject non-essential cookies
          </button>
        </div>
        {/* Footer */}
        <p className="text-xs text-gray-500 mt-8 text-center">
          You can change or withdraw your consent at any time via the cookie
          settings link in the footer
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
