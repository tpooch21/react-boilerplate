import React from 'react';
import { StringGridWrapper } from './StringGridWrapper';

import String from './String/index';

const strings = ['Welcome', 'To', 'Our', 'First', 'Display', 'Example'];

const stringDisplay = () => (
  <StringGridWrapper>
    {strings.map(str => (
      <String key={str} str={str} />
    ))}
  </StringGridWrapper>
);

export default stringDisplay;
