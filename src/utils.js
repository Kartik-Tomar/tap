import firebase from './firebase/firebase';

// Admin ID
export const adminId = 'XB76dypbd9crBO62GNYMXp68htp2';

// Firebase db Collections / Primary Nodes
export const users = 'users';
export const rooms = 'rooms';
export const messages = 'messages';
export const typing = 'typing';

// Actions
export const SET_MY_PROFILE = 'SET_MY_PROFILE';
export const SET_CURRENT_ROOM = 'SET_CURRENT_ROOM';
export const SET_CONTACT_LIST = 'SET_CONTACT_LIST';
export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_TYPING = 'SET_TYPING';

// Functions
export const getProfile = (id, setUserData) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref()
      .child(`${users}/${id}/profile`)
      .on('value', (snap) => {
        if (snap.val()) {
          let setData = {
            name: snap.val().name,
            email: snap.val().email,
            dp: snap.val().dp,
            status: snap.val().status ? snap.val().status : null,
          };
          setUserData(setData);
          resolve(setData);
        } else {
          setUserData(null);
          reject('user data not available');
        }
      });
  });
};
