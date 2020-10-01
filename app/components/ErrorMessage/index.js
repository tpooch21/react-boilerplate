import React from 'react';
import PropTypes from 'prop-types';

import Backdrop from '../Backdrop/index';
import Modal from '../Modal/index';

const errorMessage = props => (
  <Backdrop show={props.show}>
    <Modal show={props.show} />
  </Backdrop>
);

errorMessage.propTypes = {
  show: PropTypes.bool,
};

export default errorMessage;
