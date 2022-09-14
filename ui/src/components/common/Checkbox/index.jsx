import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  Container,
  CheckboxContainer,
  Icon,
  HiddenCheckbox,
  StyledCheckbox,
  Text,
} from './styled';

const Checkbox = ({ checked, onChange }) => (
  <Container>
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
    <Text>Не показувати всі оголошення на сторінці мого оголошення</Text>
  </Container>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
