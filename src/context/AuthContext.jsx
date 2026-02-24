import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  /* ================= RESTORE USER (RELOAD SAFE) ================= */
  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      setLoading(false);
      return;
    }

    /* ✅ 1️⃣ Instant restore from localStorage */
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Stored user parse error:", err);
      }
    }

    /* ✅ 2️⃣ Verify from backend (but NEVER force logout on fail) */
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
        // ❌ DO NOT remove cookie
        // ❌ DO NOT logout
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  /* ================= LOGIN ================= */
  const login = (userData, token) => {
    Cookies.set("token", token, {
      expires: 7,
      sameSite: "lax",
      secure: false, // production e true hobe (HTTPS)
    });

    localStorage.setItem("authUser", JSON.stringify(userData));
    setUser(userData);
  };

  /* ================= LOGOUT ================= */
  const logout = () => {
    Cookies.remove("token");
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