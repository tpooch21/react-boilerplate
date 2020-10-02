import styled from 'styled-components';

const SideDrawerWrapper = styled.div`
  position: fixed;
  width: 50%;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  display: ${props => (props.show ? 'block' : 'none')};

  @media (min-width: 750px) {
    display: none;
  }
`;

export default SideDrawerWrapper;
