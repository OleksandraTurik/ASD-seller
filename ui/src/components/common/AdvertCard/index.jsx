import React from 'react';
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

// Icons
import Like from 'assets/icons/Like';

import { useNavigate } from 'react-router-dom';
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
    navigate(`${link}`, { state: advert });
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
