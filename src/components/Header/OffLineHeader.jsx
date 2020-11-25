import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import letterA from '../../assets/img/a.png';
import letterP from '../../assets/img/p.png';

const OffLineHeader = () => {
  return (
    <Row className='my-2'>
      <Col xs='12' className='text-center'>
        <Link to='/' style={{ textDecoration: 'none', color: '#d3d3d3' }}>
          <img src={logo} alt='logo' style={{ height: '70px' }} />
          <img
            src={letterA}
            alt='letterA'
            style={{ height: '50px' }}
            className='mx-2'
          />
          <img src={letterP} alt='letterP' style={{ height: '50px' }} />
        </Link>
      </Col>
    </Row>
  );
};

export default OffLineHeader;
