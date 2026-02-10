import { Link, NavLink, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from "../../../assets/images/logo3.png";

export default function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const navLinks = [
    {
      name: "Dashboard",
      path: "/",
      icon: "material-symbols:dashboard-outline",
    },
    {
      name: "Users",
      path: "/users",
      icon: "material-symbols:group-outline",
    },
    {
      name: "Playlists",
      path: "/playlists",
      icon: "material-symbols:queue-music",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "material-symbols:person-outline",
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white text-gray-900 border-r border-gray-200 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-24 items-center justify-between px-5 border-b border-gray-200">
            <Link
              to="/"
              onClick={() => window.innerWidth < 768 && onClose()}
              className="hover:opacity-90 transition"
            >
              <img
                src={Logo}
                alt="Soundtrack my night logo"
                className="h-10 w-auto scale-[2.3]"
              />
            </Link>

            <button
              onClick={onClose}
              className="rounded-md p-1 hover:bg-gray-100 md:hidden cursor-pointer"
            >
              <Icon icon="material-symbols:close" width="30" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 space-y-1 overflow-y-auto px-5 py-6">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => window.innerWidth < 768 && onClose()}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-4 text-xl transition-colors 
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                <Icon
                  icon={item.icon}
                  width="28"
                  height="26"
                  className="text-inherit"
                />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Bottom Logout */}
          <div className="border-t border-gray-200 p-4">
            <button
              onClick={() => navigate("/login")}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-xl text-red-600 hover:bg-gray-200 transition cursor-pointer"
            >
              <Icon icon="material-symbols:logout" width="26" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}