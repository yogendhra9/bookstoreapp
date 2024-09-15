import React, { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const intialAuthuser = localStorage.getItem("Users");
    if (intialAuthuser) {
      setAuthUser(JSON.parse(intialAuthuser));
    }
  }, []);
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
