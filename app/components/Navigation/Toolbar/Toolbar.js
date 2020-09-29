import React from 'react';
import styled from 'styled-components';

const toolbar = () => (
  <ToolbarWrapper>
    <h1>Heres the Toolbar</h1>
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
`;

export default toolbar;
