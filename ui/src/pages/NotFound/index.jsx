import React from 'react';

// Icons
import cat from 'assets/icons/cat.svg';

// Styles
import {
  Wrapper,
  Icon,
  Button,
  Container,
} from './styled';

const NotFound = () => (
  <Wrapper>
    <Container>
      <Icon src={cat} />
      <h1>Сторінку не знайдено</h1>
      <p>Сторінку не знайдено</p>
      <Button type="button">На головну</Button>
    </Container>
  </Wrapper>
);

export default NotFound;
