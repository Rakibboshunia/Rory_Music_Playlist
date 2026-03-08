import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function AdminProtected() {
  const { user, loading } = useAuth();

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

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}