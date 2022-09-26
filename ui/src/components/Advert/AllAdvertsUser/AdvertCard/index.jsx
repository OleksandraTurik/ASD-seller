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
  ImageWrap,
  Wrap,
  LinkAdvertCard,
} from './styled';

const AdvertCard = ({
  link,
  img,
  name,
  location,
  date,
  price,
  itemId,
}) => (
  <Card>
    <ImageWrap>
      <ImgInCard src={img} />
    </ImageWrap>
    <div>
      <LinkAdvertCard to={link}>
        <NameOfProduct>{name}</NameOfProduct>
      </LinkAdvertCard>
    </div>
    <Wrap>
      <Info>
        <span>{location}</span>
        <span>&nbsp;-&nbsp;</span>
        <span>{date}</span>
      </Info>
      <Price>{price}</Price>
      <ToFavoriteButton advertId={itemId} />
    </Wrap>
  </Card>
);

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
