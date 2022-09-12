import React from 'react';
import apiUserService from 'services/authServices';
// Icons
import Logo from 'assets/icons/Logo';
import Like from 'assets/icons/Like';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/slice/authUser';
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
  const activated = useSelector(state => state.userReducer.user.id);
  const dispatch = useDispatch();
  console.log(activated)
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
            {activated ? <NavLink to="/login" onClick={() => dispatch(logout())}>Logout</NavLink> : <NavLink to="/login">Login</NavLink>}
          </Li>
        </Ul>
      </Nav>
    </Container>
  );
};
export default Header;
