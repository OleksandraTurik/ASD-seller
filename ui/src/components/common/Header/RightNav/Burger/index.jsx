import BurgerIcons from 'assets/icons/Burger';
import React from 'react';
import PropTypes from 'prop-types';
import { BurgerButton } from './styled';

const Burger = ({ setActive, active }) => {
  const handleOpen = () => {
    setActive(!active);
  };

  return (
    <BurgerButton type="button" onClick={handleOpen}>
      <BurgerIcons width="50px" height="50px" />
    </BurgerButton>
  );
};

Burger.propTypes = {
  setActive: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Burger;
