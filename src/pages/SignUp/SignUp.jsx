import React, { useState, useEffect } from 'react';
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
import googleSignupButton from '../../assets/img/google-signup.svg';

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

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  useEffect(() => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError(null);
    }
  }, [confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setPasswordError('Password has to be more than 6 charters');
    } else {
      setPasswordError(null);
      if (!confirmPasswordError) {
      }
    }
  };

  return (
    <Container fluid>
      <OffLineHeader />
      <Row className='justify-content-md-center mt-5'>
        <Col xs='12'>
          <h1 className='text-center'>Sign up</h1>
        </Col>
        <Col xs='12'>
          <p className='text-center'>
            Already have an Account?{' '}
            <Link to='/' style={{ color: '#d3d3d3' }}>
              Login here
            </Link>
          </p>
        </Col>
        <Col md='6'>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='inputName'>Name</Label>
              <Input
                type='name'
                name='name'
                id='inputName'
                placeholder='Enter your name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                style={inputStyle}
                required
              />
            </FormGroup>
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
              {passwordError ? (
                <span>
                  <small className='text-danger'>{passwordError}</small>
                </span>
              ) : (
                ''
              )}
            </FormGroup>
            <FormGroup>
              <Label for='inputConfirmPassword'>Confirm Password</Label>
              <Input
                type='password'
                name='password'
                id='inputConfirmPassword'
                placeholder='Enter Password again'
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                style={inputStyle}
                required
              />
              {confirmPasswordError ? (
                <span>
                  <small className='text-danger'>{confirmPasswordError}</small>
                </span>
              ) : (
                ''
              )}
            </FormGroup>
            <div className='text-center'>
              <Button color='primary' size='lg' className='px-5'>
                Sign Up
              </Button>
            </div>
          </Form>
        </Col>
        <Col xs='12' className='text-center mb-3'>
          <p className='my-2'>or</p>
          <Button className='p-0' style={{ border: 'none' }}>
            <img src={googleSignupButton} alt='google sign up button' />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
