import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Edit, X, Check } from 'react-feather';
import { Container, Row, Col, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import firebase from '../../firebase/firebase';
import { AuthContext } from '../../firebase/Auth';
import Loader from '../../assets/loader/Loader';
import { updateName } from '../../redux/actions/profile';
import OffLineHeader from '../../components/Header/OffLineHeader';
import ChangeDp from '../../components/ChangeDp/ChangeDp';

import './my-profile.scss';

const SignUp = (props) => {
  const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();

  const myProfile = useSelector((state) => state.myProfile);

  const [name, setName] = useState(myProfile.name ? myProfile.name : '');
  const [editName, setEditName] = useState(false);
  const [loading, setLoading] = useState(false);
  const [changeDpModal, setChangeDpModal] = useState(false);

  useEffect(() => {
    if (currentUser === null) {
      props.history.push('/');
    }
  }, [currentUser]);

  const changeName = (e) => {
    e.preventDefault();
    if (name === myProfile.name) {
      setEditName(false);
    } else {
      setLoading(true);
      dispatch(updateName({ id: currentUser.uid, name }))
        .then(() => {
          setLoading(false);
          setEditName(false);
        })
        .catch((err) => {
          toast.error(err + '', {
            autoClose: false,
          });
          setLoading(false);
          setEditName(false);
          setName(myProfile.name);
        });
    }
  };

  return (
    <Container fluid>
      <ChangeDp
        modal={changeDpModal}
        setModal={setChangeDpModal}
        currentUser={currentUser ? currentUser.uid : null}
      />
      <OffLineHeader />
      <Row className='justify-content-md-center mt-5'>
        <Col xs='12'>
          <h1 className='text-center'>My Profile</h1>
        </Col>
        <Col xs='12'>
          <p className='text-center'>You can edit your profile here.</p>
        </Col>
        <Col md='6' className='mt-4'>
          <Row>
            <Col md='12' className='text-center'>
              <div className='dp-container'>
                <img
                  src={myProfile.dp ? myProfile.dp : ''}
                  alt='DP'
                  className='dp'
                />
                <button
                  className='dp-edit-btn'
                  onClick={() => setChangeDpModal(true)}
                >
                  <h2>
                    <Edit />
                  </h2>
                </button>
              </div>
            </Col>
            <Col md='12' className='mt-3 text-center'>
              <h2>
                {loading ? (
                  <div className='py-2' style={{ height: '40px' }}>
                    <Loader size='5px' />
                  </div>
                ) : editName ? (
                  <>
                    <form onSubmit={changeName}>
                      <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='name-input'
                        required
                      />
                      <button
                        className='mr-2'
                        type='submit'
                        style={{ border: 'none' }}
                      >
                        <Check />
                      </button>
                      <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setName(myProfile.name ? myProfile.name : '');
                          setEditName(false);
                        }}
                      >
                        <X />
                      </span>
                    </form>
                  </>
                ) : (
                  <>
                    {myProfile.name}{' '}
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => setEditName(true)}
                    >
                      <Edit />
                    </span>
                  </>
                )}
              </h2>
              <h5>{myProfile.email}</h5>
            </Col>
            <Col md='12' className='text-center mt-4'>
              <Button
                outline
                color='primary'
                onClick={() => props.history.push('/chat')}
                className='mx-2'
              >
                Back to Chat
              </Button>
              <Button
                outline
                color='primary'
                onClick={() => firebase.auth().signOut()}
                className='mx-2'
              >
                Log Out
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(SignUp);
