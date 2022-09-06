import React from 'react';

// Icons
import Logo from 'assets/icons/Logo';
import Like from 'assets/icons/Like';

// Styles
import {
  Nav,
  Ul,
  Li,
  A,
  Container,
  NavLink,
  NavLinkAdverts,
  NavLinkHeader,
} from './styled';

const Header = () => (
  <Container>
    <Nav>
      <NavLinkHeader to="/">
        <Logo
          width="250px"
          fill="#fff"
        />
      </NavLinkHeader>
      <Ul>
        <Li>
          <A href="*">
            <Like
              width="25px"
              height="25px"
              fill="#fff"
            />
          </A>
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
