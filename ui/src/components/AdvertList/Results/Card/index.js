import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Like from 'assets/icons/Like';
import {
  Wrapper,
  InfoWrapper,
  AddressAndTime,
  Title,
  Price,
  ImageContainer,
  Image,
  LikeButton,
  InfoWrapperSection,
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
        <InfoWrapperSection>
          <Title>{body.title}</Title>
          <AddressAndTime>
            {body.address.city}
            {' '}
            -
            {body.createdAt}
          </AddressAndTime>
        </InfoWrapperSection>
        <InfoWrapperSection>
          <Price>
            {body.price}
            {' '}
            грн
          </Price>
          <LikeButton>
            <Like />
          </LikeButton>
        </InfoWrapperSection>
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
