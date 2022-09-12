import React from 'react';

// Icons
import IconNotFound from 'assets/icons/NotFoundAdverts';

// Components
import { Wrapper, AddAdvertLink } from './styled';

const EmptyAdvertsList = () => {
  const isLogged = localStorage.getItem('tokens');
  return (
    <Wrapper>
      <IconNotFound
        width="180px"
        height="180px"
      />
      <h2>Наразі тут немає оголошень</h2>
      <p>Тут будуть з&apos;являтися ваші нові оголошення</p>
      {isLogged
        ? (
          <AddAdvertLink to="/add" disabled={isLogged}>
            Додати оголошення
          </AddAdvertLink>
        )
        : (
          <AddAdvertLink to="/login">
            Додати оголошення
          </AddAdvertLink>
        )}
    </Wrapper>
  );
};

export default EmptyAdvertsList;
