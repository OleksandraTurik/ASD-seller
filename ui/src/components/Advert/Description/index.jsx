import React from 'react';
import PropTypes from 'prop-types';

// Icons
import heart from 'assets/icons/toFavoriteButton.svg';

// Styles
import {
  Wrapper,
  Icon,
  Container,
  Line,
  Span,
} from './styled';

const Description = ({
  title,
  date,
  price,
  status,
  state,
  description,
  id,
}) => (
  <Wrapper>
    <Container>
      <span>{date}</span>
      <Icon src={heart} alt="heart icon" />
    </Container>
    <Span primary>{title}</Span>
    <h2>{price}</h2>
    <Container>
      <ul>
        <li>
          <p>
            <Span>{status}</Span>
          </p>
        </li>
        <li>
          <p>
            <Span>{state}</Span>
          </p>
        </li>
      </ul>
    </Container>
    <h3>Опис</h3>
    <p>{description}</p>
    <Line />
    <span>{id}</span>
  </Wrapper>
);

Description.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
  status: PropTypes.string,
  state: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
};

Description.defaultProps = {
  title: '',
  date: '',
  price: '',
  status: '',
  state: '',
  description: '',
  id: '',
};

export default Description;
