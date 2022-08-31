import React from 'react';

// Components
import AdvertCardList from 'components/Profile/MyAdverts/AdvertCardList';

// Icons
import notFound from 'assets/icons/notFoundIcon.svg';

// Images
import bmw from 'assets/img/bmw.webp';

// Styles
import {
  Wrapper,
  Icon,
  AddAdvertLink,
  Container,
} from './styled';

const AdvertsList = () => {
  const isAdvert = true;

  return (
    <Container>
      {isAdvert
        ? (
          <AdvertCardList
            link="/"
            img={bmw}
            name="Книга для розвитку"
            location="Чернівці, Чернівецька область"
            date="31.08.2022 - 31.08.2022"
            price="200 грн."
            category="Хобі, відпочинок і спорт"
            subcategory="Книги / журнали"
            id="ID 761665035"
          />
        )
        : (
          <Wrapper>
            <Icon src={notFound} />
            <h2>Наразі тут немає оголошень</h2>
            <p>Тут будуть з&apos;являтися ваші нові оголошення</p>
            <AddAdvertLink to="/add">
              Додати оголошення
            </AddAdvertLink>
          </Wrapper>
        )}
    </Container>
  );
};

export default AdvertsList;
