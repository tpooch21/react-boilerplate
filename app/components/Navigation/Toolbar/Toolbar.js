import React from 'react';
import styled from 'styled-components';

import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => (
  <ToolbarWrapper>
    <NavigationItems />
  </ToolbarWrapper>
);

const ToolbarWrapper = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #cc99ff;
  border-bottom: 2px solid black;
`;

export default toolbar;
