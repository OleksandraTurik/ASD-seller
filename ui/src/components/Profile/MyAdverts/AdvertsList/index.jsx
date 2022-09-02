import React from 'react';
import styled from 'styled-components';

// Components
import AdvertCardList from 'components/Profile/MyAdverts/AdvertsList/AdvertCardList';
import EmptyAdvertsList from 'components/Profile/MyAdverts/AdvertsList/EmptyAdvertsList';

// Images
import bmw from 'assets/img/bmw.webp';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ primary }) => primary ? 'center' : 'flex-start'};
  justify-content: ${({ primary }) => primary ? 'center' : 'flex-start'};
`;

const AdvertsList = () => {
  const isAdvert = true;

  return (
    <div>
      {isAdvert
        ? (
          <Container>
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
          </Container>
        )
        : (
          <Container primary>
            <EmptyAdvertsList />
          </Container>
        )}
    </div>
  );
};

export default AdvertsList;
