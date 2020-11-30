import React, { useState, useEffect, useContext } from 'react';
import { Menu, X } from 'react-feather';
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

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (currentUser === null) {
      props.history.push('/');
    }
  }, [currentUser]);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Navbar expand='md' className='on-nav'>
      <span onClick={() => props.setSideBar(!props.sideBar)} className='arrow'>
        {props.sideBar ? <X /> : <Menu />}
      </span>
      <Nav className='mr-auto' navbar>
        <NavItem>
          <div>
            <img
              src={ProfileIcon}
              alt='profile pic'
              style={{
                height: '30px',
                marginRight: '10px',
                marginLeft: '10px',
              }}
            />
            <b>Somebody Else</b>
          </div>
        </NavItem>
      </Nav>

      <NavbarText>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret style={{ background: 'none', border: 'none' }}>
            <img
              src={MyProfileIcon}
              alt='profile pic'
              style={{
                height: '30px',
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
