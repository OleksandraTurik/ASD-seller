import React from 'react';
import PropTypes from 'prop-types';

// Icons
import mapMarker from 'assets/icons/mapMarker.svg';

// Images
import map from 'assets/img/map.webp';

// Styles
import {
  Wrapper,
  Container,
  LocationInfo,
  Icon,
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
        <Icon src={mapMarker} alt="map icon" />
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
