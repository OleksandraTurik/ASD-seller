import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxContainer, Icon } from './styled';

const Checkbox = ({ checked, ...props }) => (
  <div>
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
    <span>Label Texst</span>
  </div>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,

};

export default Checkbox;
