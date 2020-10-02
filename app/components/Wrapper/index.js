import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 3vw;

  @media (min-width: 750px) {
    font-size: 1.1rem;
  }
`;

export default Wrapper;
