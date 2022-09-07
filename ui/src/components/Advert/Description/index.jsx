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
  status,
  state,
  description,
  id,
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
  price: PropTypes.number,
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
