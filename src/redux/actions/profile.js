import firebase from '../../firebase/firebase';
import { SET_MY_PROFILE, users } from '../../utils';
import { creatRoomWithAdmin } from './rooms';
import { subscribeToContactList } from './contacts';

// Set the current profile
export const setProfile = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref()
      .child(`${users}/${data.uid}/profile`)
      .once('value', (snap) => {
        if (snap.val()) {
          let setData = {
            name: snap.val().name,
            email: snap.val().email,
            dp: snap.val().dp,
          };
          dispatch({ type: SET_MY_PROFILE, payload: setData });
          dispatch(subscribeToProfile(data.uid));
          dispatch(subscribeToContactList(data.uid));
          resolve(data);
        } else {
          // If profile does not exists the create onr
          dispatch(creatProfile(data))
            .then((res) => {
              dispatch({ type: SET_MY_PROFILE, payload: res });
              dispatch(subscribeToProfile(data.uid));
              dispatch(subscribeToContactList(data.uid));
              resolve(data);
            })
            .catch((err) => reject(err));
        }
      });
  });
};

// Create new profile
const creatProfile = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    let setData = {
      name: data.displayName,
      email: data.email,
      dp: data.photoURL,
    };
    firebase
      .database()
      .ref()
      .child(`${users}/${data.uid}/profile`)
      .update(setData)
      .then(() => {
        // Create default room with admin
        dispatch(creatRoomWithAdmin(data));
        resolve(setData);
      })
      .catch((err) => reject(err));
  });
};

// Profile subscribed so that any time there is a change in profile it is automatically updated here
const subscribeToProfile = (id) => (dispatch) => {
  firebase.database().ref(`${users}/${id}/profile`).update({ status: true });
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
        };
        dispatch({ type: SET_MY_PROFILE, payload: setData });
        // Change Status of user if they disconnects for db / close the window
        firebase
          .database()
          .ref(`${users}/${id}/profile`)
          .onDisconnect()
          .update({ status: false });
      }
    });
};

// Update name property of profile
export const updateName = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref()
      .child(`${users}/${data.id}/profile`)
      .update({ name: data.name })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

// Upload photo to firebase storage
const uploadPhoto = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .storage()
      .ref(`images/${data.id}/${data.image.name}`)
      .put(data.image)
      .on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          reject(error);
        },
        () => {
          firebase
            .storage()
            .ref(`images/${data.id}`)
            .child(data.image.name)
            .getDownloadURL()
            .then((url) => resolve(url))
            .catch((err) => reject(err));
        }
      );
  });
};

// update DP URL
export const updateURL = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(uploadPhoto(data)).then((res) => {
      firebase
        .database()
        .ref()
        .child(`${users}/${data.id}/profile`)
        .update({ dp: res })
        .then(() => resolve())
        .catch((err) => reject(err));
    });
  });
};
