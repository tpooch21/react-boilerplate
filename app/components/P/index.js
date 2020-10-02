import styled from 'styled-components';

const P = styled.p`
  color: ${props => (props.invalid ? 'red' : '#aaa')};
  border-bottom: 1px dotted #ccc;
  margin: 0 10px;

  @media (min-width: 750px) {
    margin: auto;
  }
`;

export default P;
