import React, { useEffect, useState, createContext } from 'react';
import firebase from './firebase';
import Loader from '../assets/loader/Loader';

const style = {
  margin: '0',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateY(-50%)',
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);
  if (pending) {
    return (
      <div style={style}>
        <Loader />
      </div>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
