import React from 'react';
import PropTypes from 'prop-types';

// Icons
import IconLocation from 'assets/icons/Location';

// Images
import map from 'assets/img/map.webp';

// Styles
import {
  Wrapper,
  Container,
  LocationInfo,
  MapImage,
  LocationWrap,
} from './styled';

const Location = ({
  city,
  region,
}) => (
  <Wrapper>
    <h1>Місце знаходження</h1>
    <Container>
      <LocationWrap>
        <IconLocation
          width="25px"
          height="25px"
          fill="#002F34"
        />
        <LocationInfo>
          <p>{city}</p>
          <span>{region}</span>
        </LocationInfo>
      </LocationWrap>
      <MapImage src={map} alt="map" />
    </Container>
  </Wrapper>
);

Location.propTypes = {
  city: PropTypes.string,
  region: PropTypes.string,
};

Location.defaultProps = {
  city: '',
  region: '',
};

export default Location;
