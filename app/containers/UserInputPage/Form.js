import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;

  @media (min-width: 750px) {
    width: 270px;
  }
`;
