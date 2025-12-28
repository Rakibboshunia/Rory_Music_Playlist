import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      setLoading(false);
      return;
    }

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

        const userData =
          res.data?.user ||
          res.data?.data?.user ||
          { token };

        setUser(userData);
      } catch (error) {
        console.warn("Auth restore failed, keeping token");
        setUser({ token });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

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
        logout
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
