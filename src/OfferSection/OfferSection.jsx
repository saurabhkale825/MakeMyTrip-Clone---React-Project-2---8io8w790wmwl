import { useState, useEffect } from "react";
import "./OfferSection.css";
import axios from "axios";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import OfferCard from "./OfferCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function OfferSection() {
  const [offers, setOffers] = useState([]);
  const [offerSelected, SetOfferSelected] = useState("ALL");

  // console.log(`https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"${offerSelected}"}`)

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"${offerSelected}"}&limit=6`,
        {
          method: "GET",
          headers: {
            projectID: "8io8w790wmwl",
          },
        }
      );
      const data = response.data.data;
      setOffers(data.offers);
    };
    fetchApi();
  }, [offerSelected]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="offer-section">
      <div className="offer-section-navbar">
        <div className="offer-section-navbar-text">Offers</div>

        <div className="offer-section-navbar-content">
          <div className={offerSelected==="ALL"?"offer-section-navbar-content-selected":"offer-section-navbar-content-notselected"}
          onClick={()=> SetOfferSelected("ALL")}>
            <p> All Offers </p>
          </div>

          <div className={offerSelected==="FLIGHTS"?"offer-section-navbar-content-selected":"offer-section-navbar-content-notselected"}
          onClick={()=> SetOfferSelected("FLIGHTS")}>
            Flights
          </div>

          <div className={offerSelected==="HOTELS"?"offer-section-navbar-content-selected":"offer-section-navbar-content-notselected"}
          onClick={()=> SetOfferSelected("HOTELS")}>Hotels</div>

          <div className={offerSelected==="RAILS"?"offer-section-navbar-content-selected":"offer-section-navbar-content-notselected"}
          onClick={()=> SetOfferSelected("RAILS")}>Trains</div>
        </div>

        <div className="offer-section-navbar-button-section">
          <button className="offer-navbar-prev-section " disabled>
          <ChevronLeftIcon/>
          </button>

          <button className="offer-navbar-next-section" >
          <ChevronRightIcon/>
          </button>
        </div>
      </div>

      <div className="offer-section-content">
      
        {offers.map((offer , index) => (
            // <Slider {...settings}>
          <OfferCard offer={offer}key={index} />
          // </Slider>
        ))}
        
          
        
      </div>
    </div>
  );
}

export default OfferSection;
