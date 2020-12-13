import React, { useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, FormGroup, Input } from 'reactstrap';
import { Smile, X } from 'react-feather';
import { toast } from 'react-toastify';
import moment from 'moment';

import { AuthContext } from '../../firebase/Auth';
import Emoji from './Emoji';
import SendIcon from '../../assets/img/send-mail.svg';
import { sendMessage, changeTypingStatus } from '../../redux/actions/rooms';

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
  const [showEmoji, setShowEmoji] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowEmoji(false);
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

  useEffect(() => {
    let user = props.from === 'user1' ? 'user2' : 'user1';
    if (text.length > 0) {
      dispatch(changeTypingStatus(true, user, props.roomId));
    } else {
      dispatch(changeTypingStatus(false, user, props.roomId));
    }
  }, [text]);

  document.onkeydown = function () {
    if (window.event.keyCode === '13') {
      handleSubmit();
    }
  };

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit} autoComplete='off'>
      <Emoji text={text} setText={setText} showEmoji={showEmoji} />
      <Row className='px-3'>
        <Col
          xs='1'
          className='my-auto text-center d-inline-block'
          style={{ padding: '0px' }}
        >
          {!showEmoji ? (
            <Smile
              style={{ cursor: 'pointer' }}
              onClick={() => setShowEmoji(true)}
            />
          ) : (
            <X
              style={{ cursor: 'pointer' }}
              onClick={() => setShowEmoji(false)}
            />
          )}
        </Col>
        <Col md='10' sm='9' xs='9' className='text-center d-inline-block'>
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
        {/* <Col
          xs='1'
          className='my-auto text-center d-inline-block'
          style={{ padding: '0px' }}
        >
          <Paperclip style={{ cursor: 'pointer' }} />
        </Col> */}
        <Col
          md='1'
          sm='2'
          xs='2'
          className='my-auto text-center d-inline-block'
        >
          <button type='submit' style={{ border: 'none' }}>
            <img
              src={SendIcon}
              alt='send icon'
              style={{ height: '35px', cursor: 'pointer' }}
            />
          </button>
        </Col>
      </Row>
    </form>
  );
};

export default TypeArea;
