import React from 'react';
import PropTypes from 'prop-types';

// Icons
import Like from 'assets/icons/Like';

// Styles
import {
  Card,
  ImgInCard,
  NameOfProduct,
  Info,
  Price,
  ToFavoriteButton,
} from 'components/common/AdvertCard/styled';

const AdvertCard = ({
  link,
  img,
  name,
  location,
  date,
  price,
}) => (
  <Card>
    <ImgInCard src={img} />
    <div>
      <a href={link}>
        <NameOfProduct>{name}</NameOfProduct>
      </a>
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

AdvertCard.propTypes = {
  link: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
};

AdvertCard.defaultProps = {
  link: '',
  img: '',
  name: '',
  location: '',
  date: '',
  price: '',
};

export default AdvertCard;
