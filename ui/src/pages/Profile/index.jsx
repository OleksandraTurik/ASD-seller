import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Tabs from 'components/Profile/Tabs';

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    font-size: 32px;
    font-weight: 700;
    color: rgb(0, 47, 52);
    margin: 48px 0 0 125px;
  }
`;

const Profile = () => (
  <Wrapper>
    <h1>Ваші оголошення</h1>
    <Tabs list={[
      { title: 'Оголошення', link: 'adverts' },
      { title: 'Налаштування', link: 'settings' },
    ]}
    />
    <Outlet />
  </Wrapper>
);

export default Profile;
