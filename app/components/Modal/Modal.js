import styled from 'styled-components';

// Conditionally display modal based on error state, passed from parent as 'show' prop
const Modal = styled.div`
  width: 50%;
  height: 70px;
  background: #fff;
  margin: 300px auto;
  text-align: center;
  border: 1px solid #bbb;
  box-shadow: 2px 2px #ccc;
  border-radius: 3px;
  display: ${props => (props.show ? 'block' : 'none')};
`;

export default Modal;
