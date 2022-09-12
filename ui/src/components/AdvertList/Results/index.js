import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { Wrapper, Title } from './styled';

const Results = ({ data, resultAmount }) => (
  <Wrapper>
    {data.length <= 0 ? (
      <Title>No items was found</Title>
    ) : (
      <>
        <Title>
          Ми знайшли
          {' '}
          {resultAmount}
          {' '}
          оголошень
        </Title>
        {data.map((e) => (
          <Card key={e._id} body={e} />
        ))}
      </>
    )}
  </Wrapper>
);

Results.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      images: PropTypes.arrayOf(PropTypes.string),
      address: PropTypes.shape({
        city: PropTypes.string,
      }),
      createdAt: PropTypes.string,
    }),
  ).isRequired,
  resultAmount: PropTypes.number.isRequired,
};

export default Results;
