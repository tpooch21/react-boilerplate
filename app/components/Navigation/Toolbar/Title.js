import styled from 'styled-components';

const Title = styled.h1`
  width: 100%;
  text-align: right;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  margin: 10px -10px;
  font-size: 24px;
  height: 50px;

  @media (max-width: 275px) {
    display: none;
  }

  @media (min-width: 750px) {
    text-align: center;
    font-size: 30px;
    margin: 5px -10px;
  }
`;

export default Title;
