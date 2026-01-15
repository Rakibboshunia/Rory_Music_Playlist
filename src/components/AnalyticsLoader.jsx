import { useEffect } from "react";
import { useCookieConsent } from "../context/CookieConsentContext";

export default function AnalyticsLoader() {
  const { preferences } = useCookieConsent();

  useEffect(() => {
    if (!preferences.analytics) return;

    if (window.gtagLoaded) return;
    window.gtagLoaded = true;

    const script = document.createElement("script");
    script.src =
      "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-XXXXXXX");
    };
  }, [preferences.analytics]);

  return null;
}
