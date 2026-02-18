import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function AdminProtected() {
  const { user, loading } = useAuth();

  if (loading) return null;

  const role = user?.userType || user?.role;

  if (!user || role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
