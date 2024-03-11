import React from "react";
import "./IndividualHotel.css";
import ImageGallery from "react-image-gallery";
import HotelCarousel from "../HotelCarousel/HotelCarousel";

function IndividualHotel(hotel) {
  

  const FormatRating = (rating) => {
    if (rating >= 4.5) {
      return "Exceptional";
    } else if (rating < 4.5 && rating >= 4) {
      return "Excellent";
    } else if (rating < 4 && rating >= 3.5) {
      return "Very Good";
    } else if (rating < 3.5 && rating >= 3) {
      return "Good";
    } else {
      return "Pleasant";
    }
  };

  return (
    <div className="individual-hotel-card">
      <div className="individual-hotel-content">
       
        <div>
          <img src={hotel?.hotels.images[0]} alt="logo" className="card-image"/>
          
        </div>
        <div className="individual-hotel-content-Left">
          <div className="individual-hotel-content-name">{hotel?.hotels.name}</div>
          <div className="individual-hotel-content-location">
            {hotel.hotels.location}
          </div>
          
          <div className="individual-hotel-content-ammenities">
            <ul className="grid grid-cols-2 grid-rows-3 gap-4" >
              {hotel?.hotels.amenities.map((item) => (
                <li className="aeminities-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="individual-hotel-content-right">
      <div className="individual-hotel-content-rating">
      <span className="mx-2 font-bold">{FormatRating(hotel?.hotels.rating)}</span>
            <span className="bg-blue-500 py-0.5 px-1 rounded-md text-white">
              {hotel?.hotels.rating}
            </span>
          </div>

          <div className="individual-hotel-content-price">
            <div className="hotel-base-cost">₹{Math.floor(hotel?.hotels.avgCostPerNight)}</div>
            <div>{`+ ₹ ${hotel?.hotels.rooms[0].costDetails.taxesAndFees} taxes & fees `}</div>
            <div>Per Night for 2 Rooms</div>
          </div>
      </div>
    </div>
  );
}

export default IndividualHotel;
