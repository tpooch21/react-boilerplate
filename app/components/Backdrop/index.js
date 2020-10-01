import styled from 'styled-components';

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: ${props => (props.show ? 'block' : 'none')};
`;

export default Backdrop;
