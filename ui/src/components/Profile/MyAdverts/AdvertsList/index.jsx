import React from 'react';

// Icons
import notFound from 'assets/icons/notFoundIcon.svg';

// Styles
import { Wrapper, Icon, AddAdvertLink } from './styled';

const AdvertsList = () => (
  <Wrapper>
    <Icon src={notFound} />
    <h2>Наразі тут немає оголошень</h2>
    <p>Тут будуть з&apos;являтися ваші нові оголошення</p>
    <AddAdvertLink to="/add">
      Додати оголошення
    </AddAdvertLink>
  </Wrapper>
);

export default AdvertsList;
