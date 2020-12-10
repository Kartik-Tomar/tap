import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bell } from 'react-feather';

import { AuthContext } from '../../firebase/Auth';
import { getProfile } from '../../utils';
import { SET_CURRENT_ROOM } from '../../utils';
import ProfileIcon from '../../assets/img/man.svg';
// import { getProfile } from '../../redux/actions/profile';

const ContactTab = (props) => {
  const { currentUser } = useContext(AuthContext);
  const contactId = useSelector((state) => state.currentRoom.contactId);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (props.userId) {
      getProfile(props.userId, setUserData);
    } else {
      setUserData(null);
    }
  }, [props.userId]);

  const changeRoom = () => {
    if (userData && props.roomData) {
      let from = currentUser.uid > props.userId ? 'user2' : 'user1';
      let data = {
        roomId: props.roomData.roomId,
        contactId: props.userId,
        from,
      };
      dispatch({ type: SET_CURRENT_ROOM, payload: data });
    }
  };

  return (
    <div
      className={
        contactId === props.userId
          ? 'list-group-item-selected list-group-item-action mb-1'
          : 'list-group-item list-group-item-action mb-1'
      }
      onClick={changeRoom}
      style={{
        border: props.roomData.notification ? '2px solid #f25a3c' : 'none',
      }}
    >
      <img
        src={userData ? userData.dp : ProfileIcon}
        alt='profile pic'
        className='profile-pic'
      />
      <b className='profile-name'>
        {userData && userData.status && <span className='dot mr-2'></span>}
        {userData ? userData.name : 'Random User'}
      </b>
      {props.roomData.notification && (
        <button className='notification-bell'>
          <Bell style={{ padding: '3px' }} />
        </button>
      )}
    </div>
  );
};

export default ContactTab;
