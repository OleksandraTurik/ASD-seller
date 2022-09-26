/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import useFetchFavorites from 'hooks/useFetchFavorites';
import Loader from 'components/common/Loader';
import AdvertCard from 'components/common/AdvertCard';
import { URL } from 'API';
import moment from 'moment/moment';

// Images
import DontHaveFavoritesAdvImg from 'assets/img/DontHaveFavoritesAdv.jsx';

// Styles
import {
  Wrapper,
  Wrapper2,
  TitleArea,
  Title,
  AdvertsArea,
  DontHaveFavoritesAdvBlock,
  DontHaveFavoritesAdvTitle,
  DontHaveFavoritesAdvText,
  AdvertsList,
} from './styled';

const FavoritesPage = () => {
  const { favorites } = useSelector(state => state.exactUserInfoSlice.data);
  const { data, loading, zeroFavorites } = useFetchFavorites(favorites);
  return (
    <>
      <TitleArea>
        <Wrapper>
          <Title>Обрані оголошення</Title>
        </Wrapper>
      </TitleArea>
      <AdvertsArea>
        <Wrapper>
          <AdvertsList>
            {loading
              ? <Loader /> : zeroFavorites === true
                ? (
                  <Wrapper2>
                    <DontHaveFavoritesAdvBlock>
                      <DontHaveFavoritesAdvImg />
                      <DontHaveFavoritesAdvTitle>
                        Немає обраних оголошень
                      </DontHaveFavoritesAdvTitle>
                      <DontHaveFavoritesAdvText>
                        Додати в обране можна зі сторінки оголошення або зі сторінки списку оголошень
                      </DontHaveFavoritesAdvText>
                    </DontHaveFavoritesAdvBlock>
                  </Wrapper2>
                ) : data.map(el => (
                  <AdvertCard
                    key={el._id}
                    itemId={el._id}
                    img={`${URL}/${el.images[0]}`}
                    name={el.title}
                    location={`${el.address.city}, ${el.address.admin_name}`}
                    date={moment(el.createdAt).format('DD.MM.YYYY HH:mm')}
                    price={`${el.price} грн`}
                  />
                ))}
          </AdvertsList>
        </Wrapper>
      </AdvertsArea>
    </>
  );
};

export default FavoritesPage;
