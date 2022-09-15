import React from 'react';
import PropTypes from 'prop-types';
import Burger from './Burger';
import Desktop from './Desktop';

const RightNav = ({ setActive }) => (
  <>
    <Desktop />
    <Burger setActive={setActive} />
  </>
);

RightNav.propTypes = {
  setActive: PropTypes.func.isRequired,
};

export default RightNav;
