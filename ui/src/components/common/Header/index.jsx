import React from 'react';
import Button from '../Button';
import Like from './Like';
import {
  Nav,
  Ul,
  Li,
  A,
  Container,
  NavLink,
  NavLinkHeader,
} from './styled';
import Logo from '../../../assets/icons/Logo';

const Header = () => (
  <Container>
    <Nav>
      <NavLinkHeader to="/">
        <Logo
          width={250}
          fill="white"
        />
      </NavLinkHeader>
      <Ul>
        <Li>
          <A href="*"><Like /></A>
        </Li>
        <Li>
          <Button to="/add">Додати оголошення</Button>
        </Li>
        <Li>
          <NavLink to="/login">Login</NavLink>
        </Li>
      </Ul>
    </Nav>
  </Container>
);

export default Header;
