import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment/moment';

// Styles for slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Components
import SimpleSlider from 'components/Advert/SimpleSlider';
import User from 'components/Advert/User';
import Location from 'components/Advert/Location';
import Description from 'components/Advert/Description';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/common/Loader';
import { getAdvertThunk } from 'redux/slice/getAdvert';
import NotFound from 'pages/NotFound';
import Search from 'components/common/Search';
import AllAdvertsUser from 'components/Advert/AllAdvertsUser';

// Styles
import {
  Wrapper,
  Container,
  SliderWrap,
  MainContainer,
  InfoWrap,
  SearchWrap,
} from './styled';

const AdvertPage = () => {
  const advert = useSelector(state => state.getAdvert);
  const {
    images,
    title,
    createdAt,
    updatedAt,
    price,
    description,
    _id,
    address,
    contactName,
    contactPhone,
    sellerId,
  } = advert.advertInfo;

  const { id } = useParams();
  const dispatch = useDispatch();
  const phone = contactPhone ?? 'no number phone';
  const city = address?.city ?? 'no city';
  const region = address?.admin_name ?? 'no region';
  const token = localStorage.getItem('tokens');
  const date = moment(createdAt).format('MM-DD-YYYY');

  useEffect(() => {
    dispatch(getAdvertThunk(id));
  }, [id]);

  const { loading, error } = advert;

  return (
    <>
      {loading && <Loader />}
      <Wrapper>
        {error && <NotFound />}
        {!error
          && !loading
          && (
            <MainContainer>
              <SearchWrap>
                <Search />
              </SearchWrap>
              <InfoWrap>
                <SliderWrap>
                  <SimpleSlider
                    images={images}
                  />
                  <Description
                    title={title}
                    date={date}
                    price={`${price} грн.`}
                    description={description}
                  />
                </SliderWrap>
                <Container>
                  <User
                    name={contactName}
                    date={date}
                    link={`/adverts?seller=${sellerId}`}
                    phone={token ? phone : '(XXX) XXX XXXX'}
                  />
                  <Location
                    city={city}
                    region={region}
                  />
                </Container>
              </InfoWrap>
              <AllAdvertsUser />
            </MainContainer>
          )}
      </Wrapper>
    </>
  );
};

export default AdvertPage;
