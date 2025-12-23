import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function PlaylistLayout() {
  return (
    <>
      <Navbar />
      
      <div className="max-w-5xl mx-auto py-10">
        <Outlet />
      </div>
      
    </>
  );
}