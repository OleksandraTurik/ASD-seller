import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutExactUser } from 'redux/slice/getInfoExactUser';
import Like from 'assets/icons/Like';
import Login from 'assets/icons/Login';
import Logout from 'assets/icons/Logout';
import User from 'assets/icons/User';

import {
  Ul,
  Li,
  A,
  NavLink,
  NavLinkAdverts,
} from './styled';

const Desktop = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('tokens');
  const user = JSON.parse(token);
  const userId = user ? user?.userDto?.id : null;
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.clear();
    dispatch(logoutExactUser());
    navigate('/login', { replace: true });
  };

  return (
    <Ul>
      {token
        ? (
          <>
            <Li>
              <NavLink to="/favorites">
                <Like
                  width="25px"
                  height="25px"
                  fill="#fff"
                />
              </NavLink>
            </Li>
            <Li>
              <NavLinkAdverts to="/add">Додати оголошення</NavLinkAdverts>
            </Li>
            <Li>
              <NavLink to="/profile/adverts">
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
  );
};

export default Desktop;
