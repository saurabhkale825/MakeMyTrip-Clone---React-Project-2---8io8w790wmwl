import React, { useContext, useEffect, useState } from "react";
import "./HotelDetails.css";
import HotelSearchNav from "./HotelSearchNav";
import NavbarDetails from "../../Homepage/Navbar/NavbarDetails";
import HotelContext from "../../Context/HotelContext";
import IndividualHotel from "./IndividualHotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckBox from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";


function HotelDetails() {
  const { location, setLocation, checkin, setCheckin, checkout, setCheckout } =
    useContext(HotelContext);
  const [hoteldata, setHoteldata] = useState(
    JSON.parse(sessionStorage.getItem("hotelData"))
  );

  const [selectedHotelFilter , setSelectedHotelFilter] = useState("");
  const [minHotelPrice , setMinHotelPrice] = useState(0);
  const [maxHotelPrice , setMaxHotelPrice] = useState(10000);

  useEffect(() => {
    setLocation(hoteldata.location);
    console.log(hoteldata);
  }, []);

  return (
    <>
      <NavbarDetails />
      <HotelSearchNav />
      <div className="hotel-details">
        <div className="hotel-details-sorting">
          <div className="hotel-details-sorting-innerrbox">
            <div className="hotel-details-sorting-content">
              <div className="sort-by">SORT BY:</div>
            </div>
            <div className="hotel-details-sorting-content">
              <div className="sorting-values">
                <div>Popular</div>
                <div className="sort-bar"></div>
              </div>
            </div>
            <div className="hotel-details-sorting-content">
              <div className="sorting-values">
                <div>
                  <span>UserRating</span>
                  <span>(Highest First)</span>
                </div>
                <div className="sort-bar"></div>
              </div>
            </div>
            <div className="hotel-details-sorting-content">
              <div className="sorting-values">
                <div>
                  <span>Price</span>
                  <span>(Lowest First)</span>
                </div>
                <div className="sort-bar"></div>
              </div>
            </div>
            <div className="hotel-details-sorting-content">
              <div className="sorting-values">
                <div>
                  <span>Price</span>
                  <span>(Highest First)</span>
                </div>
                <div className="sort-bar"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hotel-details-content">
          <div className="hotel-details-content-functionality">
            <div className="functionality-map-content">
              <img
                src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/mapEntry.png"
                alt="logo"
                className="rounded"
              />
              <div className="explore-on-map">
                <span>explore on map</span>
                <span>
                  <LocationOnIcon fontSize="small" />
                </span>
              </div>
            </div>

            <div className="functionality-content">
                <div className="flex justify-between mx-3 ">
                <h1 className="filter-text">Filters</h1>
                <div className="text-blue-400 font-bold cursor-pointer" onClick={() => setSelectedHotelFilter("")}>Clear All</div>
                </div>
                <div className="hotel-filter-by-rating">
                  <h3 className="hotel-filter-heading">User Rating</h3>
                  <div className="hotel-filter-rating-content">
                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter("exception")}>
                      <span>{selectedHotelFilter === "exception"? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>Exceptional</span>
                    </div>
 
                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter("excellent")}>
                      <span>{selectedHotelFilter === "excellent"? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>Excellent</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter("verygood")}>
                      <span>{selectedHotelFilter === "verygood"? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>Very Good</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter("good")}>
                      <span>{selectedHotelFilter === "good"? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>Good</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter("pleasant")}>
                      <span>{selectedHotelFilter === "pleasant"? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>Pleasant</span>
                    </div>
                  </div>
                </div>

                <div className="hotel-filter-by-range">
                <h3 className="hotel-filter-heading">Price per night</h3>
                <div className="hotel-filter-rating-content">
                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter("price1")}>
                      <span>{selectedHotelFilter === "price1"? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>₹0 - ₹2000</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter("price2")}>
                      <span>{selectedHotelFilter === "price2"? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>₹2000 - ₹4000</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter("price3")}>
                      <span>{selectedHotelFilter === "price3"? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>₹4000 - ₹6000</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter("price4")}>
                      <span>{selectedHotelFilter === "price4"? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>₹4000 - ₹6000</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter("price5")}>
                      <span>{selectedHotelFilter === "price5"? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>₹6000 - ₹9000</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter("price6")}>
                      <span>{selectedHotelFilter === "price6"? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>₹9000 - ₹15000</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter("price7")}>
                      <span>{selectedHotelFilter === "price7"? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>₹15000 - ₹30000</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter("price8")}>
                      <span>{selectedHotelFilter === "price8"? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>₹30000+</span>
                    </div>
                    </div>
                
                </div>
            </div>
          </div>
          <div className="hotel-details-content-wrapper">
            <IndividualHotel />
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelDetails;
