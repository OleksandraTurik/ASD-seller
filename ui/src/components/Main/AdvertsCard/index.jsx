import React from 'react';
import PropTypes from 'prop-types';

// Components
import AdvertCard from 'components/common/AdvertCard';
import Loader from 'components/common/Loader';

// Pages
import NotFound from 'pages/NotFound';

// Helpers
import advertsAdapt from 'helpers/advertsAdapt';

const AdvertsCard = ({ errorAdvert, loadingAdvert, advertInfo }) => {
  if (errorAdvert) {
    return <NotFound />;
  }

  if (loadingAdvert) {
    return <Loader />;
  }

  return advertsAdapt(advertInfo).map((item) => (
    <AdvertCard
      key={item.id}
      itemId={item.id}
      img={`http://localhost:4000/${item.images[0]}`}
      name={item.title}
      location={`${item.address.city}, ${item.address.admin_name}`}
      date={item.createdAt}
      price={`${item.price} грн`}
    />
  ));
};

AdvertsCard.propTypes = {
  errorAdvert: PropTypes.bool,
  loadingAdvert: PropTypes.bool,
  advertInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

AdvertsCard.defaultProps = {
  errorAdvert: false,
  loadingAdvert: false,
};

export default AdvertsCard;
