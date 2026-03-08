import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const CookieConsentContext = createContext();

export function CookieConsentProvider({ children }) {
  const [showPreferences, setShowPreferences] = useState(false);

  const openPreferences = () => setShowPreferences(true);
  const closePreferences = () => setShowPreferences(false);

  const acceptAll = () => {
    Cookies.set("cookie_consent", "accepted", {
      expires: 30,
      path: "/",
    });

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


  return (
    <CookieConsentContext.Provider
      value={{
        showPreferences,
        openPreferences,
        closePreferences,
        acceptAll,
        rejectAll,

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
