import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Send } from 'react-feather';

import Loader from '../../assets/loader/Loader';

import './add-new-contact.scss';

const AddMessage = (props) => {
  const [text, setText] = useState('');

  const toggle = () => {
    setText('');
    props.setModal(!props.modal);
  };

  return (
    <>
      <Button color='primary' style={{ width: '100%' }} onClick={toggle}>
        Add
      </Button>
      <Modal isOpen={props.modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Message</ModalHeader>
        <ModalBody className='text-center pb-5 pt-4 my-5'>
          {!props.loading ? (
            <form onSubmit={(e) => props.addToContact(e, text)}>
              <input
                type='text'
                className='search-input'
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
              <button type='submit' style={{ border: 'none' }}>
                <Send />
              </button>
            </form>
          ) : (
            <div
              style={{
                height: '15px',
                marginTop: '20px',
                marginBottom: '60px',
              }}
            >
              <Loader size='10px' />
            </div>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddMessage;
