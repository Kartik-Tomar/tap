import React from 'react';

import AddNewContact from '../AddNewContact/AddNewContact'

import ProfileIcon from '../../assets/img/man.svg';
import logo from '../../assets/img/logo.png';
import letterA from '../../assets/img/a.png';

import letterP from '../../assets/img/p.png';
import './sidebar.scss';

const Sidebar = () => {
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
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        {/* <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div>
        <div className='list-group-item list-group-item-action'>
          <img src={ProfileIcon} alt='profile pic' className='profile-pic' />
          <b className='profile-name'>Somebody Else</b>
        </div> */}
      </div>
      <AddNewContact/>
    </div>
  );
};

export default Sidebar;
