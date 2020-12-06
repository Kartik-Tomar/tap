import React, { useState, useEffect, useContext } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '../../firebase/Auth';
import firebase from '../../firebase/firebase';
import Loader from '../../assets/loader/Loader';
import OffLineHeader from '../../components/Header/OffLineHeader';
import googleSigninButton from '../../assets/img/google-signin.svg';

const Home = (props) => {
  const { currentUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser !== null) {
      props.history.push('/chat');
    }
  }, [currentUser]);

  const loginWithGoogle = () => {
    setLoading(true);
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        toast.success('Logged In', {
          autoClose: true,
        });
      })
      .catch((err) => {
        toast.error(err + '', {
          autoClose: false,
        });
        setLoading(false);
      });
  };

  return (
    <Container fluid>
      <OffLineHeader />
      <Row className='justify-content-md-center mt-5'>
        <Col xs='12'>
          <h2 className='text-center'>Login / Sign Up</h2>
        </Col>
        <Col xs='12'>
          <p className='text-center'>Login to start messaging now !!!</p>
        </Col>
        {!loading ? (
          <Col xs='12' className='text-center my-3'>
            <Button
              className='p-0'
              style={{ border: 'none' }}
              onClick={() => loginWithGoogle()}
            >
              <img src={googleSigninButton} alt='google sign up button' />
            </Button>
          </Col>
        ) : (
          <Col xs='12' className='my-3 text-center '>
            <Loader size='10px' />
          </Col>
        )}
      </Row>
      <footer
        className='footer'
        style={{
          position: 'fixed',
          left: '49%',
          bottom: '-8px',
          transform: 'translate(-50%, -50%)',
          margin: '0 auto',
        }}
      >
        <h5 className='text-center my-2'>© All right Reversed</h5>
      </footer>
    </Container>
  );
};

export default withRouter(Home);
