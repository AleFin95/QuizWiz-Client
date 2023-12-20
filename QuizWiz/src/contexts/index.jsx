import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  return (
    <AuthContext.Provider
      value={{ token, setToken, remainingSeconds, setRemainingSeconds }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
