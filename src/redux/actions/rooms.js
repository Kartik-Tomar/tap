import firebase from '../../firebase/firebase';
import { adminId, rooms, SET_CURRENT_ROOM } from '../../utils';
import { addContactToUser } from './contacts';

// Create default room with admin after the profile is created
export const creatRoomWithAdmin = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    let user1 = data.uid > adminId ? data.uid : adminId;
    let user2 = data.uid > adminId ? adminId : data.uid;
    let roomId = user1 + user2;
    firebase
      .database()
      .ref()
      .child(`${rooms}/${roomId}`)
      .update({ user1, user2 })
      .then(() => {
        resolve();
        dispatch(addContactToUser({ user1, user2, roomId }));
      })
      .catch((err) => reject(err));
  });
};

// Get Current room messages
export const getMessages = (roomId) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref()
      .child(`${rooms}/${roomId}`)
      .on('value', (snap) => {
        if (snap.val()) {
          dispatch({
            type: SET_CURRENT_ROOM,
            payload: {
              messages: snap.val().messages ? snap.val().messages : null,
            },
          });
          resolve();
        } else {
          reject('No Room Found');
        }
      });
  });
};

// send Message
export const sendMessage = (data, roomId) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref()
      .child(`${rooms}/${roomId}/messages`)
      .push(data)
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};
