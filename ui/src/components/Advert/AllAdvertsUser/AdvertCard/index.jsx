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
  margin,
}) => (
  <Card margin={margin}>
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
      <ToFavoriteButton>
        <Like
          width="29px"
          fill="#c6c6c6"
        />
      </ToFavoriteButton>
    </Wrap>
  </Card>
);

AdvertCard.propTypes = {
  link: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
  margin: PropTypes.string,
};

AdvertCard.defaultProps = {
  link: '',
  img: '',
  name: '',
  location: '',
  date: '',
  price: '',
  margin: '',
};

export default AdvertCard;
