import React from 'react';
import PropTypes from 'prop-types';
import { StringGridWrapper } from './StringGridWrapper';

import Spinner from '../Spinner/index';
import String from './String/index';

const stringDisplay = props => {
  if (props.loading) {
    return <Spinner />;
  }

  return (
    <StringGridWrapper>
      {props.strings.map(str => (
        <String key={str} str={str} />
      ))}
    </StringGridWrapper>
  );
};

stringDisplay.propTypes = {
  strings: PropTypes.array,
  loading: PropTypes.bool,
};

export default stringDisplay;
