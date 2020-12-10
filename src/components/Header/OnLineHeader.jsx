import React, { useState, useEffect, useContext } from 'react';
import { Menu, X } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

import { AuthContext } from '../../firebase/Auth';
import { getProfile } from '../../utils';
import firebase from '../../firebase/firebase';
import ProfileModal from '../ProfileModal/ProfileModal';
import MyProfileIcon from '../../assets/img/profile.svg';
import { changeTypingStatus } from '../../redux/actions/rooms';

const OnLineHeader = (props) => {
  const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.myProfile);
  const contactId = useSelector((state) => state.currentRoom.contactId);
  const typing = useSelector((state) => state.currentRoom.typing);
  const from = useSelector((state) => state.currentRoom.from);
  const roomId = useSelector((state) => state.currentRoom.roomId);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (currentUser === null) {
      props.history.push('/');
    }
  }, [currentUser, props.history]);

  useEffect(() => {
    if (contactId) {
      props.setSideBar(false);
      getProfile(contactId, setUserData);
    }
  }, [contactId]);

  useEffect(() => {
    if (userData)
      if (!userData.status && typing)
        dispatch(changeTypingStatus(false, from, roomId));
  }, [userData, typing]);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Navbar expand='md' className='on-nav'>
      <span
        onClick={() => props.setSideBar(!props.sideBar)}
        className='arrow'
        style={{ cursor: 'pointer', width: '37px' }}
      >
        {props.sideBar ? <X /> : <Menu />}
      </span>
      <Nav className='mr-auto' navbar>
        {userData && (
          <NavItem>
            <ProfileModal profile={userData} />
          </NavItem>
        )}
      </Nav>

      <NavbarText>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret style={{ background: 'none', border: 'none' }}>
            <img
              src={myProfile.dp ? myProfile.dp : MyProfileIcon}
              alt='profile pic'
              style={{
                height: '30px',
                width: '30px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => props.history.push('/my-profile')}>
              My Profile
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => firebase.auth().signOut()}>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarText>
    </Navbar>
  );
};

export default withRouter(OnLineHeader);
