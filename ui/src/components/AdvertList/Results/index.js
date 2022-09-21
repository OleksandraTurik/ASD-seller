import React from 'react';
import PropTypes from 'prop-types';
import advertsAdapt from 'helpers/advertsAdapt';

// Components
import Loader from 'components/common/Loader';
import Card from 'components/AdvertList/Results/Card';
import NoAdverts from 'components/common/NoAdverts';

// Styles
import { Wrapper, Title } from './styled';

const Results = ({ data, resultAmount, pending }) => {
  let content;

  if (pending) {
    content = (
      <Loader margin="5px 0" left="40%" />
    );
  } else if (data.length <= 0) {
    content = <NoAdverts />;
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
        {advertsAdapt(data).map((e) => (
          <Card key={e.id} body={e} />
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
