import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  /* ================= RESTORE USER (RELOAD SAFE) ================= */
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    // 1️⃣ Instant restore from localStorage
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Stored user parse error:", err);
      }
    }

    // 2️⃣ Verify from backend
    const verifyUser = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const userData =
          res?.data?.data?.user ||
          res?.data?.data ||
          res?.data?.user ||
          null;

        if (userData) {
          setUser(userData);
          localStorage.setItem("authUser", JSON.stringify(userData));
        }
      } catch (error) {
        console.warn("Verification failed. Keeping existing session.");
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  /* ================= LOGIN ================= */
  const login = (userData, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("authUser", JSON.stringify(userData));
    setUser(userData);
  };

  /* ================= LOGOUT ================= */
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("authUser");
    setUser(null);
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