import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'components/common/Modal';

// Icons
import Logo from 'assets/icons/Logo';

// Styles
import {
  Nav,
  Container,
  NavLinkHeader,
} from './styled';
import RightNav from './RightNav';
import ModalContainer from './ModalContainer';

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <Nav>
        <NavLinkHeader to="/">
          <Logo
            width="250px"
            fill="#fff"
          />
        </NavLinkHeader>
        <RightNav setActive={setActive} active={active} />
      </Nav>
      <ModalContainer active={active} setActive={setActive} />
    </Container>
  );
};
export default Header;
