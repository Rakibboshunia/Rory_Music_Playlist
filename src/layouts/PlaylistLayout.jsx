import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

import CookieFloatingButton from "../components/Cookie/CookieFloatingButton";
import CookiePreferencesModal from "../components/Cookie/CookiePreferencesModal";

export default function PlaylistLayout() {
  return (
    <div>
      <Navbar />

      <div className="w-full">
        <Outlet />
      </div>

      {/* 🍪 Cookie system */}
      <CookieFloatingButton />
      <CookiePreferencesModal />
    </div>
  );
}
