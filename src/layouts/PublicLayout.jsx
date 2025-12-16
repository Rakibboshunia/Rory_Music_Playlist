import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function PublicLayout() {
  return (
    <>
      <Navbar />

      {/* ✅ Footer + CTA same stacking context */}
      <main className="min-h-screen bg-white">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
