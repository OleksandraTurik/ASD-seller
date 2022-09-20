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
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
