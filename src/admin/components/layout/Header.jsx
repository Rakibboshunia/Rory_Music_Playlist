import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import Favicon from "../../../assets/img/favicon.png";

export default function Header({ onMenuClick }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-10 flex h-24 w-full items-center justify-between bg-white border-b-0 shadow px-4 md:px-6">
      <button
        onClick={onMenuClick}
        className="rounded-md p-1 hover:bg-gray-100 md:hidden"
      >
        <Icon icon="material-symbols:menu" width="24" />
      </button>

      <div className="flex items-center gap-2 flex-1 justify-center">
        <img src={Favicon} className="h-6 md:h-10" />
        <h1 className="text-[15px] sm:text-xl md:text-2xl font-semibold bg-linear-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
          SOUNDTRACK MY NIGHT
        </h1>
        <img src={Favicon} className="h-6 md:h-10 scale-x-[-1]" />
      </div>

      {/* Profile */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded-lg cursor-pointer transition"
        >
          <div className="h-18 w-18 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            <img
              src={user?.avatar}
              alt="avatar"
              className="h-full w-full object-cover rounded-full"
            />
          </div>

          <div className="hidden lg:flex flex-col text-left">
            <span className="font-semibold">{user?.name}</span>
            <span className="text-sm text-gray-500">{user?.email}</span>
          </div>

          <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
        </button>

        {open && (
          <div className="absolute right-0 mt-1 w-42 bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden z-20">
            <button
              onClick={() => {
                setOpen(false);
                navigate("/profile");
              }}
              className="flex items-center font-medium gap-2 px-4 py-5 w-full hover:bg-gray-100 cursor-pointer"
            >
              <Icon icon="material-symbols:person-outline" className="text-2xl" />
              My Profile
            </button>

            <div className="h-px bg-gray-200" />

            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="flex items-center font-medium gap-2 px-4 py-5 w-full text-red-600 hover:bg-red-50 cursor-pointer"
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