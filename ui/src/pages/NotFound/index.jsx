import React from 'react';

// Icons
import cat from 'assets/icons/cat.svg';

// Styles
import {
  Wrapper,
  Icon,
  GoHomeLink,
  Container,
} from './styled';

const NotFound = () => (
  <Wrapper>
    <Container>
      <Icon src={cat} alt="cat icon" />
      <h1>Сторінку не знайдено</h1>
      <GoHomeLink to="/">На головну</GoHomeLink>
    </Container>
  </Wrapper>
);

export default NotFound;
