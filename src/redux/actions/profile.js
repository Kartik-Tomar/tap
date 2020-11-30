import firebase from '../../firebase/firebase';

export const setProfile = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref()
      .child(`users/${data.uid}`)
      .once('value', (snap) => {
        if (snap.val()) {
          let setData = {
            name: snap.val().profile.name,
            email: snap.val().profile.email,
            dp: snap.val().profile.dp,
          };
          dispatch({ type: 'SET_MY_PROFILE', payload: setData });
          dispatch(subscribeToProfile(data.uid));
          resolve(data);
        } else {
          dispatch(creatProfile(data))
            .then((res) => {
              dispatch({ type: 'SET_MY_PROFILE', payload: res });
              dispatch(subscribeToProfile(data.uid));
              resolve(data);
            })
            .catch((err) => reject(err));
        }
      });
  });
};

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
      .child(`users/${data.uid}/profile`)
      .update(setData)
      .then(() => resolve(setData))
      .catch((err) => reject(err));
  });
};

const subscribeToProfile = (id) => (dispatch) => {
  firebase
    .database()
    .ref()
    .child(`users/${id}/profile`)
    .on('value', (snap) => {
      if (snap.val()) {
        let setData = {
          name: snap.val().name,
          email: snap.val().email,
          dp: snap.val().dp,
        };
        dispatch({ type: 'SET_MY_PROFILE', payload: setData });
      }
    });
};

export const updateName = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref()
      .child(`users/${data.id}/profile`)
      .update({ name: data.name })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

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

export const updateURL = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(uploadPhoto(data)).then((res) => {
      firebase
        .database()
        .ref()
        .child(`users/${data.id}/profile`)
        .update({ dp: res })
        .then(() => resolve())
        .catch((err) => reject(err));
    });
  });
};
