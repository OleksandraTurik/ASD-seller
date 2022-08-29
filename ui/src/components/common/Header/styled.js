import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  background: #003034;
  height: 68px;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 0;
  width: 60%;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items:center;
  width: 30%;
`;

export const Li = styled.li`
  margin-right: 3%;
  list-style-type: none;
  font-size: 20px;
  margin-left: 20px;
`;

export const A = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const NavLinkHeader = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;
