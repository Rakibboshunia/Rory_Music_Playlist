import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const CookieConsentContext = createContext();

export function CookieConsentProvider({ children }) {
  const [showPreferences, setShowPreferences] = useState(false);

  // ================= EXISTING (UNCHANGED) =================
  const openPreferences = () => setShowPreferences(true);
  const closePreferences = () => setShowPreferences(false);

  const acceptAll = () => {
    Cookies.set("cookie_consent", "accepted", {
      expires: 30,
      path: "/",
    });

    // 🔹 also save preferences (new but non-breaking)
    Cookies.set(
      "cookie_preferences",
      JSON.stringify({
        essential: true,
        analytics: true,
        marketing: true,
      }),
      { expires: 30, path: "/" }
    );

    closePreferences();
  };

  const rejectAll = () => {
    Cookies.remove("cookie_consent", { path: "/" });

    // 🔹 keep essential only
    Cookies.set(
      "cookie_preferences",
      JSON.stringify({
        essential: true,
        analytics: false,
        marketing: false,
      }),
      { expires: 30, path: "/" }
    );

    closePreferences();
  };

  // ================= 🆕 MISSING PART =================

  const defaultPreferences = {
    essential: true,
    analytics: false,
    marketing: false,
  };

  const [preferences, setPreferences] = useState(() => {
    const saved = Cookies.get("cookie_preferences");
    return saved ? JSON.parse(saved) : defaultPreferences;
  });

  const savePreferences = (prefs) => {
    Cookies.set("cookie_consent", "custom", {
      expires: 30,
      path: "/",
    });

    Cookies.set("cookie_preferences", JSON.stringify(prefs), {
      expires: 30,
      path: "/",
    });

    setPreferences(prefs);
    closePreferences();
  };

  // =======================================================

  return (
    <CookieConsentContext.Provider
      value={{
        // existing
        showPreferences,
        openPreferences,
        closePreferences,
        acceptAll,
        rejectAll,

        // 🆕 added (does not affect old code)
        preferences,
        setPreferences,
        savePreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export const useCookieConsent = () => useContext(CookieConsentContext);
