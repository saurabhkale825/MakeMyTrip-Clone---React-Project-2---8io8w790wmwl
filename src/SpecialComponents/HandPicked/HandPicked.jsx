import React, { useRef } from "react";
import "./HandPicked.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../Assest/Logo/img1.png";
import img2 from "../../Assest/Logo/img2.png";
import img3 from "../../Assest/Logo/img3.png";
import img4 from "../../Assest/Logo/img4.png";
import img5 from "../../Assest/Logo/img5.png";
import img6 from "../../Assest/Logo/img6.png";
import img7 from "../../Assest/Logo/img7.png";
import img8 from "../../Assest/Logo/img8.png";
import img9 from "../../Assest/Logo/img9.png";
import img10 from "../../Assest/Logo/img10.png";

import Slider from "react-slick";

function HandPicked() {
  const images = [img1 , img2 ,img3 ,img4 , img5 , img6 , img7 , img8 , img9 , img10 ];

  const text = [
    "Stays in & Around Delhi for a Weekend Getaway",
    "Stays in & Around Mumbai for a Weekend Getaway",
    "Stays in & Around  Bangalore for a Weekend Getaway",
    "Beach Destinations",
    "Weekend Getaways",
    "Hill Stations",
    " Adventure Destinations",
    "Heritage Destination",
    "Pilgrimage Destination",
    "Relaxation Destination",
  ];

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="handpicked">
        <div className="handpicked-heading flex justify-between  items-center px-2 font-semibold">
            <h2 className="text-black lg:text-3xl text-xl">HandPicked Collections for You</h2>

            <div className=" w-1/5 flex justify-center items-center">
                    <div className="lg:w-9 lg:h-9 w-6 h-6 text-black border  border-gray-700 rounded-l-xl flex justify-center items-center" onClick={previous} >
                    <button className="text-black">{`<`}</button>
                    </div>

                    <div className="lg:w-9 lg:h-9 w-6 h-6 text-black border  border-gray-700 rounded-r-xl ml-1 flex justify-center items-center" onClick={next} >
                    <button className="text-black">{`>`}</button>
                    </div>
                    
            </div>
        </div>

        <div className="handpicked-content">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {images.map((item , index) => 
            <div className="w-4/5 lg:h-64 h-40 p-3 ">
               <div style={{
                backgroundImage: `url(${item})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                cursor:"pointer",
                filter: "blur(0.2px)"
              }} className="flex items-end">
                <p className="text-white text-d text-left font-semibold ml-2 mb-2 w-4/5 lg:block ">{text[index]}</p>
                </div> 
            </div>
        )}
      </Slider>

      </div>
    </div>
  );
}

export default HandPicked;
