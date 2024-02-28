import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import "./HotelCarousel.css"



function HotelCarousel(images) {


  console.log(images);
  return (
    <div>
      <Carousel className='hotel-carousel'
     showArrows={true}
     showStatus={false}
     showThumbs={false}
     infiniteLoop={true}
     centerMode={true}
     centerSlidePercentage={100}
     emulateTouch={false}
     interval={3000}
     autoPlay={false}
     selectedItem={6}
      >
         {images.map((item, index) => (
          <div className='indiviual-image' key={index}>
            <img src={item} alt={`image-${index}`} width="150px" height="150px" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default HotelCarousel