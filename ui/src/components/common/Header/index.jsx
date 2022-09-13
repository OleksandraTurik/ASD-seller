import React from 'react';
import { useNavigate } from 'react-router-dom';

// Icons
import Logo from 'assets/icons/Logo';
import Like from 'assets/icons/Like';
import Login from 'assets/icons/Login';
import Logout from 'assets/icons/Logout';
import User from 'assets/icons/User';

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

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('tokens');
  const user = JSON.parse(token);
  const userId = user ?? user?.userDto.id;

  const logout = () => {
    localStorage.clear();
    navigate('/login', { replace: true });
  };

  return (
    <Container>
      <Nav>
        <NavLinkHeader to="/">
          <Logo
            width="250px"
            fill="#fff"
          />
        </NavLinkHeader>
        <Ul>
          {token
            ? (
              <>
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
                  <NavLink to={`/profiles/${userId}/adverts`}>
                    <User
                      width="25px"
                      height="25px"
                      fill="#fff"
                    />
                  </NavLink>
                </Li>
              </>
            )
            : null}
          {!token
            ? (
              <Li>
                <NavLink to="/login">
                  <Login
                    width="25px"
                    height="25px"
                    fill="#fff"
                  />
                </NavLink>
              </Li>
            )
            : (
              <Li>
                <NavLink
                  onClick={logout}
                  to="/login"
                >
                  <Logout
                    width="25px"
                    height="25px"
                    fill="#fff"
                  />
                </NavLink>
              </Li>
            )}
        </Ul>
      </Nav>
    </Container>
  );
};
export default Header;
