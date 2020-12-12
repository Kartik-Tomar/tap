import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';
import { animateScroll } from 'react-scroll';

import { AuthContext } from '../../firebase/Auth';
import Message from './Message';
import Loader from '../../assets/loader/Loader';
import {
  getMessages,
  getTyping,
  changeTypingStatus,
} from '../../redux/actions/rooms';
import { seenMessage } from '../../redux/actions/contacts';
import TypeArea from '../TypeArea/TypeArea';
import Typing from './Typing';

import './chat-area.scss';

let scrollNo = 0;

const ChatArea = () => {
  const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();

  const currentRoom = useSelector((state) => state.currentRoom);

  const [isLoading, setIsLoading] = useState(false);
  const [currentRoomLocal, setCurrentRoomLocal] = useState(null);
  const [typing, setTyping] = useState(null);

  useEffect(() => {
    if (currentRoomLocal && currentRoomLocal.roomId) {
      if (currentRoomLocal.roomId !== currentRoom.roomId) {
        let user = currentRoomLocal.from === 'user1' ? 'user2' : 'user1';
        dispatch(changeTypingStatus(false, user, currentRoomLocal.roomId));
      }
    }
    setCurrentRoomLocal(currentRoom);
  }, [currentRoom]);

  useEffect(() => {
    if (currentRoom.roomId) {
      setIsLoading(true);
      dispatch(getMessages(currentRoom.roomId))
        .then(() => {
          dispatch(
            seenMessage({
              myId: currentUser.uid,
              fromId: currentRoom.contactId,
            })
          );
          setIsLoading(false);
        })
        .catch((err) => {
          toast.error(err + '', {
            autoClose: false,
          });
          setIsLoading(false);
        });
      dispatch(getTyping(currentRoom.roomId));
    }
  }, [currentRoom.roomId]);

  useEffect(() => {
    if (scrollNo === 0) scrollToBottom();
    scrollNo = scrollNo + 1;
  });

  useEffect(() => {
    scrollToBottom();
    scrollNo = 0;
    if (currentUser.uid && currentRoom.contactId) {
      dispatch(
        seenMessage({
          myId: currentUser.uid,
          fromId: currentRoom.contactId,
        })
      );
    }
  }, [currentRoom.messages]);

  const getMessageSendBy = (from) => {
    if (from === currentRoom.from) return 'in';
    else return 'out';
  };

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: 'ContainerElementID',
    });
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <Container
      fluid
      style={{ paddingTop: '75px', paddingBottom: '75px', height: '100vh' }}
      id='ContainerElementID'
      className='overflow-auto scroll-bar'
    >
      {isLoading ? (
        <Row className='text-center no-room'>
          <Col>
            <div style={{ marginTop: '37vh' }}>
              <Loader />
            </div>
          </Col>
        </Row>
      ) : !currentRoom.roomId ? (
        <Row className='text-center no-room'>
          <Col>
            <h1 style={{ marginTop: '37vh' }}>No Room Selected</h1>
          </Col>
        </Row>
      ) : !currentRoom.messages ? (
        <Row className='text-center no-room'>
          <Col>
            <h1 style={{ marginTop: '37vh' }}>Start Messaging</h1>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col xs='12'>
            <ul className='chat-list'>
              {Object.keys(currentRoom.messages).map((keyName, i) => (
                <Message
                  by={getMessageSendBy(currentRoom.messages[keyName].from)}
                  message={currentRoom.messages[keyName]}
                  key={keyName}
                />
              ))}
              {currentRoom.typing && <Typing />}
            </ul>
          </Col>
        </Row>
      )}
      {currentRoom.roomId && !isLoading ? (
        <Row className='text-row pt-2'>
          <TypeArea
            roomId={currentRoom.roomId}
            from={currentRoom.from}
            fromId={currentRoom.contactId}
          />
        </Row>
      ) : (
        ''
      )}
    </Container>
  );
};

export default ChatArea;
