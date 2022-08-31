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
            link="https://www.google.com.ua/"
            img={bmw}
            name="столбики б.у стовпчики сітка рябиця Відбірні з Доставкою по Україні"
            location="Івано-Франківськ"
            date="Сьогодні 11:22"
            price="56 грн."
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
