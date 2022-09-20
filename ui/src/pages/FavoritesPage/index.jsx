/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExactUserInfoThunk } from 'redux/slice/getInfoExactUser';
import useFetchExactAdvert from 'components/hooks/useFetchExactAdvert';
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
  const user = JSON.parse(localStorage.getItem('tokens'));
  const { id } = user.userDto;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExactUserInfoThunk(id));
  }, [id]);

  const exactUserInfo = useSelector(state => state.exactUserInfoSlice);
  const {
    favorites,
  } = exactUserInfo.data;

  const { data, loading, zeroFavorites } = useFetchExactAdvert(favorites);
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
