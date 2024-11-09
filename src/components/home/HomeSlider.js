import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeSlider.css'

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="slider-container container slider-main">
        <Slider {...settings}>
          <div className="slider-box slider-box1">
           
          </div>
          <div className="slider-box slider-box2">
            
          </div>
          <div className="slider-box slider-box3">
            
          </div>
          <div className="slider-box slider-box4">
           
          </div>
        
        </Slider>
      </div>
    </>
  );
};

export default HomeSlider;
