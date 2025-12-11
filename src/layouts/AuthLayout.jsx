import React from "react";
import { Outlet } from "react-router-dom";
import AuthImage from "../components/AuthImage";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Left: form area (scrollable on small screens) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-20 py-16 bg-white">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>

      {/* Right: image (hidden on small screens) */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <AuthImage />
      </div>
    </div>
  );
}
