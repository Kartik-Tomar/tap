import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';

import OffLineHeader from '../../components/Header/OffLineHeader';
import googleSigninButton from '../../assets/img/google-signin.svg';

const inputStyle = {
  background: 'none',
  backgroundColor: 'none',
  border: 'none',
  borderBottom: '1px solid #434a52',
  borderRadius: '0',
  boxShadow: 'none',
  outline: 'none',
  color: 'inherit',
};

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container fluid>
      <OffLineHeader />
      <Row className='justify-content-md-center mt-5'>
        <Col xs='12'>
          <h1 className='text-center'>Login</h1>
        </Col>
        <Col xs='12'>
          <p className='text-center'>
            Do not have an Account?{' '}
            <Link to='/signup' style={{ color: '#d3d3d3' }}>
              Sign up here
            </Link>
          </p>
        </Col>
        <Col md='6'>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='inputEmail'>Email</Label>
              <Input
                type='email'
                name='email'
                id='inputEmail'
                placeholder='Enter your Email-id'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                style={inputStyle}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for='inputPassword'>Password</Label>
              <Input
                type='password'
                name='password'
                id='inputPassword'
                placeholder='Enter Your Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                style={inputStyle}
                required
              />
            </FormGroup>
            <div className='text-center'>
              <Button color='primary' size='lg' className='px-5'>
                Login
              </Button>
            </div>
          </Form>
        </Col>
        <Col xs='12' className='text-center mb-3'>
          <p className='my-2'>or</p>
          <Button className='p-0' style={{ border: 'none' }}>
            <img src={googleSigninButton} alt='google sign up button' />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
