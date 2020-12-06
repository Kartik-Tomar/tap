import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProfileIcon from '../../assets/img/man.svg';
import { getProfile } from '../../redux/actions/profile';

const ContactTab = (props) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (props.userId) {
      dispatch(getProfile(props.userId))
        .then((res) => setUserData(res))
        .catch(() => setUserData(null));
    } else {
      setUserData(null);
    }
  }, [props.userId]);
  return (
    <div className='list-group-item list-group-item-action'>
      <img
        src={userData ? userData.dp : ProfileIcon}
        alt='profile pic'
        className='profile-pic'
      />
      <b className='profile-name'>{userData ? userData.name : 'Random User'}</b>
    </div>
  );
};

export default ContactTab;
