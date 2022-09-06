import React from 'react';

// Icons
import IconNotFound from 'assets/icons/NotFoundAdverts';

// Styles
import { Wrapper, AddAdvertLink } from './styled';

const AdvertsList = () => (
  <Wrapper>
    <IconNotFound
      width="180px"
      height="180px"
    />
    <h2>Наразі тут немає оголошень</h2>
    <p>Тут будуть з&apos;являтися ваші нові оголошення</p>
    <AddAdvertLink to="/add">
      Додати оголошення
    </AddAdvertLink>
  </Wrapper>
);

export default AdvertsList;
