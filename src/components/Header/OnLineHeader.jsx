import React, { useState, useEffect, useContext } from 'react';
import { Menu, X } from 'react-feather';
import { useSelector } from 'react-redux';
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
import firebase from '../../firebase/firebase';
import ProfileIcon from '../../assets/img/man.svg';
import MyProfileIcon from '../../assets/img/profile.svg';

const OnLineHeader = (props) => {
  const { currentUser } = useContext(AuthContext);
  const myProfile = useSelector((state) => state.myProfile);
  const contactData = useSelector((state) => state.currentRoom.contactData);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (currentUser === null) {
      props.history.push('/');
    }
  }, [currentUser, props.history]);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Navbar expand='md' className='on-nav'>
      <span onClick={() => props.setSideBar(!props.sideBar)} className='arrow'>
        {props.sideBar ? <X /> : <Menu />}
      </span>
      <Nav className='mr-auto' navbar>
        {contactData && (
          <NavItem>
            <div>
              <img
                src={contactData.dp ? contactData.dp : ProfileIcon}
                alt='profile pic'
                style={{
                  height: '30px',
                  width: '30px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '10px',
                  marginLeft: '10px',
                }}
              />
              <b>{contactData.name ? contactData.name : 'Random User'}</b>
            </div>
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
