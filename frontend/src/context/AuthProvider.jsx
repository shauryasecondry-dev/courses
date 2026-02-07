// src/context/AuthProvider.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { me} from "../axios/api.js";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
async function details() {
  try {
    let res = await me();
    setUser(res.data);
  } catch (err) {
    setUser(null); // user not logged in
  } finally {
    setLoading(false);
  }
}

  useEffect(() => {
    details();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);