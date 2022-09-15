import ChangeContacts from 'components/SettingsPage/ChangeContacts';
import ChangeEmail from 'components/SettingsPage/ChangeEmail';
import ChangeNumber from 'components/SettingsPage/ChangeNumber';
import ChangePhoto from 'components/SettingsPage/ChangePhoto';

export const settingsComponentMap = [
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
    name: 'Змінити фото профілю',
    isOpen: false,
    Component: ChangePhoto,
  },
];
