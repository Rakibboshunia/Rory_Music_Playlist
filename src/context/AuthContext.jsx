import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-hot-toast";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  useEffect(() => {
  const initializeAuth = async () => {
    const token = localStorage.getItem("token") || localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("authUser");

    if (!token) {
      setLoading(false);
      return;
    }

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        toast.error("Failed to load user data"); 
      }
    }

    try {
      const res = await axiosInstance.get("/api/v1/auth/me");

      const userData =
        res?.data?.data?.user ||
        res?.data?.data ||
        res?.data?.user ||
        null;

      if (userData) {
        setUser(userData);
        localStorage.setItem("authUser", JSON.stringify(userData));
        toast.success("Session restored");
      }
    } catch (error) {
      const status = error?.response?.status;

      if (status === 401) {
        localStorage.clear();
        setUser(null);

        toast.error("Session expired. Please login again");
      } else {
        console.warn(
          "Auth verification temporary failed. Keeping session."
        );
        
      }
    } finally {
      setLoading(false);
    }
  };

  initializeAuth();
}, []);

const login = (userData, token) => {
  localStorage.setItem("token", token);
  localStorage.setItem("authUser", JSON.stringify(userData));
  setUser(userData);

  toast.success("Logged in successfully");
};

const logout = () => {
  localStorage.clear();
  setUser(null);

  toast("Logged out");
};

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        loading,
        login,
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);