import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function AdminProtected() {
  const { user, loading } = useAuth();

  /* 🔄 Wait until auth restore finishes */
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500 text-lg font-medium">
          Loading dashboard...
        </div>
      </div>
    );
  }

  const role = user?.role || user?.userType;

  /* 🚫 Not logged in */
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  /* 🚫 Not admin */
  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  /* ✅ Admin allowed */
  return <Outlet />;
}