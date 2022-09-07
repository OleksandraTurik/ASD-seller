import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Components
import SimpleSlider from 'components/Advert/SimpleSlider';
import User from 'components/Advert/User';
import Location from 'components/Advert/Location';
import Description from 'components/Advert/Description';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f2f4f5;
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
  const {
    title,
    createdAt,
    updatedAt,
    price,
    description,
    _id,
    address,
  } = advert.advertInfo;

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
            date={updatedAt}
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
