/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Slider from 'react-slick';

// Images
import dog1 from 'assets/img/1.avif';
import dog2 from 'assets/img/2.avif';
import dog3 from 'assets/img/3.avif';

// Styles
import {
  SampleNextArrow1,
  SamplePrevArrow1,
  Image,
  Wrapper,
} from './styled';

const SampleNextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <SampleNextArrow1
      style={style}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <SamplePrevArrow1
      style={style}
      onClick={onClick}
    />
  );
};

// eslint-disable-next-line react/prefer-stateless-function
class SimpleSlider extends Component {
  render() {
    const settings = {
      centerMode: false,
      draggable: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <Wrapper>
        <div>
          <Slider {...settings}>
            <div>
              <Image src={dog1} />
            </div>
            <div>
              <Image src={dog2} />
            </div>
            <div>
              <Image src={dog3} />
            </div>
          </Slider>
        </div>
      </Wrapper>
    );
  }
}

export default SimpleSlider;
