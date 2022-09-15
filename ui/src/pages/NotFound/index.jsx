import React from 'react';

// Icons
import cat from 'assets/icons/cat.svg';

// Styles
import PropTypes from 'prop-types';
import {
  Wrapper,
  Icon,
  GoHomeLink,
  Container,
} from './styled';
import NotFoundAdverts from '../../assets/icons/NotFoundAdverts';

const NotFound = ({ activeEmail }) => (
  <Wrapper>
    <Container>
      {activeEmail ? <NotFoundAdverts width={200} /> : <Icon src={cat} alt="cat icon" />}
      <h1>{activeEmail ? 'Активуйте ваш профіль, лінк з активацією надіслано Вам на почту' : 'Сторінку не знайдено'}</h1>
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
