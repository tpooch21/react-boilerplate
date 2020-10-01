import React from 'react';
import { ToolbarWrapper } from './ToolbarWrapper';

import NavigationItems from '../NavigationItems/index';

const h1Style = {
  width: '100%',
  textAlign: 'center',
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '-1',
  margin: '4px 0',
};

const toolbar = () => (
  <ToolbarWrapper>
    <NavigationItems />
    <h1 style={h1Style}>String Displayer</h1>
  </ToolbarWrapper>
);

export default toolbar;
