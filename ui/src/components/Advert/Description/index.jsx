import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  Wrapper,
  Container,
  Line,
  FavoriteBtn,
} from './styled';

const Description = ({
  advertId,
  title,
  date,
  price,
  description,
}) => (
  <Wrapper>
    <Container>
      <span>{`Опубліковано ${date}`}</span>
      <FavoriteBtn advertId={advertId} />
    </Container>
    <span>{title}</span>
    <h2>{price}</h2>
    <h3>Опис</h3>
    <div>{description}</div>
    <Line />
  </Wrapper>
);

Description.propTypes = {
  advertId: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
};

Description.defaultProps = {
  title: '',
  date: '',
  price: '',
  description: '',
};

export default Description;
