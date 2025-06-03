// context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getName, saveName, deleteName } from '../utils/storage';

export const AuthContext = createContext();

/*
  AuthProvider wraps your entire app and manages:
    • userName  — null or the signed-in name
    • isLoading — whether we’re still checking SecureStore
    • signIn(name)  — saves name to storage + sets userName
    • signOut()     — deletes name from storage + sets userName to null
*/
export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // On mount, check if a name is already saved
    async function checkStoredName() {
      const stored = await getName();
      if (stored) {
        setUserName(stored);
      }
      setIsLoading(false);
    }
    checkStoredName();
  }, []);

  const signIn = async (name) => {
    await saveName(name);
    setUserName(name);
  };

  const signOut = async () => {
    await deleteName();
    setUserName(null);
  };

  return (
    <AuthContext.Provider value={{ userName, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
