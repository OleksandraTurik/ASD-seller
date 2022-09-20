import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
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
      <ToFavoriteButton advertId={itemId} />
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
