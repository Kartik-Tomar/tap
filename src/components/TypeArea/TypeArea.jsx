import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Col, FormGroup, Input } from 'reactstrap';
import { Smile, Paperclip } from 'react-feather';
import { toast } from 'react-toastify';
import moment from 'moment';

import { AuthContext } from '../../firebase/Auth';
import SendIcon from '../../assets/img/send-mail.svg';
import { sendMessage } from '../../redux/actions/rooms';

const inputStyle = {
  background: 'none',
  backgroundColor: 'none',
  border: 'none',
  borderBottom: '1px solid #434a52',
  borderRadius: '0',
  boxShadow: 'none',
  outline: 'none',
  color: 'inherit',
};

const TypeArea = (props) => {
  const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      let data = {
        text: text,
        from: props.from === 'user1' ? 'user2' : 'user1',
        sendAt: moment().unix(),
      };
      let data2 = {
        myId: currentUser.uid,
        fromId: props.fromId,
      };
      setText('');
      dispatch(sendMessage(data, props.roomId, data2)).catch((err) =>
        toast.error(err + '', {
          autoClose: false,
        })
      );
    }
  };

  document.onkeydown = function () {
    if (window.event.keyCode === '13') {
      handleSubmit();
    }
  };

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit} autoComplete='off'>
      <Col
        xs='1'
        className='my-auto text-center d-inline-block'
        style={{ padding: '0px' }}
      >
        {/* <Smile style={{ cursor: 'pointer' }} /> */}
      </Col>
      <Col md='9' sm='8' xs='8' className='text-center d-inline-block'>
        <FormGroup style={{ marginBottom: '0px' }}>
          <Input
            autoComplete='false'
            type='text'
            name='text'
            id='inputText'
            rows='1'
            placeholder='Type your message here'
            style={inputStyle}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </FormGroup>
      </Col>
      <Col
        xs='1'
        className='my-auto text-center d-inline-block'
        style={{ padding: '0px' }}
      >
        {/* <Paperclip style={{ cursor: 'pointer' }} /> */}
      </Col>
      <Col md='1' sm='2' xs='2' className='my-auto text-center d-inline-block'>
        <button type='submit' style={{ border: 'none' }}>
          <img
            src={SendIcon}
            alt='send icon'
            style={{ height: '35px', cursor: 'pointer' }}
          />
        </button>
      </Col>
    </form>
  );
};

export default TypeArea;
