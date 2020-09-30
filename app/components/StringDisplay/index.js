import React from 'react';
import PropTypes from 'prop-types';
import { StringGridWrapper } from './StringGridWrapper';

import String from './String/index';

const stringDisplay = props => (
  <StringGridWrapper>
    {props.strings.map(str => (
      <String key={str} str={str} />
    ))}
  </StringGridWrapper>
);

stringDisplay.propTypes = {
  strings: PropTypes.array,
};

export default stringDisplay;
