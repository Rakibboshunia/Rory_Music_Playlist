import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import CookieBanner from "../components/Cookie/CookieBanner";
import CookieFloatingButton from "../components/Cookie/CookieFloatingButton";
import CookiePreferencesModal from "../components/Cookie/CookiePreferencesModal";

export default function PublicLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <Navbar />

      <main
        className={`min-h-screen bg-white ${
          isHome ? "pt-0" : "pt-28"
        }`}
      >
        <Outlet />
      </main>

      <Footer />

      {/* 🍪 Cookie system */}
      <CookieBanner />
      <CookieFloatingButton />
      <CookiePreferencesModal />
    </>
  );
}
