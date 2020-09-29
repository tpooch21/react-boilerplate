import React from 'react';
import styled from 'styled-components';

import String from './String/String';

const strings = ['Welcome', 'To', 'Our', 'First', 'Display', 'Example'];

const stringDisplay = () => (
  <StringGrid>
    {strings.map(str => (
      <String key={str} str={str} />
    ))}
  </StringGrid>
);

const StringGrid = styled.div`
  width: 750px;
  height: auto;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export default stringDisplay;
