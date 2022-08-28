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
} from './styled';

const Header = () => (
  <Container>
    <Nav>
      <Logo>
        logo
      </Logo>
      <Ul>
        <Li>
          <A href="*"><Like /></A>
        </Li>
        <Li>
          <Button>Додати оголошення</Button>
        </Li>
        <Li>
          <A href="*">login</A>
        </Li>
      </Ul>
    </Nav>
  </Container>
);

export default Header;
