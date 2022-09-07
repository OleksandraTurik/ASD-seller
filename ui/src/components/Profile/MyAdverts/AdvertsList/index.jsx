import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdvertsInfo } from 'redux/slice/getAdvertInfo';
import styled from 'styled-components';

// Components
import AdvertCardList from 'components/Profile/MyAdverts/AdvertsList/AdvertCardList';
import EmptyAdvertsList from 'components/Profile/MyAdverts/AdvertsList/EmptyAdvertsList';

// Images
import bmw from 'assets/img/bmw.webp';

// Styles
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ primary }) => primary ? 'center' : 'flex-start'};
  justify-content: ${({ primary }) => primary ? 'center' : 'flex-start'};
`;

const AdvertsList = () => {
  const isAdvert = true;
  const { data, loading, error } = useSelector((state) => state.userAdvertInfoReducer);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('tokens'));

  useEffect(() => {
    dispatch(getAdvertsInfo(user.userDto.id));
  }, []);

  const advertsCard = () => {
    if (error) {
      return 'error';
    }

    if (loading) {
      return 'loading';
    }

    return data.length
      ? data.map((item) => (
        <AdvertCardList
          key={item._id}
          link="/"
          img={bmw}
          name={item.title}
          location={item.address}
          date={item.createdAt}
          price={`${item.price} грн.`}
          category="Хобі, відпочинок і спорт"
          subcategory="Книги / журнали"
        />
      ))
      : null;
  };

  console.log(data);

  return (
    <div>
      {isAdvert
        ? (
          <Container>
            {
              advertsCard()
            }
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
