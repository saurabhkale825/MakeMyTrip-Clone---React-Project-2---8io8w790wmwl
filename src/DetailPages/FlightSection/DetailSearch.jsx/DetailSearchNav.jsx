import React, { useContext, useEffect, useState } from "react";
import "./DetailSearchNav.css";
import SwapIcon from "../../../Assest/Icons/SwapIcon.png";
import FlightContext from "../../../Context/FlightsContext";
import MyContext from "../../../Context/MyContext";
import { format } from "date-fns";
import DepartureAirportList from "../../../Homepage/FlightsHomePage/AirportList/DepartureAirPortList";
import ArrivalAirportList from "../../../Homepage/FlightsHomePage/AirportList/ArrivalAirportList";
import { Link } from "react-router-dom";

function DetailSearchNav() {
  const [showDepartureAirport, setShowDepartureAirport] = useState(false);
  const [showArrivalAirport, setShowArrivalAirport] = useState(false);
  const [activeSearch , setActiveSearch] = useState("false");
  const [filterData , setFilterData] = useState([]);
  const {
    departureCity,
    setDepartureCity,
    arrivalCity,
    setArrivalCity,
    startDate,
    setStartDate,
    day,
    setDay,
    traveller,
    selectedClass,
    departureCityAirportId,
    setDepartureCityAirportId,
    arrivalCityAirportId,
    setArrivalCityAirportId,
  } = useContext(FlightContext);

  const DayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const FormatedDate = (date) => format(date, "dd MMM''yy");

  useEffect(() => {
    setDay(DayOfWeek[startDate.getDay()]);
  }, [startDate]);

 
useEffect(() => {
  const StoredData = JSON.parse(sessionStorage.getItem("myData"));
  StoredData.departureCity
  = departureCity;
  sessionStorage.setItem("myData",JSON.stringify(StoredData));
}, [departureCity]);
  


  
  return (
    <div className="flight-detail-page-searchbar">
      <div className="flights-details-searchbar-widget">
        <div className="hsw-inner">
          <div
            className="hsw-inputbox"
            onClick={() => setShowDepartureAirport(!showDepartureAirport)}
          >
            <div className="lbl-input">FROM</div>
            <div
              className="hsw-inputbox-fromcity"
            >{departureCity}</div>
            {showDepartureAirport === true ? (
              <div className="departure-airport-list">
                <input
                  type="text"
                  id="airportList-input"
                  autoFocus
                  onChange={(e) => setDepartureCity(e.target.value)}
                  value={departureCity}
                />
                <DepartureAirportList setShowDepatureAirportList="setShowDepatureAirportList" />
              </div>
            ) : null}
          </div>
        </div>

        <div className="hsw-swap-functionality">
          <img src={SwapIcon} alt="icon" width="20px" />
        </div>

        <div className="hsw-inner">
          <div className="hsw-inputbox"
            onClick={() => setShowArrivalAirport(!showArrivalAirport)}
          >
            <div className="lbl-input">To</div>
            <div  className="hsw-inputbox-fromcity">{arrivalCity}</div>
            {showArrivalAirport === true ? (
              <div className="departure-airport-list">
                <input
                  type="text"
                  id="airportList-input"
                  autoFocus
                  onChange={(e) => setArrivalCity(e.target.value)}
                  value={arrivalCity}
                />
                 <ArrivalAirportList setShowArrivalAirportList="setShowArrivalAirport" />
              </div>
            ) : null}
          </div>
        </div>
        

        <div className="hsw-inner">
          <div className="hsw-inputbox">
            <label className="lbl-input">depart</label>
            <div className="hsw-inputbox-fromcity" >
                <span>{day}, </span>
                <span>{FormatedDate(startDate)}</span>
            </div>
          </div>
        </div>

        <div className="hsw-inner">
          <div className="hsw-inputbox">
            <div className="lbl-input">Passenger & Class</div>
            <div className="hsw-inputbox-fromcity">
              <span >1 Adult, </span>
              <span>Economy</span>
            </div>
          </div>
        </div>
        
        <Link to={"/flights/details"}>
        <button className="details-search"
        disabled={activeSearch === false ? true : false }>Search</button>
        </Link>
      </div>
    </div>
  );
}

export default DetailSearchNav;
