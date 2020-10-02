import styled from 'styled-components';

const StringGridWrapper = styled.div`
  width: 60%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media (min-width: 650px) {
    .stringGridWrapper {
      width: 80%;
    }
  }

  @media (min-width: 750px) {
    .stringGridWrapper {
      width: 600px;
    }
  }
`;

export default StringGridWrapper;
