import React, { useState, createContext } from "react";
import firebase from "firebase/app";
import { useEffect } from "react";
import { auth } from '../config/firebase';

export const AuthenticatedUserContext = createContext<firebase.User | null>(null);

export const AuthenticatedUserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  })

  return (
    <AuthenticatedUserContext.Provider value={user}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
