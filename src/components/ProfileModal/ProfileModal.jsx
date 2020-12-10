import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import ProfileIcon from '../../assets/img/man.svg';

import './profile-modal.scss';

const ProfileModal = (props) => {
  const [modal, setModal] = useState(false);
  // const [loading, setLoading] = useState(false);
  const typing = useSelector((state) => state.currentRoom.typing);

  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <Row onClick={() => setModal(true)} style={{ cursor: 'pointer' }}>
        <img
          src={props.profile.dp ? props.profile.dp : ProfileIcon}
          alt='profile pic'
          style={{
            height: '30px',
            width: '30px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginRight: '10px',
            marginLeft: '10px',
          }}
        />
        <b>
          {props.profile.status && <span className='dot mr-2'></span>}
          {props.profile.name ? props.profile.name : 'Random User'}
        </b>
        {typing && <div className='typing-loader my-auto ml-2'></div>}
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>User Profile</ModalHeader>
        <ModalBody className='justify-content-center'>
          <Col md='12' className='mt-4'>
            <Row>
              <Col md='12' className='text-center'>
                <div className='dp-container'>
                  <img
                    src={props.profile.dp ? props.profile.dp : ''}
                    alt='DP'
                    className='dp'
                  />
                </div>
              </Col>
              <Col md='12' className='mt-3 text-center'>
                <h2>{props.profile.name}</h2>
                <h5>{props.profile.email}</h5>
              </Col>
            </Row>
          </Col>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ProfileModal;
