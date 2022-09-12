import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Like from 'assets/icons/Like';
import {
  Wrapper,
  InfoWrapper,
  TitlePriceWrapper,
  AddressButtonWrapper,
  AddressAndTime,
  Title,
  Price,
  ImageContainer,
  Image,
  LikeButton,
} from './styled';

const Card = ({ body }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/adverts/${body._id}`);
  };

  return (
    <Wrapper onClick={clickHandler}>
      <ImageContainer>
        <Image src={`http://localhost:4000/${body.images[0]}`} />
      </ImageContainer>
      <InfoWrapper>
        <TitlePriceWrapper>
          <Title>{body.title}</Title>
          <Price>
            {body.price}
            {' '}
            грн
          </Price>
        </TitlePriceWrapper>
        <AddressButtonWrapper>
          <AddressAndTime>
            {body.address.city}
            {' '}
            -
            {body.createdAt}
          </AddressAndTime>
          <LikeButton>
            <Like />
          </LikeButton>
        </AddressButtonWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

Card.propTypes = {
  body: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.shape({
      city: PropTypes.string,
    }),
    createdAt: PropTypes.string,
  }).isRequired,
};

export default Card;
