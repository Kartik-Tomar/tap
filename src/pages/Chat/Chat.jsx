import React, { useState } from 'react';

import OnLineHeader from '../../components/Header/OnLineHeader';
import Sidebar from '../../components/Sidebar/Sidebar';

import './simple-sidebar.css';

const Chat = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div class={sideBar ? 'd-flex toggled' : 'd-flex'} id='wrapper'>
      <Sidebar />
      <div id='page-content-wrapper'>
        <OnLineHeader setSideBar={setSideBar} sideBar={sideBar} />
        <div
          class='container-fluid overflow-auto scroll-bar'
          style={{ maxHeight: '92vh' }}
        >
          <h1 class='mt-4'>Chat Area</h1>
          <p>
            The starting state of the menu will appear collapsed on smaller
            screens, and will appear non-collapsed on larger screens. When
            toggled using the button below, the menu will change.
          </p>
          <p>
            Make sure to keep all page content within the{' '}
            <code>#page-content-wrapper</code>. The top navbar is optional, and
            just for demonstration. Just create an element with the{' '}
            <code>#menu-toggle</code> ID which will toggle the menu when
            clicked.
          </p>
          <h1 class='mt-4'>Chat Area</h1>
          <p>
            The starting state of the menu will appear collapsed on smaller
            screens, and will appear non-collapsed on larger screens. When
            toggled using the button below, the menu will change.
          </p>
          <p>
            Make sure to keep all page content within the{' '}
            <code>#page-content-wrapper</code>. The top navbar is optional, and
            just for demonstration. Just create an element with the{' '}
            <code>#menu-toggle</code> ID which will toggle the menu when
            clicked.
          </p>
          <h1 class='mt-4'>Chat Area</h1>
          <p>
            The starting state of the menu will appear collapsed on smaller
            screens, and will appear non-collapsed on larger screens. When
            toggled using the button below, the menu will change.
          </p>
          <p>
            Make sure to keep all page content within the{' '}
            <code>#page-content-wrapper</code>. The top navbar is optional, and
            just for demonstration. Just create an element with the{' '}
            <code>#menu-toggle</code> ID which will toggle the menu when
            clicked.
          </p>
          <h1 class='mt-4'>Chat Area</h1>
          <p>
            The starting state of the menu will appear collapsed on smaller
            screens, and will appear non-collapsed on larger screens. When
            toggled using the button below, the menu will change.
          </p>
          <p>
            Make sure to keep all page content within the{' '}
            <code>#page-content-wrapper</code>. The top navbar is optional, and
            just for demonstration. Just create an element with the{' '}
            <code>#menu-toggle</code> ID which will toggle the menu when
            clicked.
          </p>
          <h1 class='mt-4'>Chat Area</h1>
          <p>
            The starting state of the menu will appear collapsed on smaller
            screens, and will appear non-collapsed on larger screens. When
            toggled using the button below, the menu will change.
          </p>
          <p>
            Make sure to keep all page content within the{' '}
            <code>#page-content-wrapper</code>. The top navbar is optional, and
            just for demonstration. Just create an element with the{' '}
            <code>#menu-toggle</code> ID which will toggle the menu when
            clicked.
          </p>
          <h1 class='mt-4'>Chat Area</h1>
          <p>
            The starting state of the menu will appear collapsed on smaller
            screens, and will appear non-collapsed on larger screens. When
            toggled using the button below, the menu will change.
          </p>
          <p>
            Make sure to keep all page content within the{' '}
            <code>#page-content-wrapper</code>. The top navbar is optional, and
            just for demonstration. Just create an element with the{' '}
            <code>#menu-toggle</code> ID which will toggle the menu when
            clicked.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
