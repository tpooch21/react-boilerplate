import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from './MenuIcon';

const MenuButton = props => (
  <MenuIcon onClick={props.openSide}>
    <div />
    <div />
    <div />
  </MenuIcon>
);

MenuButton.propTypes = {
  openSide: PropTypes.func,
};

export default MenuButton;
