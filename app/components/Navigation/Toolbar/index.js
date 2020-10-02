import React, { useState } from 'react';
import { ToolbarWrapper } from './ToolbarWrapper';
import Title from './Title';

import NavigationItems from '../NavigationItems/index';
import MenuButton from '../MenuButton/index';
import Nav from './Nav';
import Aux from '../../hoc/Aux/index';
import SideDrawer from '../SideDrawer/index';

const Toolbar = () => {
  const [showSideDrawer, toggleSideDrawer] = useState(false);

  return (
    <Aux>
      <SideDrawer show={showSideDrawer} close={() => toggleSideDrawer(false)} />
      <ToolbarWrapper>
        <Nav>
          <NavigationItems side={false} />
        </Nav>
        <MenuButton openSide={() => toggleSideDrawer(true)} />
        <Title>Word Displayer</Title>
      </ToolbarWrapper>
    </Aux>
  );
};

export default Toolbar;
