import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 🔥 important

  const isAuthenticated = !!user;

  // 🔥 APP LOAD → RESTORE USER
  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      setLoading(false);
      return;
    }

    // optional: backend verify token
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/auth/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const userData = res.data?.user || res.data?.data?.user;
        if (userData) {
          setUser(userData);
        }
      })
      .catch(() => {
        // 🔥 fallback: keep user logged in if token exists
        const token = Cookies.get("token");
        if (!token) {
          setUser(null);
        }
      })

      .finally(() => {
        setLoading(false);
      });
  }, []);

  // ✅ LOGIN
  const login = (userData) => {
    setUser(userData);
  };

  // ✅ SIGNUP (not auto login)
  const signup = () => {};

  // ✅ LOGOUT
  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        signup,
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
