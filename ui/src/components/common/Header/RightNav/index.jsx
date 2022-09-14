import React from 'react';
import PropTypes from 'prop-types';
import Burger from './Burger';
import Desktop from './Desktop';

const RightNav = ({ setActive, active }) => (
  <>
    <Desktop />
    <Burger setActive={setActive} active={active} />
  </>
);

RightNav.propTypes = {
  setActive: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default RightNav;
