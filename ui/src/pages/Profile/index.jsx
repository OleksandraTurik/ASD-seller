import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Tabs from 'components/Profile/Tabs';

// Styles
import { Wrapper } from './styled';

const Profile = () => (
  <Wrapper>
    <h1>Ваші оголошення</h1>
    <Tabs list={[
      { title: 'Оголошення', link: 'adverts' },
      { title: 'Налаштування', link: 'settings' },
      { title: 'Додати', link: 'add' },
    ]}
    />
    <Outlet />
  </Wrapper>
);

export default Profile;
