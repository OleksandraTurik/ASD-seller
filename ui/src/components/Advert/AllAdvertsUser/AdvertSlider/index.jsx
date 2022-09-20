/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { URL } from 'API';
import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertsInfo } from 'redux/slice/getAdvertInfo';

// Components
import Loader from 'components/common/Loader';
import AdvertCard from 'components/Advert/AllAdvertsUser/AdvertCard';

// Styles
import { Wrapper } from './styled';

const AdvertSlider = () => {
  const object = useSelector(({ userAdvertInfoReducer, getAdvert }) => ({ userAdvertInfoReducer, getAdvert }));
  const dispatch = useDispatch();
  const { advertInfo: { sellerId }, loading: advertLoading } = object.getAdvert;
  const { data: { results }, error, loading } = object.userAdvertInfoReducer;

  useEffect(() => {
    if (sellerId) {
      dispatch(getAdvertsInfo(sellerId));
    }
  }, [sellerId]);

  if (loading) {
    return <Loader />;
  }

  const settings = {
    centerMode: false,
    draggable: true,
    speed: 500,
    slidesToShow: results?.length < 4 ? results?.length : 4,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: results?.length < 3 ? results?.length : 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: results?.length < 2 ? results?.length : 2,
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
          {!error && !loading && !advertLoading
            && (results?.map((item) => (
              <AdvertCard
                key={item?._id}
                link={`/adverts/${item?._id}`}
                img={`${URL}/${item?.images[0]}`}
                name={item?.title}
                location={`${item?.address?.city}, ${item?.address?.admin_name}`}
                date={moment(item?.createdAt).format('MM-DD-YYYY')}
                price={`${item?.price} грн.`}
              />
            )))}
        </Slider>
      </div>
    </Wrapper>
  );
};

export default AdvertSlider;
