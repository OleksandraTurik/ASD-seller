import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Container, Link } from './styled';

const Tabs = ({ list }) => (
  <Container>
    {list.map(({ title, link }) => (
      <Link key={title} to={link}>{title}</Link>
    ))}
  </Container>
);

Tabs.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })).isRequired,
};

export default Tabs;
