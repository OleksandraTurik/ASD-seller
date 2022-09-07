import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Components
import SimpleSlider from 'components/Advert/SimpleSlider';
import User from 'components/Advert/User';
import Location from 'components/Advert/Location';
import Description from 'components/Advert/Description';

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

const AdvertPage = () => (
  <Wrapper>
    <SliderWrap>
      <SimpleSlider />
      <Description
        title="Продам свой Fender Jazz bass USA 2006"
        date="Опубліковано 25 серпня 2022 р."
        price="39 000 грн"
        status="Приватна особа"
        state="Стан: Б/в"
        description="апд - є варіант оплатою частинами через приват
        Продаю свій American Jazz bass, ювілейна серія, дуже рідкісна модель 2006 року.
        Причина продажу банальна - не вистачає грошей на ліки і їжу, такі часи..
        Дека ясенева, із двох шматків."
        id="ID: 752000902"
      />
    </SliderWrap>
    <Container>
      <User
        name="Руслан"
        date="23 червень 2022р."
        link="/"
      />
      <Location
        city="Київ, Солом&apos;янський"
        region="Київська область"
      />
    </Container>
  </Wrapper>
);

export default AdvertPage;
