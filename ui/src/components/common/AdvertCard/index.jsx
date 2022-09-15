import React from 'react';
import PropTypes from 'prop-types';
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
import { ButtonAdvertCard } from '../Button/styled';

const AdvertCard = ({
  itemId,
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
  img: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
};

AdvertCard.defaultProps = {
  itemId: '',
  img: '',
  name: '',
  location: '',
  date: '',
  price: '',
};

export default AdvertCard;
