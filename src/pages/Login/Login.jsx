import React from 'react';
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

const Login = () => {
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
            <Link to='/' style={{ color: '#d3d3d3' }}>
              Sign up here
            </Link>
          </p>
        </Col>
        <Col md='6'>
          <Form>
            <FormGroup>
              <Label for='inputEmail'>Email</Label>
              <Input
                type='email'
                name='email'
                id='inputEmail'
                placeholder='Enter your Email-id'
                style={inputStyle}
              />
            </FormGroup>
            <FormGroup>
              <Label for='inputPassword'>Password</Label>
              <Input
                type='password'
                name='password'
                id='inputPassword'
                placeholder='Enter Your Password'
                style={inputStyle}
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
