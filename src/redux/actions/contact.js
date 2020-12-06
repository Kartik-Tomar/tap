import firebase from '../../firebase/firebase';

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
