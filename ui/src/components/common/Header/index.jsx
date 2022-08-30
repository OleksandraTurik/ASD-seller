import React from 'react';
import Like from './Like';
import Logo from './Logo';
import {
  Nav,
  Ul,
  Li,
  A,
  Container,
  NavLink,
  NavLinkAdverts,
  NavLinkHeader,
  HeaderContainer,
} from './styled';

const Header = () => (
  <Container>
    <Nav>
      <HeaderContainer>
        <NavLinkHeader to="/">
          <Logo>
            ASD.seller
          </Logo>
        </NavLinkHeader>
      </HeaderContainer>
      <Ul>
        <Li>
          <A href="*"><Like /></A>
        </Li>
        <Li>
          <NavLinkAdverts to="/add">Додати оголошення</NavLinkAdverts>
        </Li>
        <Li>
          <NavLink to="/login">Login</NavLink>
        </Li>
      </Ul>
    </Nav>
  </Container>
);

export default Header;
