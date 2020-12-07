import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';

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
              style={{ maxHeight: '80vh' }}
            >
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Raw denim heard of them tofu master cleanse</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Next level veard</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Will stumptown scenes coffee viral.</p>
                    <small>02:34 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Tofu master best deal</p>
                    <small>02:35 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Raw denim heard of them tofu master cleanse</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Next level veard</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Will stumptown scenes coffee viral.</p>
                    <small>02:34 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Tofu master best deal</p>
                    <small>02:35 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Raw denim heard of them tofu master cleanse</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Next level veard</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Will stumptown scenes coffee viral.</p>
                    <small>02:34 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Tofu master best deal</p>
                    <small>02:35 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Raw denim heard of them tofu master cleanse</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Next level veard</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Will stumptown scenes coffee viral.</p>
                    <small>02:34 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Tofu master best deal</p>
                    <small>02:35 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Raw denim heard of them tofu master cleanse</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Next level veard</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Will stumptown scenes coffee viral.</p>
                    <small>02:34 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Tofu master best deal</p>
                    <small>02:35 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Raw denim heard of them tofu master cleanse</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Next level veard</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Will stumptown scenes coffee viral.</p>
                    <small>02:34 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Tofu master best deal</p>
                    <small>02:35 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Raw denim heard of them tofu master cleanse</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Next level veard</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Will stumptown scenes coffee viral.</p>
                    <small>02:34 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Tofu master best deal</p>
                    <small>02:35 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Raw denim heard of them tofu master cleanse</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Next level veard</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Will stumptown scenes coffee viral.</p>
                    <small>02:34 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Tofu master best deal</p>
                    <small>02:35 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Raw denim heard of them tofu master cleanse</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Next level veard</p>
                    <small>02:33 pm</small>
                  </div>
                </div>
              </li>
              <li className='in'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Will stumptown scenes coffee viral.</p>
                    <small>02:34 pm</small>
                  </div>
                </div>
              </li>
              <li className='out'>
                <div className='chat-body'>
                  <div className='chat-message'>
                    <p>Tofu master best deal</p>
                    <small>02:35 pm</small>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      )}
      {currentRoom.roomId && !isLoading ? (
        <Row className='text-row pt-2'>
          <TypeArea />
        </Row>
      ) : (
        ''
      )}
    </Container>
  );
};

export default ChatArea;
