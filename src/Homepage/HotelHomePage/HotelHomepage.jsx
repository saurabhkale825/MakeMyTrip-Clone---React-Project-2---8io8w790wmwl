import { useContext, useState, useEffect, useCallback } from "react";
import "./HotelHomepage.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import OfferSection from "../../OfferSection/OfferSection";
import axios from "axios";
import DatePicker from "react-datepicker";
import HotelContext from "../../Context/HotelContext";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import InputCities from "./InputCities";

function HotelHomepage() {
  const { location, setLocation, checkin, setCheckin, checkout, setCheckout , showInputCities , setShowInputCities } =
    useContext(HotelContext);
  /* State required only for Hotels HOmePage*/
  const [selectedMode, setSelectedMode] = useState("4Rooms");
  const [hotelData, setHotelData] = useState({});
 

  const FormatedDate = (date) => format(date, "dd MMM'' yy");

  const updateCheckout = useCallback((checkout) => {
    const currentDate = checkout;
    setCheckout(new Date(currentDate.setUTCDate(currentDate.getUTCDate() + 1)));
  });

  useEffect(() => {
    const storedData = sessionStorage.getItem("hotelData");
    if (storedData) {
      setHotelData(JSON.parse(storedData));
    }
  }, []);

  const updateData = (newData) => {
    setHotelData(newData);
    sessionStorage.setItem("hotelData", JSON.stringify(newData));
  };

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
        {showInputCities === true ? <InputCities />:null}
          <div className="hotel-location">
          <div className="flex flex-col">
            <p className="hotel-location-text">
              City,Property Name or Location
            </p>
            <div>
              <div className="hotel-location-city"  onClick={() => setShowInputCities(!showInputCities)}>{location}</div>
            </div>
            <p>India</p>
            
          </div>
          
         
          </div>

          <div className="check-in">
            <div>
              <DatePicker
                label="Check-in"
                className="flights-section-calendar"
                value="Check-in"
                onChange={(date) => setCheckin(date)}
                dateFormat="MMM/d/YY"
              />
            </div>
            <p>
              <span className="depature-month">{FormatedDate(checkin)}</span>
            </p>

            <p>Saturday</p>
          </div>
          <div className="check-out">
            <div>
              <DatePicker
                label="Check-in"
                className="flights-section-calendar"
                value="Check-out"
                onChange={(date) => setCheckout(date)}
                dateFormat="MMM/d/YY"
              />
            </div>
            <p>
              <span className="depature-month">{FormatedDate(checkout)}</span>
            </p>

            <p>Sunday</p>
          </div>
          <div className="rooms-guest">
            <div>Rooms & Guests</div>
            <span className="hotel-location-city">1</span>
            <span className="depature-month">Room</span>
            <span className="hotel-location-city "> 2</span>
            <span className="depature-month">Adults</span>
          </div>
        </div>

        <Link to={"/hotels/details"}>
          <div
            className="hotelhomepge-search-button"
            onClick={() =>
              updateData({
                location: `${location}`,
                checkin: `${checkin}`,
                checkout: `${checkout}`,
              })
            }
          >
            SEARCH
          </div>
        </Link>
      </div>
      <OfferSection />
      <Footer />
    </>
  );
}

export default HotelHomepage;
