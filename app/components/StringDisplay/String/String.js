import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const string = props => (
  <StringWrapper>
    <p>{props.str}</p>
  </StringWrapper>
);

const StringWrapper = styled.div`
  width: 95%;
  padding: 5px 0;
  margin: 5px;
  border: 1px solid black;
  text-align: center;
`;

string.propTypes = {
  str: PropTypes.string,
};

export default string;
