import React from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from './Modal';

const Modal = props => (
  <ModalWrapper show={props.show}>
    <p style={{ lineHeight: '30px' }}>Network Error</p>
  </ModalWrapper>
);

Modal.propTypes = {
  show: PropTypes.bool,
};

export default Modal;
