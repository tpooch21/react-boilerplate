import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

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

const NavItemList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row;
  align-items: center;
  width: auto;
`;

const NavItem = styled.li`
  margin: 0 5px;
  background-color: black;
  color: white;
  padding: 5px 5px;
  border-radius: 3px;
`;

export default navigationItems;
