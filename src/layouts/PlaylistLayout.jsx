import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

import CookieFloatingButton from "../components/Cookie/CookieFloatingButton";
import CookiePreferencesModal from "../components/Cookie/CookiePreferencesModal";

export default function PlaylistLayout() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-10">
        <Outlet />
      </div>

      {/* 🍪 Cookie system */}
      <CookieFloatingButton />
      <CookiePreferencesModal />
    </>
  );
}
