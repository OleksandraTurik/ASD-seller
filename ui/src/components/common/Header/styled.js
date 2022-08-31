import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  background: #003034;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  height: 68px;
  max-width: 1238px;
  justify-content: space-between;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  text-align: center;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items:center;
`;

export const Li = styled.li`
  list-style-type: none;
  font-size: 20px;
  margin-left: 20px;
  display: flex;
  align-self: center;
`;

export const A = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const NavLinkAdverts = styled(Link)`
  display: flex;
  align-items: center;
  padding: 5px 10px 5px 10px;
  text-decoration: none;
  cursor: pointer;
  background: #fff;
  border-radius: 5px;
  color: #003034;
  font-weight: 600;
  font-size: 14px;
  border: 5px solid #fff;
  transition: all 200ms linear;
  height: 25px;
  &:hover {
    background: #003034;
    color: #fff;
    transition: all 200ms linear;
  }
`;

export const NavLinkHeader = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;
