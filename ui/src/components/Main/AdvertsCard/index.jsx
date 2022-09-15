import React from 'react';
import PropTypes from 'prop-types';

// components
import AdvertCard from 'components/common/AdvertCard';
import Loader from 'components/common/Loader';

// pages
import NotFound from 'pages/NotFound';

// helpers
import advertsAdapt from 'helpers/advertsAdapt';

// assets
import bmw from 'assets/img/bmw.webp';

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
      img={bmw}
      name={item.title}
      location="no data address"
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
