import firebase from '../../firebase/firebase';
import { rooms, messages, typing, SET_MESSAGES, SET_TYPING } from '../../utils';
import moment from 'moment';
import { addContactToUser, notSeenMessage } from './contacts';

// Create default room with admin after the profile is created
export const creatRoom = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    let user1 = data.myId > data.id ? data.myId : data.id;
    let user2 = data.myId > data.id ? data.id : data.myId;
    let roomId = user1 + user2;
    let messages = [
      {
        from: data.from === user1 ? 'user1' : 'user2',
        sendAt: moment().unix(),
        text: data.text,
      },
    ];
    firebase
      .database()
      .ref()
      .child(`${rooms}/${roomId}`)
      .update({ user1, user2, messages })
      .then(() => {
        resolve();
        dispatch(addContactToUser({ user1, user2, roomId }));
      })
      .catch((err) => reject(err));
  });
};

// Get Current room messages add typing
export const getMessages = (roomId) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref()
      .child(`${rooms}/${roomId}/${messages}`)
      .on('value', (snap) => {
        if (snap.val()) {
          dispatch({
            type: SET_MESSAGES,
            payload: {
              messages: snap.val() ? snap.val() : null,
              roomId,
            },
          });
          resolve();
        } else {
          reject('No Room Found');
        }
      });
  });
};

// Get Current room  typing
export const getTyping = (roomId) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref()
      .child(`${rooms}/${roomId}/${typing}`)
      .on('value', (snap) => {
        if (snap.val()) {
          dispatch({
            type: SET_TYPING,
            payload: {
              typing: snap.val() ? snap.val() : null,
              roomId,
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
export const sendMessage = (data, roomId, data2) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref()
      .child(`${rooms}/${roomId}/${messages}`)
      .push(data)
      .then(() => {
        if (data2) {
          dispatch(notSeenMessage(data2));
        }
        resolve();
      })
      .catch((err) => reject(err));
  });
};

// Change Typing status
export const changeTypingStatus = (status, user, roomId) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref()
      .child(`${rooms}/${roomId}/${typing}/`)
      .update({ [user]: status })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};
