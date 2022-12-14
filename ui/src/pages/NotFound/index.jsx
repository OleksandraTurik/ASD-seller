/* eslint-disable react/prop-types */
import React from 'react';

// Icons
import cat from 'assets/icons/cat.svg';
import NotFoundAdverts from 'assets/icons/NotFoundAdverts';

// Styles
import PropTypes from 'prop-types';
import {
  Wrapper,
  Icon,
  GoHomeLink,
  Container,
  Title,
} from './styled';

const NotFound = ({ activeEmail }) => (
  <Wrapper>
    <Container>
      {activeEmail ? <NotFoundAdverts width={200} /> : <Icon src={cat} alt="cat icon" />}
      <Title>{activeEmail ? 'Активуйте ваш профіль, лінк з активацією надіслано Вам на пошту' : 'Сторінку не знайдено'}</Title>
      <GoHomeLink to="/">На головну</GoHomeLink>
    </Container>
  </Wrapper>
);

NotFound.propTypes = {
  activeEmail: PropTypes.bool,
};
NotFound.defaultProps = {
  activeEmail: false,
};
export default NotFound;
