import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavItemList } from './NavItemList';
import { NavItem } from './NavItem';

const navigationItems = () => (
  <NavItemList>
    <NavItem>
      <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
        Home
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/x" style={{ color: 'white', textDecoration: 'none' }}>
        Add String
      </NavLink>
    </NavItem>
  </NavItemList>
);

export default navigationItems;
