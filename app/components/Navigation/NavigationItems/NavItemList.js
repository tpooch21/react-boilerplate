import styled from 'styled-components';

export const NavItemList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: ${props => (props.side ? 'column' : 'row')};
  align-items: ${props => (props.side ? 'flex-start' : 'center')};
  width: auto;
`;
