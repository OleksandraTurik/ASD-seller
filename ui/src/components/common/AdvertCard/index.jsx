import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// Icons
import Like from 'assets/icons/Like';

import { useNavigate } from 'react-router-dom';
import { getAdvertThunk } from 'redux/slice/getAdvert';
import { ButtonAdvertCard } from 'components/common/Button/styled';

import {
  Card,
  ImgInCard,
  NameOfProduct,
  Info,
  Price,
  ToFavoriteButton,
} from './styled';

const AdvertCard = ({
  itemId,
  link,
  img,
  name,
  location,
  date,
  price,
}) => {
  const navigate = useNavigate();

  const handleNavigate = async () => {
    navigate(`/adverts/${itemId}`);
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
      <ToFavoriteButton>
        <Like
          width="29px"
          fill="#c6c6c6"
        />
      </ToFavoriteButton>
    </Card>
  );
};

AdvertCard.propTypes = {
  itemId: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
};

AdvertCard.defaultProps = {
  itemId: '',
  link: '',
  img: '',
  name: '',
  location: '',
  date: '',
  price: '',
};

export default AdvertCard;
