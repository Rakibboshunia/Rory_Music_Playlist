import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  /* ================= RESTORE USER ================= */
  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      setLoading(false);
      return;
    }

    /* 🔥 DUMMY MODE CHECK */
    if (token === "dummy-token") {
      const storedUser = localStorage.getItem("dummyUser");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
      return;
    }

    /* ================= REAL API (COMMENTED SAFE) ================= */
    /*
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/auth/users/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const userData = res.data?.data?.user || res.data?.user;
        setUser(userData);
      } catch (error) {
        Cookies.remove("token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
    */

    setLoading(false);
  }, []);

  /* ================= LOGIN ================= */
  const login = (userData, token) => {
    Cookies.set("token", token, {
      expires: 7,
      sameSite: "lax",
      secure: false,
    });

    /* 🔥 Store user for dummy refresh */
    if (token === "dummy-token") {
      localStorage.setItem("dummyUser", JSON.stringify(userData));
    }

    setUser(userData);
  };

  /* ================= LOGOUT ================= */
  const logout = () => {
    Cookies.remove("token");
    localStorage.removeItem("dummyUser");
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
