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

const ChatArea = () => {
  const dispatch = useDispatch();

  const currentRoom = useSelector((state) => state.currentRoom);

  const [isLoading, setIsLoading] = useState();

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
    scrollToBottom();
  }, [currentRoom.messages]);

  const getMessageSendBy = (from) => {
    if (from === currentRoom.from) return 'in';
    else return 'out';
  };

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: 'ContainerElementID',
    });
  };

  return (
    <Container fluid>
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
            <ul
              className='chat-list overflow-auto scroll-bar'
              id='ContainerElementID'
              style={{ maxHeight: '80vh', minHeight: '80vh' }}
            >
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
