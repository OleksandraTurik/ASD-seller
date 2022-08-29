import React from 'react';
import Button from '../Button';
import Like from './Like';
import Logo from './Logo';
import {
  Nav,
  Ul,
  Li,
  A,
  Container,
  NavLink,
  NavLinkHeader,
} from './styled';

const Header = () => (
  <Container>
    <Nav>
      <NavLinkHeader to="/">
        <Logo>
          ASD.seller
        </Logo>
      </NavLinkHeader>
      <Ul>
        <Li>
          <A href="*"><Like /></A>
        </Li>
        <Li>
          <Button>Додати оголошення</Button>
        </Li>
        <Li>
          <NavLink to="/login">Login</NavLink>
        </Li>
      </Ul>
    </Nav>
  </Container>
);

export default Header;
