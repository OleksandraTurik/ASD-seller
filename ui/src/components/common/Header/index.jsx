import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  const [link, setLink] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    if (link !== pathname) {
      setLink(pathname);
      setActive(false);
    }
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 864px)').matches) {
        setActive(false);
      }
    });
  }, []);

  return (
    <Container>
      <Nav>
        <NavLinkHeader to="/">
          <Logo
            width="250px"
            fill="#fff"
          />
        </NavLinkHeader>
        <RightNav setActive={setActive} />
      </Nav>
      <ModalContainer active={active} setActive={setActive} />
    </Container>
  );
};
export default Header;
