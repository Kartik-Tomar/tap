import React, { useState } from 'react';

import OnLineHeader from '../../components/Header/OnLineHeader';
import Sidebar from '../../components/Sidebar/Sidebar';
import ChatArea from '../../components/ChatArea/ChatArea';

import './simple-sidebar.css';

const Chat = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div class={sideBar ? 'd-flex toggled' : 'd-flex'} id='wrapper'>
      <Sidebar />
      <div id='page-content-wrapper'>
        <OnLineHeader setSideBar={setSideBar} sideBar={sideBar} />
        <ChatArea />
      </div>
    </div>
  );
};

export default Chat;
