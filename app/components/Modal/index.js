import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const modal = props => (
  <Modal show={props.show}>
    <p style={{ lineHeight: '30px' }}>Network Error</p>
  </Modal>
);

modal.propTypes = {
  show: PropTypes.bool,
};

export default modal;
