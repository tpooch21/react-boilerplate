import styled from 'styled-components';

export const NavItem = styled.li`
  margin: ${props => (props.side ? '5px 0' : '0 5px')};
  background-color: ${props => (props.side ? '#cc99ff' : 'black')};
  color: ${props => (props.side ? 'black' : 'white')};
  padding: 5px 5px;
  border-radius: 3px;
`;
