import React from 'react';
import PropTypes from 'prop-types';
import './StringGridWrapper.css';

import Spinner from '../Spinner/index';
import String from './String/index';
import P from '../P/index';

const StringDisplay = props => {
  if (props.loading) {
    return <Spinner />;
  }

  if (props.strings.length === 0) {
    return (
      <P>
        <em>Add a word or phrase on the Add String page to get started!</em>
      </P>
    );
  }

  return (
    <div className="stringGridWrapper">
      {props.strings.map(str => (
        <String key={str.id} str={str.value} />
      ))}
    </div>
  );
};

StringDisplay.propTypes = {
  strings: PropTypes.array,
  loading: PropTypes.bool,
};

export default StringDisplay;
