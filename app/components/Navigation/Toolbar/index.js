import React from 'react';
import { ToolbarWrapper } from './ToolbarWrapper';
import Title from './Title';

import NavigationItems from '../NavigationItems/index';

const Toolbar = () => (
  <ToolbarWrapper>
    <NavigationItems />
    <Title>Word Displayer</Title>
  </ToolbarWrapper>
);

export default Toolbar;
