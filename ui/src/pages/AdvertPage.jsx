import React from 'react';
import styled from 'styled-components';

// Components
import Slider from 'components/AdvertPage/Slider';
import User from 'components/AdvertPage/User';
import Location from 'components/AdvertPage/Location';
import Description from 'components/AdvertPage/Description';

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

const AdvertPage = () => (
  <Wrapper>
    <Container>
      <Slider />
      <Description />
    </Container>
    <Container>
      <User />
      <Location />
    </Container>
  </Wrapper>
);

export default AdvertPage;
