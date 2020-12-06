import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { UserPlus } from 'react-feather';
import { Search } from 'react-feather';

import { searchUser } from '../../redux/actions/contact';
import Loader from '../../assets/loader/Loader';

import './add-new-contact.scss';

const AddNewContact = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  const search = (e) => {
    e.preventDefault();
    dispatch(searchUser({ email: searchValue }))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Row className='options mx-auto my-2'>
      <Col md='12'>
        <Button
          outline
          color='primary'
          style={{ width: '100%' }}
          onClick={toggle}
        >
          <UserPlus className='mr-2 add-icon' />
          <span style={{ color: '#d3d3d3', background: 'none' }}>
            Add New Contact
          </span>
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Find New Users</ModalHeader>
          <ModalBody className='text-center py-5'>
            <form onSubmit={search}>
              <input
                type='text'
                className='search-input'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                required
              />
              <button className='mr-2' type='submit' style={{ border: 'none' }}>
                <Search />
              </button>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color='primary'>Add</Button>
            <Button outline color='secondary' onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Col>
    </Row>
  );
};

export default AddNewContact;
