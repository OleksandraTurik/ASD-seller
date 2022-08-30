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

import favButtonIcon from 'assets/icons/toFavoriteButton.svg';

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
    <ToFavoriteButton src={favButtonIcon} alt="To Favorite Button" width="29px" />
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
