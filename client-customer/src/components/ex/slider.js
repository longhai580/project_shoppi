// Trong SliderComponent.js
import React from "react";
import Slider from "react-slick";
import { Image } from 'semantic-ui-react';
import image1 from './image1.png';  // Sử dụng đường dẫn tương đối
import image2 from './image2.jpg';  // Sử dụng đường dẫn tương đối

const SliderComponent = () => {
  const arrImages = [image1, image2];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {arrImages.map(image => (
        <Image key={image} src={image} alt="slider" />
      ))}
    </Slider>
  );
}

export default SliderComponent;
