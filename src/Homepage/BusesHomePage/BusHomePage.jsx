import { useState , useEffect} from "react";
import "./BusesHomePage.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import OfferSection from "../../OfferSection/OfferSection";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Footer from "../../Footer/Footer"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function BusHomePage() {
  const [fromcity, setFromcity] = useState("Delhi");
  const [destinationcity, setDestinationcity] = useState("Kanpur");
  const [click , setClick] = useState(false);
  const [travelDate , setTravelDate] = useState(new Date());

  const FormatedDate = (travelDate) => format(travelDate, "dd MMM''yy");

  return (
    <>
      <Header />
      <Navbar />

      <div className="buses-homepage" >
        <div className="bus-homepage-header">
          <span>Bus Ticket Booking.</span>
          <span className="bus-homepage-header-link">
            Travelling with a group?Hire a bus
          </span>
        </div>

        <div className="bus-homepage-content">
          <div className="bus-homepage-from-city">
            <div className="bus-homepage-normal-text">From</div>
            <input 
              id="from-city" 
              value={fromcity} 
              onChange={(e) => {setFromcity(e.target.value)}}
            />
            <div className="bus-homepage-normal-text">India</div>
          </div>

          <div className="bus-homepage-destination-city">
            <div className="bus-homepage-normal-text">To</div>
            <input 
              id="destination-city" 
              value={destinationcity} 
              onChange={(e) => {setDestinationcity(e.target.value)}}
            />
            <div className="bus-homepage-normal-text">India</div>
          </div>

          <div className="bus-homepage-date">
            <div className="bus-homepage-date-text" 
            onClick={() => {setClick(!click)}}>
              <span className="bus-homepage-normal-text"> <DatePicker
                  label="Return"
                  className="flights-section-calendar"
                  value="TravelDate"
                  onChange={(date) => setTravelDate(date)}
                  dateFormat="MMM/d/YY"
                /></span>
              {/* <span className="bus-homepage-calender-shower">{click === false ?<KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}
             </span> */}
            </div>
            <div className="bus-homepage-date-content">
                {FormatedDate(travelDate)}
            </div>
            <div className="bus-homepage-normal-text">{travelDate.toLocaleDateString("en-US", { weekday: "long" })}</div> 
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
