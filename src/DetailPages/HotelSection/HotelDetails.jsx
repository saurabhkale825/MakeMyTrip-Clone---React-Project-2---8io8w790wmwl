import React, { useContext, useEffect, useState } from "react";
import "./HotelDetails.css";
import HotelSearchNav from "./HotelSearchNav/HotelSearchNav";
import NavbarDetails from "../../Homepage/Navbar/NavbarDetails";
import HotelContext from "../../Context/HotelContext";
import IndividualHotel from "./IndividualHotel/IndividualHotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckBox from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";
import axios from "axios";
import { Link } from "react-router-dom";


function HotelDetails() {
  const { location, setLocation, checkin, setCheckin, checkout, setCheckout } = useContext(HotelContext);
  const [hoteldata, setHoteldata] = useState(
    JSON.parse(sessionStorage.getItem("hotelData"))
  );

  const [selectedHotelFilter , setSelectedHotelFilter] = useState("");
  const [selectedHotelSort , setSelectedHotelSort] = useState("");
  const [minHotelPrice , setMinHotelPrice] = useState(0);
  const [maxHotelPrice , setMaxHotelPrice] = useState(10000);
  const [data , setData] = useState([]);

  useEffect(() => {
    setLocation(hoteldata.location);
  }, []);

  const FetchHotels = async() => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${location}"}&filter=
        {${selectedHotelFilter}}&sort={${selectedHotelSort}}`,
        {
          headers: {
            projectID: "8io8w790wmwl",
          },
        }
      )   ;

      setData(response.data?.data?.hotels);
    } catch (error) {
      console.error("Error fetching train data:", error);
    }
  }
  useEffect(() => {
    FetchHotels();
  }, [location]);

  useEffect(() => {
    FetchHotels();
  }, [selectedHotelFilter , selectedHotelSort]); 

  const updateClearAll = () => {
    setSelectedHotelFilter("");
    setSelectedHotelSort("");
  }

  return (
    <>
      <NavbarDetails />
      <HotelSearchNav />
      <div className="hotel-details">
        <div className="hotel-details-sorting">
          <div className="hotel-details-sorting-innerrbox">
            <div className="hotel-details-sorting-content ml-2">
              <div className="sort-by">SORT BY:</div>
            </div>
            <div className="hotel-details-sorting-content">
              <div className="sorting-values" onClick={() => setSelectedHotelSort("")}>
                <div>Popular</div>
                <div className="sort-bar"></div>
              </div>
            </div>
            <div className="hotel-details-sorting-content">
              <div className="sorting-values"  onClick={() => setSelectedHotelSort(`"rating":-1`)}>
                <div>
                  <span>UserRating</span>
                  <span>(Highest First)</span>
                </div>
                <div className="sort-bar"></div>
              </div>
            </div>
            <div className="hotel-details-sorting-content">
              <div className="sorting-values"  onClick={() => setSelectedHotelSort(`"avgCostPerNight":1`)}>
                <div>
                  <span>Price</span>
                  <span>(Lowest First)</span>
                </div>
                <div className="sort-bar"></div>
              </div>
            </div>
            <div className="hotel-details-sorting-content">
              <div className="sorting-values" onClick={() => setSelectedHotelSort(`"avgCostPerNight":-1`)}>
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
                <div className="text-blue-400 font-bold cursor-pointer" onClick={() => updateClearAll()}>Clear All</div>
                </div>
                <div className="hotel-filter-by-rating">
                  <h3 className="hotel-filter-heading">User Rating</h3>
                  <div className="hotel-filter-rating-content">
                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter(`"rating":5`)}>
                      <span>{selectedHotelFilter === `"rating":5`? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>Exceptional</span>
                    </div>
 
                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter(`"rating":4.5`)}>
                      <span>{selectedHotelFilter === `"rating":4.5`? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>Excellent</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter(`"rating":4`)}>
                      <span>{selectedHotelFilter === `"rating":4`? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>Very Good</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter(`"rating":3.5`)}>
                      <span>{selectedHotelFilter === `"rating":3.5`? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>Good</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter(`"rating":3`)}>
                      <span>{selectedHotelFilter === `"rating":3`? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>Pleasant</span>
                    </div>
                  </div>
                </div>

                <div className="hotel-filter-by-range">
                <h3 className="hotel-filter-heading">Price per night</h3>
                <div className="hotel-filter-rating-content">
                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter(`"avgCostPerNight":{"$gte":"00","$lte":"2000"}`)}>
                      <span>{selectedHotelFilter === `"avgCostPerNight":{"$gte":"00","$lte":"2000"}`? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>₹0 - ₹2000</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter(`"avgCostPerNight":{"$gte":"2000","$lte":"4000"}`)}>
                      <span>{selectedHotelFilter === `"avgCostPerNight":{"$gte":"2000","$lte":"4000"}`? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>₹2000 - ₹4000</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter(`"avgCostPerNight":{"$gte":"4000","$lte":"6000"}`)}>
                      <span>{selectedHotelFilter === `"avgCostPerNight":{"$gte":"4000","$lte":"6000"}`? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>₹4000 - ₹6000</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter(`"avgCostPerNight":{"$gte":"6000","$lte":"9000"}`)}>
                      <span>{selectedHotelFilter === `"avgCostPerNight":{"$gte":"6000","$lte":"9000"}`? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>₹6000 - ₹9000</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter(`"avgCostPerNight":{"$gte":"9000","$lte":"15000"}`)}>
                      <span>{selectedHotelFilter === `"avgCostPerNight":{"$gte":"9000","$lte":"15000"}`? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>₹9000 - ₹15000</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter(`"avgCostPerNight":{"$gte":"15000","$lte":"30000"}`)}>
                      <span>{selectedHotelFilter === `"avgCostPerNight":{"$gte":"15000","$lte":"30000"}`? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>₹15000 - ₹30000</span>
                    </div>

                    <div className="hotel-filter-rating-content-options" onClick={() => setSelectedHotelFilter(`"avgCostPerNight":{"$gte":"30000"}`)}>
                      <span>{selectedHotelFilter === `"avgCostPerNight":{"$gte":"30000"}`? <CheckBox /> : <CheckBoxOutlineBlank/>}</span>
                      <span>₹30000+</span>
                    </div>
                    </div>
                
                </div>
            </div>
          </div>
         
          <div className="hotel-details-content-wrapper">
          {data?.length ? (
            data?.map((item) => (
              <div key={item._id}>
                <Link to={`/hotels/${item._id}`}>
                <IndividualHotel hotels={item}/>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-4xl font-bold text-black subpixel-antialiased relative border-2 border-black p-5 rounded-2xl">
              No Data Found
            </p>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelDetails;
