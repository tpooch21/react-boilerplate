import React from 'react';
import { ToolbarWrapper } from './ToolbarWrapper';
import Title from './Title';

import NavigationItems from '../NavigationItems/index';
import MenuButton from '../MenuButton/index';
import Nav from './Nav';

const Toolbar = () => (
  <ToolbarWrapper>
    <Nav>
      <NavigationItems />
    </Nav>
    <MenuButton />
    <Title>Word Displayer</Title>
  </ToolbarWrapper>
);

export default Toolbar;
