import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Loader from '../../common/Loader';
import { Wrapper, Title, LoaderWrapper } from './styled';

const Results = ({ data, resultAmount, pending }) => {
  let content;

  if (pending) {
    content = (
      <LoaderWrapper>
        <Loader margin="0" />
      </LoaderWrapper>
    );
  } else if (data.length <= 0) {
    content = <Title>No items was found</Title>;
  } else {
    content = (
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
    );
  }

  return <Wrapper>{content}</Wrapper>;
};

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
  pending: PropTypes.bool.isRequired,
};

export default Results;
