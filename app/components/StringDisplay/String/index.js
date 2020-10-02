import React from 'react';
import PropTypes from 'prop-types';
import { StringWrapper } from './StringWrapper';

const String = props => (
  <StringWrapper>
    <p>{props.str}</p>
  </StringWrapper>
);

String.propTypes = {
  str: PropTypes.string,
};

export default String;
