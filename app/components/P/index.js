import styled from 'styled-components';

const P = styled.p`
  color: ${props => (props.invalid ? 'red' : '#aaa')};
  border-bottom: 1px dotted #ccc;
`;

export default P;
