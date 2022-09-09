/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import Slider from 'react-slick';

// Styles
import {
  ArrowNext,
  ArrowPrev,
  Image,
  Wrapper,
} from './styled';

const SampleNextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <ArrowNext
      style={style}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <ArrowPrev
      style={style}
      onClick={onClick}
    />
  );
};

const SimpleSlider = ({ images }) => {
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
          {images
            ? images.map((img) => (
              <div key={img}>
                <Image src={`http://localhost:4000/${img}`} />
              </div>
            ))
            : ''}
        </Slider>
      </div>
    </Wrapper>
  );
};

export default SimpleSlider;
