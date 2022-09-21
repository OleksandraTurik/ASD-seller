import React from 'react';

// Icons
import NotFoundAdverts from 'assets/icons/NotFoundAdverts';

// Styles
import {
  Wrapper,
  Container,
  Title,
} from './styled';

const NoAdverts = () => (
  <Wrapper>
    <Container>
      <NotFoundAdverts
        width="180px"
        height="180px"
      />
      <Title>Щось пішло не так...</Title>
      <span>Оголошень не знайдено</span>
    </Container>
  </Wrapper>
);

export default NoAdverts;
