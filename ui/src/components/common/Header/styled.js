import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from 'assets/img/logo/logo.png';

export const Container = styled.header`
  width: calc(100% - 40px);
  padding: 0 20px;
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
  //width: 200px;
  overflow: hidden;
  object-position: center;
`;

export const LogoImg = styled.img.attrs({
  src: logo,
  alt: 'логотип',
  width: 55,
  height: 55,
})`
`;
