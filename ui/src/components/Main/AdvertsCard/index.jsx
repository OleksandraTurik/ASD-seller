import React from 'react';
import PropTypes from 'prop-types';
import { URL } from 'API';

// Components
import AdvertCard from 'components/common/AdvertCard';
import Loader from 'components/common/Loader';
import NoAdverts from 'components/common/NoAdverts';

// Helpers
import advertsAdapt from 'helpers/advertsAdapt';

const AdvertsCard = ({ errorAdvert, loadingAdvert, advertInfo }) => {
  if (errorAdvert) {
    return <NoAdverts />;
  }

  if (loadingAdvert) {
    return <Loader margin="0" left="0%" />;
  }

  return advertsAdapt(advertInfo).map((item) => (
    <AdvertCard
      key={item.id}
      itemId={item.id}
      img={`${URL}/${item.images[0]}`}
      name={item.title}
      location={`${item.address.city}, ${item.address.admin_name}`}
      date={item.createdAt}
      price={`${item.price} грн`}
    />
  ));
};

AdvertsCard.propTypes = {
  errorAdvert: PropTypes.shape({}),
  loadingAdvert: PropTypes.bool,
  advertInfo: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

AdvertsCard.defaultProps = {
  errorAdvert: null,
  loadingAdvert: false,
};

export default AdvertsCard;
