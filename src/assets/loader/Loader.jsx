import React from 'react';

import './loader.scss';

const Loader = (props) => {
  return (
    <div
      className='loader mx-auto'
      style={{ fontSize: props.size ? props.size : '' }}
    >
      Loading...
    </div>
  );
};

export default Loader;
