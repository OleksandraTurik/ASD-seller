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
  background-color: #f2f4f5;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Test1 = styled.div`
  width: 50%;
`;

const AdvertPage = () => (
  <Wrapper>
    <Test1>
      <SimpleSlider />
      <Description />
    </Test1>
    <Container>
      <User />
      <Location />
    </Container>
  </Wrapper>
);

export default AdvertPage;
