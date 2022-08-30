import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  background: #003034;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  text-align: center;
  /* margin-left: 500px; */
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items:center;
  /* margin-right: 500px; */
`;

export const Li = styled.li`
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
