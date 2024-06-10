import React, { useRef } from "react";
import "./LesserKnown.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import photo1 from "../../Assest/Logo/photo1.png"
import photo3 from "../../Assest/Logo/photo3.png"
import photo4 from "../../Assest/Logo/photo4.png"
import photo5 from "../../Assest/Logo/photo5.png"
import photo6 from "../../Assest/Logo/photo6.png"
import photo7 from "../../Assest/Logo/photo7.png"
import photo8 from "../../Assest/Logo/photo8.png"
import photo9 from "../../Assest/Logo/photo9.png"
import photo10 from "../../Assest/Logo/photo10.png"
import photo11 from "../../Assest/Logo/photo11.png"
import photo12 from "../../Assest/Logo/photo12.png"
import photo13 from "../../Assest/Logo/photo13.png"
import photo14 from "../../Assest/Logo/photo14.png"
import photo15 from "../../Assest/Logo/photo15.png"
import photo16 from "../../Assest/Logo/photo16.png"
import photo17 from "../../Assest/Logo/photo17.png"
import { Link } from "react-router-dom";


function LesserKnown() {
    
    const data = [
        {
            image:photo1,
            text :"A pleasant summer retreat and a snowy winter wonderland!"
            
        },
        {
            image:photo3,
            text :"Seaside Resort Village in West Bengal"
        },
        {
            image:photo4,
            text :"Hidden Gem along Maharashtra's Coast"
        },
        {
            image:photo5,
            text :"Picture-Perfect Hill Station in Tamil Nadu"
            
        },
        {
            image:photo6,
            text :"Hill Retreat in Andhra Pradesh"
            
        },
        {
            image:photo7,
            text :"Nature Lover's Paradise in Gujarat"
            
        },
        {
            image:photo8,
            text :"Spiritual Coastal Town in Karnataka"
            
        },
        {
            image:photo9,
            text :"Queen of Satpura Pachmarhi"
            
        },
        {
            image:photo10,
            text :"A Town with Beaches and Hills!"
            
        },
        {
            image:photo11,
            text :"Konown as the 'Goa ofMalvan"
            
        },
        {
            image:photo12,
            text :"A Green Getaway in Karnataka"
            
        },
        {
            image:photo13,
            text :"Idyllic Hill Station in Kerala"
        },
        {
            image:photo14,
            text :"Wildlife Hotspot in Maharashtra"
            
        },
        {
            image:photo15,
            text :"Erstwhile Abode of Rulers in Andhra Pradesh"
            
        },
        {
            image:photo16,
            text :"Ancient City in Tamil Nadu"
            
        },
        {
            image:photo17,
            text :"Beautiful Apple & Peach Orchards"
            
        }

    ]

  

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
    speed: 54,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow:null,
    arrows : false
  };
  return (
    <div className="lesser-known">
        <div className="handpicked-heading flex justify-between  items-center px-2 font-semibold">
            <h2 className="text-black lg:text-3xl text-xl">Unlock Lesser-Known Wonders of India </h2>

            <div className=" w-1/5 flex justify-center items-center">
                    <div className="lg:w-9 lg:h-9 w-6 h-6 text-black border  border-gray-74 rounded-l-xl flex justify-center items-center">
                    <button onClick={previous} className="text-black">{`<`}</button>
                    </div>

                    <div className="lg:w-9 lg:h-9 w-6 h-6 text-black border  border-gray-74 rounded-r-xl ml-1 flex justify-center items-center">
                    <button onClick={next} className="text-black">{`>`}</button>
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
        {data.map((item , index) => 
            <div className="w-4/5 lg:h-64 h-44 p-3 ">
                <Link to={"/error"}>
               <div style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                cursor:"pointer",
                filter: "blur(0.2px)"
              }} className="flex items-end">
                <p className="text-white text-d text-left font-semibold ml-2 mb-2 w-4/5 lg:block ">{item.text}</p>
                </div> 
                </Link>
            </div>
        )}
      </Slider>

      </div>
    </div>
  );
}

export default LesserKnown;
