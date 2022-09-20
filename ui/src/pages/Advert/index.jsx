import React from 'react';
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
import Loader from 'components/common/Loader';
import NotFound from 'pages/NotFound';

// hooks
import useFetchAdvertById from 'components/hooks/useFetchAdvertById';
import useFetchInfoUser from 'components/hooks/useFetchInfoUser';

// Styles
import { Wrapper, Container, SliderWrap } from './styled';

const AdvertPage = () => {
  const { id } = useParams();

  const { dataAdvert, pending, error } = useFetchAdvertById(id);

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
  } = dataAdvert;

  const phone = contactPhone ?? 'no number phone';
  const city = address?.city ?? 'no city';
  const region = address?.admin_name ?? 'no region';
  const token = localStorage.getItem('tokens');
  const date = moment(createdAt).format('DD.MM.YYYY HH:mm');

  const { dataUser } = useFetchInfoUser(sellerId);

  return (
    <>
      {pending && <Loader />}
      <Wrapper>
        {error && <NotFound />}
        {!error
          && !pending
          && (
            <>
              <SliderWrap>
                <SimpleSlider
                  images={images}
                />
                <Description
                  advertId={id}
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
                  avatarOfUser={dataUser.avatar}
                />
                <Location
                  city={city}
                  region={region}
                />
              </Container>
            </>
          )}
      </Wrapper>
    </>
  );
};

export default AdvertPage;
