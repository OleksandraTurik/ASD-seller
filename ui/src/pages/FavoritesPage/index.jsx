import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from 'components/common/Loader';

// Slices
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
  const exactUserInfo = useSelector(state => state.exactUserInfoSlice);
  const {
    favorites,
  } = exactUserInfo.data;

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExactUserInfoThunk(id));
    console.log(exactUserInfo.data);
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
            <DontHaveFavoritesAdvImg />
            <DontHaveFavoritesAdvTitle>
              Немає обраних оголошень
              {favorites}
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
