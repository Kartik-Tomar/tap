import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import { Smile, Paperclip } from 'react-feather';

import SendIcon from '../../assets/img/send-mail.svg';

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

const TypeArea = () => {
  return (
    <>
      <Col
        xs='1'
        className='my-auto text-center d-inline-block'
        style={{ padding: '0px' }}
      >
        <Smile style={{ cursor: 'pointer' }} />
      </Col>
      <Col md='9' sm='8' xs='8' className='text-center d-inline-block'>
        <FormGroup>
          <Input
            type='textarea'
            name='text'
            id='inputText'
            rows='1'
            placeholder='Type your message here'
            style={inputStyle}
            required
          />
        </FormGroup>
      </Col>
      <Col
        xs='1'
        className='my-auto text-center d-inline-block'
        style={{ padding: '0px' }}
      >
        <Paperclip style={{ cursor: 'pointer' }} />
      </Col>
      <Col md='1' sm='2' xs='2' className='my-auto text-center d-inline-block'>
        <img
          src={SendIcon}
          alt='send icon'
          style={{ height: '35px', cursor: 'pointer' }}
        />
      </Col>
    </>
  );
};

export default TypeArea;
