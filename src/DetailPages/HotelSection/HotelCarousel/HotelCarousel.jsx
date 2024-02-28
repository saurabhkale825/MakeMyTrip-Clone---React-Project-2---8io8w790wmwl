import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HotelCarousel.css";

function HotelCarousel(images) {
  console.log(images.images.images);
  return (
    <div>
      <Slider
        dots={true}
        infinite={false}
        speed={1000}
        slidesToShow={1}
        slidesToScroll={1}
        lazyLoad={true}
      >
        {images?.images?.images.map((item, index) => (
          <div key={index}>
            <img src={item} alt={`image-${index}`}  width="100px" height="100px"/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HotelCarousel;
