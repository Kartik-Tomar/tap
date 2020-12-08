import firebase from '../../firebase/firebase';
import { users, SET_CONTACT_LIST } from '../../utils';

// Update the profile after a new room is created
export const addContactToUser = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref()
      .child(`${users}/${data.user1}/myContacts`)
      .update({ [data.user2]: { notification: true, roomId: data.roomId } })
      .then(() => {
        firebase
          .database()
          .ref()
          .child(`${users}/${data.user2}/myContacts`)
          .update({ [data.user1]: { notification: true, roomId: data.roomId } })
          .then(() => resolve())
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
};

// Contact list subscribed so that any time there is a change in the list it is automatically updated locally
export const subscribeToContactList = (id) => (dispatch) => {
  firebase
    .database()
    .ref()
    .child(`${users}/${id}/myContacts`)
    .on('value', (snap) => {
      if (snap.val()) {
        dispatch({
          type: SET_CONTACT_LIST,
          payload: { contactList: snap.val() },
        });
      }
    });
};

// Change status to false for notification in contacts
export const seenMessage = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref()
      .child(`${users}/${data.myId}/myContacts/${data.fromId}`)
      .update({ notification: false })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

// Change status to false for notification in contacts
export const notSeenMessage = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref()
      .child(`${users}/${data.fromId}/myContacts/${data.myId}`)
      .update({ notification: true })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

// Search user to add new contact
export const searchUser = (data) => (dispatch) => {
  console.log(data.email);
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref('users')
      .orderByChild('profile/email')
      .startAt(data.email)
      .on('value', (snap) => {
        if (snap.val()) {
          resolve(snap.val());
        } else {
          reject('no user ' + JSON.stringify(snap));
        }
      });
  });
};
