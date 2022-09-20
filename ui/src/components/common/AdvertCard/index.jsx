import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// Icons
import Like from 'assets/icons/Like';

// Styles
import { ButtonAdvertCard } from 'components/common/Button/styled';
import {
  Card,
  ImgInCard,
  NameOfProduct,
  Info,
  Price,
  ToFavoriteButton,
  ImageWrap,
  Wrap,
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
      <ImageWrap>
        <ImgInCard src={img} />
      </ImageWrap>
      <div>
        <ButtonAdvertCard onClick={handleNavigate}>
          <NameOfProduct>{name}</NameOfProduct>
        </ButtonAdvertCard>
      </div>
      <Wrap>
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
      </Wrap>
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
