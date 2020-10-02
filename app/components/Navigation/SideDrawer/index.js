import React from 'react';

import PropTypes from 'prop-types';
import NavigationItems from '../NavigationItems/index';
import Aux from '../../hoc/Aux/index';
import Backdrop from '../../Backdrop/index';
import SideDrawerWrapper from './SideDrawerWrapper';

const SideDrawer = props => (
  <Aux>
    <Backdrop show={props.show} onClick={props.close} />
    <SideDrawerWrapper show={props.show}>
      <nav>
        <NavigationItems side />
      </nav>
    </SideDrawerWrapper>
  </Aux>
);

SideDrawer.propTypes = {
  show: PropTypes.bool,
  close: PropTypes.func,
};

export default SideDrawer;
