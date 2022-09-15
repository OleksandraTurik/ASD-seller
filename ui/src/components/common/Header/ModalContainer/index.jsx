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
import Close from 'assets/icons/Close';
import Plus from 'assets/icons/Plus';
import House from 'assets/icons/House';

// style
import { CloseButton } from 'components/common/Button/styled';
import {
  Container,
  ButtonContainer,
  Ul,
  Li,
  NavLink,
  P,
  LinkContainer,
} from './styled';

const ModalContainer = ({ active, setActive }) => {
  const token = localStorage.getItem('tokens');
  const user = JSON.parse(token);
  const userId = user && user.length !== 0 ? user?.userDto.id : 'guest';
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/login', { replace: true });
  };

  return (
    <Modal active={active} setActive={setActive}>
      <Container>
        <ButtonContainer>
          <CloseButton onClick={() => setActive(!active)}>
            <Close width="20px" height="20px" fill="#fff" />
          </CloseButton>
        </ButtonContainer>
        <Ul>
          <Li>
            <NavLink to="/">
              <LinkContainer>
                <House
                  width="25px"
                  height="25px"
                  fill="#fff"
                />
                <P>Головна сторінка</P>
              </LinkContainer>
            </NavLink>
          </Li>
          {token
            ? (
              <>
                <Li>
                  <NavLink to="/favorites">
                    <LinkContainer>
                      <Like
                        width="25px"
                        height="25px"
                        fill="#fff"
                      />
                      <P>Обране</P>
                    </LinkContainer>
                  </NavLink>
                </Li>
                <Li>
                  <NavLink to="/add">
                    <LinkContainer>
                      <Plus
                        width="25px"
                        height="25px"
                        fill="#fff"
                      />
                      <P>Додати оголошення</P>
                    </LinkContainer>
                  </NavLink>
                </Li>
                <Li>
                  <NavLink to={`/profiles/${userId}/adverts`}>
                    <LinkContainer>
                      <User
                        width="25px"
                        height="25px"
                        fill="#fff"
                      />
                      <P>Профіль</P>
                    </LinkContainer>
                  </NavLink>
                </Li>
              </>
            )
            : null}
          {!token
            ? (
              <Li>
                <NavLink to="/login">
                  <LinkContainer>
                    <Login
                      width="25px"
                      height="25px"
                      fill="#fff"
                    />
                    <P>Зареєструватися / Увійти</P>
                  </LinkContainer>
                </NavLink>
              </Li>
            )
            : (
              <Li>
                <NavLink
                  onClick={logout}
                  to="/login"
                >
                  <LinkContainer>
                    <Logout
                      width="25px"
                      height="25px"
                      fill="#fff"
                    />
                    <P>Вийти</P>
                  </LinkContainer>
                </NavLink>
              </Li>
            )}
        </Ul>
      </Container>
    </Modal>
  );
};

ModalContainer.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default ModalContainer;