import React from 'react';
import { useSelector } from 'react-redux';

import AddNewContact from '../AddNewContact/AddNewContact';

import ContactTab from './ContactTab';
import logo from '../../assets/img/logo.png';
import letterA from '../../assets/img/a.png';

import letterP from '../../assets/img/p.png';
import './sidebar.scss';

const Sidebar = () => {
  const contactList = useSelector((state) => state.myProfile.contactList);
  return (
    <div id='sidebar-wrapper' className='min-vh-100'>
      <div className='sidebar-heading text-center'>
        <img src={logo} alt='logo' style={{ height: '45px' }} />
        <img
          src={letterA}
          alt='letterA'
          style={{ height: '35px' }}
          className='mx-2'
        />
        <img src={letterP} alt='letterP' style={{ height: '35px' }} />
      </div>
      <div className='list-group list-group-flush overflow-auto scroll-bar'>
        {contactList &&
          Object.keys(contactList).map((keyName, i) => (
            <ContactTab
              key={keyName}
              roomData={contactList[keyName]}
              userId={keyName}
            />
          ))}
      </div>
      <AddNewContact />
    </div>
  );
};

export default Sidebar;
