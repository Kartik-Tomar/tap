import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'react-feather';
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

import ProfileIcon from '../../assets/img/man.svg';
import MyProfileIcon from '../../assets/img/profile.svg';

import './online-header.scss';

const OnLineHeader = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Navbar expand='md' className='on-nav'>
      <span onClick={() => props.setSideBar(!props.sideBar)} className='arrow'>
        {props.sideBar ? <ArrowLeft /> : <ArrowRight />}
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
            <DropdownItem disabled>My Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarText>
    </Navbar>
  );
};

export default OnLineHeader;
