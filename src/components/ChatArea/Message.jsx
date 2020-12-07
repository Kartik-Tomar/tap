import React from 'react';
import moment from 'moment';

const Message = (props) => {
  return (
    <li className={props.by}>
      <div className='chat-body'>
        <div className='chat-message'>
          <p>{props.message.text}</p>
          <small>{moment.unix(props.message.sendAt).format('lll')}</small>
        </div>
      </div>
    </li>
  );
};

export default Message;
