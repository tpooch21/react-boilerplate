import styled from 'styled-components';

const MenuIcon = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  margin-left: 10px;

  & > div {
    width: 90%;
    height: 3px;
    background-color: black;
  }

  @media (min-width: 750px) {
    display: none;
  }
`;

export default MenuIcon;
