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
`;

const SliderWrap = styled.div`
  width: 50%;
`;

const AdvertPage = () => {
  const advert = useSelector(state => state.getAdvert);
  const getAdvertStorage = JSON.parse(localStorage.getItem('advert'));
  const {
    title,
    createdAt,
    updatedAt,
    price,
    description,
    _id,
    address,
  } = getAdvertStorage.advertInfo;

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
          <SimpleSlider />
          <Description
            title={title}
            date={createdAt}
            price={price}
            status="Приватна особа"
            state="Стан: Б/в"
            description={description}
            id={_id}
          />
        </SliderWrap>
        <Container>
          <User
            name="Руслан"
            date={createdAt}
            link="/"
          />
          <Location
            city="Київ, Солом&apos;янський"
            region={address}
          />
        </Container>
      </Wrapper>
    );
  };

  return (advertPage());
};

export default AdvertPage;
