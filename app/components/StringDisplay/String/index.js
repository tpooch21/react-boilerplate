import React from 'react';
import PropTypes from 'prop-types';
import { StringWrapper } from './StringWrapper';

const string = props => (
  <StringWrapper>
    <p>{props.str}</p>
  </StringWrapper>
);

string.propTypes = {
  str: PropTypes.string,
};

export default string;
