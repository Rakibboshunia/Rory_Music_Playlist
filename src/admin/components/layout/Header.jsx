import { useState, useRef, useEffect, useMemo } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import Favicon from "../../../assets/img/favicon.png";

export default function Header({ onMenuClick }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  /* ================= Outside Click Close ================= */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ================= Profile Image URL ================= */
  const profileImageUrl = useMemo(() => {
    if (!user?.profileImage) return null;

    return `${import.meta.env.VITE_BACKEND_URL}${user.profileImage}?t=${Date.now()}`;
  }, [user?.profileImage]);

  /* ================= Logout Handler ================= */
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-10 flex h-24 w-full items-center justify-between bg-white shadow px-4 md:px-6">

      {/* Mobile Menu */}
      <button
        onClick={onMenuClick}
        className="rounded-md p-1 hover:bg-gray-100 md:hidden"
      >
        <Icon icon="material-symbols:menu" width="24" />
      </button>

      {/* Center Logo */}
      <div className="flex items-center gap-2 flex-1 justify-center">
        <img src={Favicon} alt="logo" className="h-6 md:h-10" />

        <h1 className="text-[15px] sm:text-xl md:text-3xl font-semibold bg-linear-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
          SOUNDTRACK MY NIGHT
        </h1>

        <img src={Favicon} alt="logo" className="h-6 md:h-10 scale-x-[-1]" />
      </div>

      {/* Profile Section */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded-lg cursor-pointer transition"
        >
          <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            {profileImageUrl ? (
              <img
                src={profileImageUrl}
                alt="avatar"
                className="h-full w-full object-cover rounded-full"
              />
            ) : (
              <span className="text-gray-500 text-sm font-semibold">
                {user?.name?.charAt(0)?.toUpperCase() || "A"}
              </span>
            )}
          </div>

          <div className="hidden lg:flex flex-col text-left">
            <span className="font-semibold">{user?.name}</span>
            <span className="text-sm text-gray-500">{user?.email}</span>
          </div>

          <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
        </button>

        {open && (
          <div className="absolute right-0 mt-1 w-44 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-20">

            <button
              onClick={() => {
                setOpen(false);
                navigate("/admin/profile");
              }}
              className="flex items-center font-medium gap-3 px-4 py-4 w-full hover:bg-gray-100 cursor-pointer"
            >
              <Icon icon="material-symbols:person-outline" className="text-2xl" />
              My Profile
            </button>

            <div className="h-px bg-gray-200" />

            <button
              onClick={handleLogout}
              className="flex items-center font-medium gap-3 px-4 py-4 w-full text-red-600 hover:bg-red-50 cursor-pointer"
            >
              <Icon icon="material-symbols:logout" className="text-2xl" />
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}