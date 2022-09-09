import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Components
import SimpleSlider from 'components/Advert/SimpleSlider';
import User from 'components/Advert/User';
import Location from 'components/Advert/Location';
import Description from 'components/Advert/Description';
import { useSelector } from 'react-redux';

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props => props.theme.greyBackground};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
`;

const SliderWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 24px 24px 0 24px;
`;

const AdvertPage = () => {
  const advert = useSelector(state => state.getAdvert);
  const getAdvertStorage = JSON.parse(localStorage.getItem('advert'));
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
  } = getAdvertStorage.advertInfo;

  console.log(address.admin_name);

  const { loading, error } = advert;

  const advertPage = () => {
    if (error) {
      return 'error';
    }

    if (loading) {
      return 'Loading';
    }

    return (
      <Wrapper>
        <SliderWrap>
          <SimpleSlider
            images={images}
          />
          <Description
            title={title}
            date={updatedAt}
            price={`${price} грн.`}
            state="Стан: Б/в"
            description={description}
            id={_id}
          />
        </SliderWrap>
        <Container>
          <User
            name={contactName}
            date={updatedAt}
            link="/"
          />
          <Location
            city={address.city}
            region={address.admin_name}
          />
        </Container>
      </Wrapper>
    );
  };

  return (advertPage());
};

export default AdvertPage;
