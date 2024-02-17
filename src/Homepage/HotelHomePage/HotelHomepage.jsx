import { useState } from "react";
import "./HotelHomepage.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import OfferSection from "../../OfferSection/OfferSection"
import axios from "axios";
import DatePicker from "react-datepicker";


function HotelHomepage() {
  const [selectedMode, setSelectedMode] = useState("4Rooms");
  const [location , setLocation] = useState("Goa")
  return (
    <>
      <Header />
      <Navbar />
      <div className="hotel-homepage">
        <div className="hotel-homepage-heading">
          <div onClick={() => setSelectedMode("4Rooms")}>
            <span>
              {selectedMode === "4Rooms" ? (
                <CheckBoxTwoToneIcon />
              ) : (
                <CircleOutlinedIcon />
              )}
            </span>
            <span>Upto 4 Rooms</span>
          </div>
          <div onClick={() => setSelectedMode("group-deals")}>
            <span>
              {selectedMode === "group-deals" ? (
                <CheckBoxTwoToneIcon />
              ) : (
                <CircleOutlinedIcon />
              )}
            </span>
            <span>Group Deals</span>
            <span className="new-popup">New</span>
          </div>
          <div>
            Book Domestic and International Property Online.To List your
            Property.
            <span style={{ color: "blue" }}>Click here.</span>{" "}
          </div>
        </div>

        <div className="hotel-homepage-content">
          <div className="hotel-location">
            <p className="hotel-location-text">City,Property Name or Location</p>
            <p className="hotel-location-city">{`${location}`}</p>
            <p>India</p>
          </div>
          
          <div className="check-in">
            <div> <DatePicker
                  label="Check-in"
                  className="flights-section-calendar"
                  value="Check-in"
                  onChange={(date) => setStartDate(date)}
                  dateFormat="MMM/d/YY"
                /></div>
            <p>
              <span className="hotel-location-city">16</span>
              <span className="depature-month">Dec'23</span>
            </p>

            <p>Saturday</p>
          </div>
          <div className="check-out">
            <p>Check-out</p>
            <p>
              <span className="hotel-location-city">17</span>
              <span className="depature-month">Dec'23</span>
            </p>

            <p>Sunday</p>
          </div>
          <div className="rooms-guest">
            <div>Rooms & Guests</div>
            <span className="hotel-location-city">1</span>
            <span className="depature-month">Room</span>
            <span className="hotel-location-city">2</span>
            <span className="depature-month">Adults</span>
          </div>
          <div className="price-per-night">
            <div className="hotel-location-text">Price Per Night</div>
            <div className="hotel-price-selection">0-1500, 1500-2500,....</div>
          </div>
        </div>

        <div className="hotelhomepge-search-button">SEARCH</div>
      </div>
      <OfferSection/>
      <Footer />
    </>
  );
}

export default HotelHomepage;
