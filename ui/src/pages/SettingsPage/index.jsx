import ChangeContacts from 'components/SettingsPage/ChangeContacts';
import ChangeEmail from 'components/SettingsPage/ChangeEmail';
import ChangeNumber from 'components/SettingsPage/ChangeNumber';
import ItemContainer from 'components/SettingsPage/ItemContainer';
import LogoAndBanner from 'components/SettingsPage/LogoAndBanner';
import React, { useState } from 'react';
import { Container } from './styled';

const initialData = [
  {
    id: 1,
    name: 'Змінити контактні дані',
    isOpen: false,
    Component: ChangeContacts,
  },
  {
    id: 2,
    name: 'Змінити номер',
    isOpen: false,
    Component: ChangeNumber,
  },
  {
    id: 3,
    name: 'Змінити email-адресу',
    isOpen: false,
    Component: ChangeEmail,
  },
  {
    id: 4,
    name: 'Логотип та банер',
    isOpen: false,
    Component: LogoAndBanner,
  },
];

const SettingsPage = () => {
  const [data, setData] = useState(initialData);

  const handleOpen = (id) => {
    const newData = data.map((item) => {
      if (id === item.id) {
        return { ...item, isOpen: !item.isOpen };
      }
      return { ...item, isOpen: false };
    });
    setData(newData);
  };

  return (
    <Container>
      <h1>Settings</h1>
      {
        data.map((item) => (
          <ItemContainer
            key={item.id}
            id={item.id}
            name={item.name}
            isOpen={item.isOpen}
            Component={item.Component}
            handleOpen={handleOpen}
          />
        ))
      }
    </Container>
  );
};

export default SettingsPage;
