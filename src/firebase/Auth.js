import React, { useEffect, useState, createContext } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import firebase from './firebase';
import Loader from '../assets/loader/Loader';
import { setProfile } from '../redux/actions/profile';

const style = {
  margin: '0',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateY(-50%)',
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setProfile(user))
          .then((res) => {
            setCurrentUser(res);
            setPending(false);
          })
          .catch((err) => {
            toast.error(err + '', {
              autoClose: false,
            });
            setCurrentUser(user);
            setPending(false);
          });
      } else {
        setCurrentUser(user);
        setPending(false);
      }
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
        pending,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
