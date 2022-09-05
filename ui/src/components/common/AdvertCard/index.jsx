import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  ImgInCard,
  NameOfProduct,
  Info,
  Price,
  ToFavoriteButton,
} from 'components/common/AdvertCard/styled';

import favButtonIcon from 'assets/icons/toFavoriteButton.svg';
import { Link, useNavigate } from 'react-router-dom';
import { getAdvertThunk } from 'redux/slice/getAdvert';
import { ButtonAdvertCard } from '../Button/styled';

const AdvertCard = ({
  id,
  link,
  img,
  name,
  location,
  date,
  price,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const advert = useSelector(state => state.getAdvert);

  const handleNavigate = async () => {
    await dispatch(getAdvertThunk(id));
    navigate(`${link}`);
  };

  return (
    <Card>
      <ImgInCard src={img} />
      <div>
        <ButtonAdvertCard onClick={handleNavigate}>
          <NameOfProduct>{name}</NameOfProduct>
        </ButtonAdvertCard>
      </div>
      <Info>
        <span>{location}</span>
        <span>&nbsp;-&nbsp;</span>
        <span>{date}</span>
      </Info>
      <Price>{price}</Price>
      <ToFavoriteButton src={favButtonIcon} alt="To Favorite Button" width="29px" />
    </Card>
  );
};

AdvertCard.propTypes = {
  id: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.number,
};

AdvertCard.defaultProps = {
  id: '',
  link: '',
  img: '',
  name: '',
  location: '',
  date: '',
  price: 0,
};

export default AdvertCard;
