import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Backdrop from '../Backdrop/index';
import Modal from '../Modal/index';

const ErrorMessage = props => {
  // component should only re-render when error is thrown (or resolved)
  useEffect(() => {}, [props.show]);

  return (
    <Backdrop show={props.show} onClick={props.onClick}>
      <Modal show={props.show} />
    </Backdrop>
  );
};

ErrorMessage.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ErrorMessage;
