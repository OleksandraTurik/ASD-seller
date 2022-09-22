/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Slider from 'react-slick';
import { URL } from 'API';
import moment from 'moment/moment';
import PropTypes from 'prop-types';

// Components
import AdvertCard from 'components/Advert/AllAdvertsUser/AdvertCard';

// Styles
import { Wrapper } from './styled';

const AdvertSlider = ({ dataAdvertsList }) => {
  const settings = {
    centerMode: false,
    draggable: true,
    speed: 500,
    slidesToShow: dataAdvertsList?.length < 4 ? dataAdvertsList?.length : 4,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: dataAdvertsList?.length < 3 ? dataAdvertsList?.length : 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: dataAdvertsList?.length < 2 ? dataAdvertsList?.length : 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <div>
        <Slider {...settings}>
          {dataAdvertsList?.map((item) => (
            <AdvertCard
              itemId={item?._id}
              key={item?._id}
              link={`/adverts/${item?._id}`}
              img={`${URL}/${item?.images[0]}`}
              name={item?.title}
              location={`${item?.address?.city}, ${item?.address?.admin_name}`}
              date={moment(item?.createdAt).format('MM-DD-YYYY')}
              price={`${item?.price} грн.`}
            />
          ))}
        </Slider>
      </div>
    </Wrapper>
  );
};

AdvertSlider.propTypes = {
  dataAdvertsList: PropTypes.arrayOf(PropTypes.shape({})),
};

AdvertSlider.defaultProps = {
  dataAdvertsList: [],
};

export default AdvertSlider;
