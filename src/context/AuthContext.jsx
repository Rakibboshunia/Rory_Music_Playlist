import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("authUser");

      // No token → stop loading
      if (!token) {
        setLoading(false);
        return;
      }

      // Instantly restore user from localStorage (prevents reload logout)
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (err) {
          console.warn("Stored user parse failed");
        }
      }

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
        const status = error?.response?.status;

        // Only logout if token truly invalid
        if (status === 401) {
          console.warn("Token expired. Logging out.");
          localStorage.clear();
          setUser(null);
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

  /* LOGIN */
  const login = (userData, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("authUser", JSON.stringify(userData));
    setUser(userData);
  };

  /* LOGOUT */
  const logout = () => {
    localStorage.clear();
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