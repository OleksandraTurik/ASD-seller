import React from 'react';
import PropTypes from 'prop-types';
import { URL } from 'API';
import { useNavigate } from 'react-router-dom';
import LikeButton from 'components/common/LikeButton';
import {
  Wrapper,
  InfoWrapper,
  AddressAndTime,
  Title,
  Price,
  ImageContainer,
  Image,
  InfoWrapperSection,
} from './styled';

const Card = ({ body }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/adverts/${body.id}`);
  };

  return (
    <Wrapper onClick={clickHandler}>
      <ImageContainer>
        <Image src={`${URL}/${body.images[0]}`} />
      </ImageContainer>
      <InfoWrapper>
        <InfoWrapperSection>
          <Title>{body.title}</Title>
          <AddressAndTime>
            {body.address.city}
            {', '}
            {body.address.admin_name}
            {' '}
            -
            {' '}
            {body.createdAt}
          </AddressAndTime>
        </InfoWrapperSection>
        <InfoWrapperSection>
          <Price>
            {body.price}
            {' '}
            грн
          </Price>
          <LikeButton advertId={body.id} />
        </InfoWrapperSection>
      </InfoWrapper>
    </Wrapper>
  );
};

Card.propTypes = {
  body: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.shape({
      city: PropTypes.string,
      admin_name: PropTypes.string,
    }),
    createdAt: PropTypes.string,
  }).isRequired,
};

export default Card;
