import { useState, useEffect, useContext } from "react";
import "./BusesHomePage.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import OfferSection from "../../OfferSection/OfferSection";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Footer from "../../Footer/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import SourceBusStand from "./SourceBusStand";
import BusContext from "../../Context/BusContext";
import DestinationBusStand from "./DestinationBusStand";
import MyContext from "../../Context/MyContext";

function BusHomePage() {
    const {busSource,
    setBusSource,
    busDestination,
    setBusDestination,
    busTravelDate,
    setBusTravelDate,
    } = useContext(BusContext);

    const {mode , setMode} = useContext(MyContext);
    
    const [showCalendar , setShowCalendar] = useState(false);
    const [showSourceInput , setShowSourceInput]= useState(false);
    const [showDestinationInput , setShowDestinationInput] = useState(false);

    // useEffect(() => {
    //   setMode(localStorage.getItem('mode'));  
    // }, []);
  
    // useEffect(() => {
    //   setMode(localStorage.setItem('mode',mode))
    // }, [mode]);

  const FormatedDate = (travelDate) => format(travelDate, "dd MMM''yy");

  

  return (
    <>
      <Header />
      <Navbar />

      <div className="buses-homepage">
        <div className="bus-homepage-header">
          <span>Bus Ticket Booking.</span>
          <span className="bus-homepage-header-link">
            Travelling with a group?Hire a bus
          </span>
        </div>

        <div className="bus-homepage-content">
          <div className="bus-homepage-city">
            <div className="bus-homepage-hard-text">From</div>
            <div className="bus-homepage-city-heading" onClick={() => setShowSourceInput(!showSourceInput)}>{busSource}</div>
            <div className="bus-homepage-hard-text">India</div>
            {showSourceInput === true ? <SourceBusStand />:null}
          </div>

          <div className="bus-homepage-city">
            <div className="bus-homepage-hard-text">To</div>
            <div className="bus-homepage-city-heading" onClick={() => setShowDestinationInput(!showDestinationInput)}>{busDestination}</div>
            <div className="bus-homepage-hard-text">India</div>
            {showDestinationInput === true ? <DestinationBusStand />:null}
          </div>

          <div
            className="bus-homepage-date"
            onClick={() => {
              setShowCalendar(!showCalendar);
            }}
          >
            <div className="bus-homepage-hard-text">
              <DatePicker
                label="Return"
                className="flights-section-calendar"
                value="TravelDate"
                onChange={(date) => setBusTravelDate(date)}
                dateFormat="MMM/d/YY"
              />
            </div>
            <div className="bus-homepage-date-text">
              {FormatedDate(busTravelDate)}
            </div>
            <div className="bus-homepage-hard-text">
              {busTravelDate.toLocaleDateString("en-US", { weekday: "long" })}
            </div>
          </div>
        </div>
        <Link to={"/buses/details"}>
          <div className="bushomepge-search-button">SEARCH</div>
        </Link>
      </div>

      <OfferSection />
      <Footer />
    </>
  );
}

export default BusHomePage;
