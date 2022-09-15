import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  background: ${props => props.theme.mainGreenColor};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  height: 68px;
  max-width: 1238px;
  justify-content: space-between;
  margin: 0 auto;
`;

export const NavLinkHeader = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;
