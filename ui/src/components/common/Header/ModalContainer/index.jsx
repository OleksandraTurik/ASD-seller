import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// components
import Modal from 'components/common/Modal';

// assets
import Like from 'assets/icons/Like';
import User from 'assets/icons/User';
import Login from 'assets/icons/Login';
import Logout from 'assets/icons/Logout';

// style
import {
  Ul,
  Li,
  A,
  NavLinkAdverts,
  NavLink,
} from './styled';

const ModalContainer = ({ active, setActive }) => {
  const token = localStorage.getItem('tokens');
  const user = JSON.parse(token);
  const userId = user && user.length !== 0 ? user?.userDto.id : 'guest';
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate('/login', { replace: true });
  };

  return (
    <Modal active={active} setActive={setActive}>
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
        {token
          ? (
            <Li>
              <NavLinkAdverts to="/add">Додати оголошення</NavLinkAdverts>
            </Li>
          )
          : (
            <Li>
              <NavLinkAdverts to="/login">Додати оголошення</NavLinkAdverts>
            </Li>
          )}
        <Li>
          <NavLink to={`/profiles/${userId}/adverts`}>
            <User
              width="25px"
              height="25px"
              fill="#fff"
            />
          </NavLink>
        </Li>
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
                onClick={logOut}
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
    </Modal>
  );
};

ModalContainer.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default ModalContainer;
