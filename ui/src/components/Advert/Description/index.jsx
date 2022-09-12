import React from 'react';
import PropTypes from 'prop-types';

// Icons
import Like from 'assets/icons/Like';

// Styles
import {
  Wrapper,
  Container,
  Line,
  Span,
  FavoriteBtn,
} from './styled';

const Description = ({
  title,
  date,
  price,
  description,
}) => (
  <Wrapper>
    <Container>
      <span>{date}</span>
      <FavoriteBtn>
        <Like
          width="25px"
          height="25px"
          fill="#c6c6c6"
        />
      </FavoriteBtn>
    </Container>
    <Span primary>{title}</Span>
    <h2>{price}</h2>
    <h3>Опис</h3>
    <div>{description}</div>
    <Line />
  </Wrapper>
);

Description.propTypes = {
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
