import firebase from '../../firebase/firebase';
import { adminId } from '../../utils';

export const creatRoomWithAdmin = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    let user1 = data.uid > adminId ? data.uid : adminId;
    let user2 = data.uid > adminId ? adminId : data.uid;
    let roomId = user1 + user2;
    firebase
      .database()
      .ref()
      .child(`rooms/${roomId}`)
      .update({ user1, user2 })
      .then(() => {
        resolve();
        dispatch(addRoomsToUser({ user1, user2, roomId }));
      })
      .catch((err) => reject(err));
  });
};

export const addRoomsToUser = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref()
      .child(`users/${data.user1}/myRooms`)
      .update({ [data.roomId]: true })
      .then(() => {
        firebase
          .database()
          .ref()
          .child(`users/${data.user2}/myRooms`)
          .update({ [data.roomId]: true })
          .then(() => resolve())
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
};
