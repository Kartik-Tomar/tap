import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CheckCircle } from 'react-feather';
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Alert,
} from 'reactstrap';
import { UserPlus } from 'react-feather';
import { AuthContext } from '../../firebase/Auth';
import { Search } from 'react-feather';
import { toast } from 'react-toastify';

import { creatRoom } from '../../redux/actions/rooms';
import AddMessage from './AddMessage';
import { searchUser } from '../../redux/actions/contacts';
import Loader from '../../assets/loader/Loader';

import './add-new-contact.scss';

const AddNewContact = (props) => {
  const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const contactList = useSelector((state) => state.myProfile.contactList);
  const [searchValue, setSearchValue] = useState('');
  const [modal, setModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [visible, setVisible] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const [yourAccount, setYourAccount] = useState(false);

  const onDismiss = () => setVisible(false);

  const toggle = () => {
    setVisible(true);
    setUser(null);
    setSearchValue('');
    setLoading(false);
    setModal(!modal);
  };

  const search = (e) => {
    e.preventDefault();
    setLoading(true);
    setSearchValue('');
    dispatch(searchUser({ email: searchValue }))
      .then((res) => {
        setLoading(false);
        setUser(res);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err + '', {
          autoClose: false,
        });
      });
  };

  const addToContact = (e, text) => {
    e.preventDefault();
    if (currentUser && user) {
      setLoading(true);
      dispatch(
        creatRoom({
          myId: currentUser.uid,
          id: user.id,
          text,
          from: currentUser.uid,
        })
      )
        .then(() => {
          setMessageModal(false);
          toggle();
        })
        .catch((err) => {
          setLoading(false);
          setMessageModal(false);
          toast.error(err + '', {
            autoClose: false,
          });
        });
    } else
      toast.error('Try Again', {
        autoClose: false,
      });
  };

  useEffect(() => {
    if (user && contactList && currentUser)
      if (contactList[user.id]) setIsAdded(true);
      else if (user.id === currentUser.uid) setYourAccount(true);
      else setIsAdded(false);
  }, [user, contactList, currentUser]);

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
          <ModalHeader toggle={toggle}>Add New Contact</ModalHeader>
          <ModalBody className='text-center pb-5 pt-4'>
            {!loading ? (
              <form onSubmit={search}>
                <input
                  type='text'
                  className='search-input'
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  required
                />
                <button type='submit' style={{ border: 'none' }}>
                  <Search />
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
            {user ? (
              <Row className='mt-4 mx-4'>
                <Col md='3' xs='4' className='my-auto'>
                  <img src={user.dp} alt='dp' className='dps' />
                </Col>
                <Col md='6' xs='8' className='my-auto'>
                  <h5 className='m-0'>
                    <b>{user.name}</b>
                  </h5>
                </Col>
                {yourAccount ? (
                  <Col md='3' xs='12' className='my-auto mx-auto'>
                    <Button
                      color='primary'
                      onClick={() => props.history.push('/my-profile')}
                    >
                      Profile
                    </Button>
                  </Col>
                ) : isAdded ? (
                  <Col md='3' xs='12' className='my-auto mx-auto'>
                    <CheckCircle />
                  </Col>
                ) : (
                  <Col md='3' xs='12' className='my-auto mx-auto pt-3'>
                    <AddMessage
                      addToContact={addToContact}
                      modal={messageModal}
                      setModal={setMessageModal}
                      loading={loading}
                    />
                  </Col>
                )}
              </Row>
            ) : (
              <Alert
                color='danger'
                isOpen={visible}
                toggle={onDismiss}
                className='mt-4 mb-0'
              >
                Note: You have to enter the exact email address to add to
                contact
              </Alert>
            )}
          </ModalBody>
        </Modal>
      </Col>
    </Row>
  );
};

export default withRouter(AddNewContact);
