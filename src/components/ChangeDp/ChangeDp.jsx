import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toast } from 'react-toastify';

import { updateURL } from '../../redux/actions/profile';
import Loader from '../../assets/loader/Loader';

import './change-dp.scss';

const ChangeDp = (props) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const toggle = () => {
    if (!loading) {
      setImage(null);
      props.setModal(!props.modal);
    }
  };

  const addImage = (e) => {
    if (!e.target.files[0]) {
      if (!file) {
        toast.error('Error: No file is selected');
      }
    } else if (!e.target.files[0].type.includes('image/')) {
      toast.error('Error: Only image files are excepted');
    } else if (e.target.files[0].size > 11000000) {
      toast.error('Error: Size should be less then 10 mbs');
    } else {
      setImage(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    }
  };

  const upload = () => {
    setLoading(true);
    dispatch(updateURL({ image: file, id: props.currentUser }))
      .then(() => {
        setLoading(false);
        toggle();
      })
      .catch((err) => {
        toast.error(err + '', {
          autoClose: false,
        });
        setLoading(false);
      });
  };

  return (
    <Modal isOpen={props.modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Change DP</ModalHeader>
      <ModalBody className='text-center'>
        {loading ? (
          <div style={{ height: '100px', marginTop: '50px' }}>
            <Loader />
          </div>
        ) : (
          <>
            <div className='d-flex justify-content-center mb-4'>
              <div className='image-preview'>
                <img
                  src={image}
                  alt='New DP'
                  className='dp'
                  style={{ display: !image || image === '' ? 'none' : 'block' }}
                />
                <span
                  style={{ display: !image || image === '' ? 'block' : 'none' }}
                >
                  Image Preview
                </span>
              </div>
            </div>
            <label className='custom-file-upload'>
              <input type='file' accept='image/*' onChange={addImage} />
              {!image || image === '' ? 'Add' : 'Change'}
            </label>
          </>
        )}
      </ModalBody>
      <ModalFooter>
        {!image || image === '' || loading ? (
          <Button color='primary' disabled>
            Update
          </Button>
        ) : (
          <Button color='primary' onClick={upload}>
            Update
          </Button>
        )}{' '}
        <Button outline color='secondary' onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ChangeDp;
