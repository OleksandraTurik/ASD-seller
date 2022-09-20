import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// Components
import Loader from 'components/common/Loader';
import AdvertCardList from '../AdvertCardList';
import EmptyAdvertsList from '../EmptyAdvertsList';

const AdvertsCard = ({
  list = [],
  error, loading,
}) => {
  if (loading) {
    return <Loader />;
  }

  return (
    !error && list.length ? list?.map((item) => (
      <AdvertCardList
        key={item._id}
        id={item._id}
        link={`/adverts/${item._id}`}
        img={item.images[0]}
        name={item.title}
        location={`${item.address.city}, ${item.address.admin_name}`}
        date={moment(item.createdAt).format('MM-DD-YYYY')}
        price={`${item.price} грн.`}
        category={item.category.name}
        subcategory={item.category.child.name}
      />
    )) : <EmptyAdvertsList />
  );
};

AdvertsCard.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
  error: PropTypes.bool,
  loading: PropTypes.bool,
};

AdvertsCard.defaultProps = {
  list: [],
  error: false,
  loading: true,
};

export default AdvertsCard;
