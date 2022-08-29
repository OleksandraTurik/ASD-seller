import React from 'react';

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

const Location = () => (
  <Wrapper>
    <h1>Місце знаходження</h1>
    <Container>
      <LocationWrap>
        <Icon src={mapMarker} alt="map icon" />
        <LocationInfo>
          <p>
            Київ,
            Солом&apos;янський
          </p>
          <span>
            Київська область
          </span>
        </LocationInfo>
      </LocationWrap>
      <MapImage src={map} alt="map" />
    </Container>
  </Wrapper>
);

export default Location;
