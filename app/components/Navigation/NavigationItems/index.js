import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import { NavItemList } from './NavItemList';
import { NavItem } from './NavItem';

const NavigationItems = props => (
  <NavItemList side={props.side}>
    <NavItem side={props.side}>
      <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
        Home
      </NavLink>
    </NavItem>
    <NavItem side={props.side}>
      <NavLink to="/input" style={{ color: 'white', textDecoration: 'none' }}>
        Add String
      </NavLink>
    </NavItem>
  </NavItemList>
);

NavigationItems.propTypes = {
  side: PropTypes.bool,
};

export default NavigationItems;
