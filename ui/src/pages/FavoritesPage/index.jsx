import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExactUserInfoThunk } from 'redux/slice/getInfoExactUser';

// Images
import DontHaveFavoritesAdvImg from 'assets/img/DontHaveFavoritesAdv.jsx';

// Styles
import {
  Wrapper,
  TitleArea,
  Title,
  AdvertsArea,
  DontHaveFavoritesAdvBlock,
  DontHaveFavoritesAdvTitle,
  DontHaveFavoritesAdvText,
} from './styled';

const FavoritesPage = () => {
  const user = JSON.parse(localStorage.getItem('tokens'));
  const { id } = user.userDto;
  const exactUserInfo = useSelector(state => state.exactUserInfoSlice);
  const {
    favorites,
  } = exactUserInfo.data;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExactUserInfoThunk(id));
  }, [id]);
  return (
    <>
      <TitleArea>
        <Wrapper>
          <Title>Обрані оголошення</Title>
        </Wrapper>
      </TitleArea>
      <AdvertsArea>
        <Wrapper>
          <DontHaveFavoritesAdvBlock>
            {favorites}
            <DontHaveFavoritesAdvImg />
            <DontHaveFavoritesAdvTitle>
              Немає обраних оголошень
            </DontHaveFavoritesAdvTitle>
            <DontHaveFavoritesAdvText>
              Додати в обране можна зі сторінки оголошення або зі сторінки списку оголошень
            </DontHaveFavoritesAdvText>
          </DontHaveFavoritesAdvBlock>
        </Wrapper>
      </AdvertsArea>
    </>
  );
};

export default FavoritesPage;
