import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';
import { animateScroll } from 'react-scroll';

import Message from './Message';
import Loader from '../../assets/loader/Loader';
import { getMessages } from '../../redux/actions/rooms';
import TypeArea from '../TypeArea/TypeArea';

import './chat-area.scss';

let scrollNo = 0;

const ChatArea = () => {
  const dispatch = useDispatch();

  const currentRoom = useSelector((state) => state.currentRoom);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentRoom.roomId) {
      setIsLoading(true);
      dispatch(getMessages(currentRoom.roomId))
        .then(() => setIsLoading(false))
        .catch((err) => {
          toast.error(err + '', {
            autoClose: false,
          });
          setIsLoading(false);
        });
    }
  }, [currentRoom.roomId]);

  useEffect(() => {
    if (scrollNo === 0) scrollToBottom();
    scrollNo = scrollNo + 1;
  });

  useEffect(() => {
    scrollToBottom();
    scrollNo = 0;
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
            </ul>
          </Col>
        </Row>
      )}
      {currentRoom.roomId && !isLoading ? (
        <Row className='text-row pt-2'>
          <TypeArea roomId={currentRoom.roomId} from={currentRoom.from} />
        </Row>
      ) : (
        ''
      )}
    </Container>
  );
};

export default ChatArea;
