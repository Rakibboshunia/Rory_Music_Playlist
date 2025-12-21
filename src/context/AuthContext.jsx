import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [hasAccount, setHasAccount] = useState(false);

  const isAuthenticated = !!user;

  // ✅ SIGNUP (demo)
  const signup = (data) => {
    // data = { name, email, password }
    setHasAccount(true);
    
  };

  // ✅ LOGIN (demo)
  const login = (data) => {
    // data = { email }
    setUser({
      name: "Demo User",
      email: data.email,
    });
 
  };

  // ✅ LOGOUT
  const logout = () => {
    setUser(null);
   
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        hasAccount,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
