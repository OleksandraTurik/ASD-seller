import React, { useState } from 'react';
import { settingsComponentMap } from 'components/SettingsPage';
// Components
import ChangeContacts from 'components/SettingsPage/ChangeContacts';
import ChangeEmail from 'components/SettingsPage/ChangeEmail';
import ChangeNumber from 'components/SettingsPage/ChangeNumber';
import ItemContainer from 'components/SettingsPage/ItemContainer';
import ChangePhoto from 'components/SettingsPage/ChangePhoto';

// Styles
import { Container } from './styled';

const SettingsPage = () => {
  const [data, setData] = useState(settingsComponentMap);

  const handleOpen = (id) => {
    const newData = data.map((item) => ({
      ...item,
      isOpen: id === item.id ? !item.isOpen : false,
    }));
    setData(newData);
  };

  return (
    <Container>
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
