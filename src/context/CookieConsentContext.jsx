import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const CookieConsentContext = createContext();

export function CookieConsentProvider({ children }) {
  const [showPreferences, setShowPreferences] = useState(false);

  const openPreferences = () => setShowPreferences(true);
  const closePreferences = () => setShowPreferences(false);

  const acceptAll = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 30 });
    closePreferences();
  };

  const rejectAll = () => {
    Cookies.remove("cookie_consent");
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
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export const useCookieConsent = () => useContext(CookieConsentContext);
