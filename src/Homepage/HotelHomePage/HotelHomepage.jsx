import { useContext, useState, useEffect, useCallback } from "react";
import "./HotelHomepage.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import OfferSection from "../../OfferSection/OfferSection";
// import axios from "axios";
import DatePicker from "react-datepicker";
import HotelContext from "../../Context/HotelContext";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import InputCities from "./InputCities";
import MyContext from "../../Context/MyContext";

function HotelHomepage() {
  const {
    location,
    setLocation,
    checkin,
    setCheckin,
    checkout,
    setCheckout,
    showInputCities,
    setShowInputCities,
    rooms ,
    setRooms, 
    adults, 
    setAdults
    } = useContext(HotelContext);

  const { mode, setMode } = useContext(MyContext);
  /* State required only for Hotels HOmePage*/
  const [selectedMode, setSelectedMode] = useState("4Rooms");
  const [hotelData, setHotelData] = useState({});
  const [showRooms, setShowRooms] = useState(false); // To toggle shoe the block of room change.
  const FormatedDate = (date) => format(date, "dd MMM'' yy"); // to set date in required format.
  const FormatedDay = (date) =>
    date.toLocaleDateString("en-US", { weekday: "long" }); // to get Day of date.

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

  useEffect(() => {
    console.log(showRooms);
  }, [showRooms]);

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
            <span style={{ color: "blue" }}>Click here.</span>
          </div>
        </div>

        <div className="hotel-homepage-content">
          {showInputCities === true ? <InputCities /> : null}
          <div className="hotel-location">
            <div className="flex flex-col">
              <p className="hotel-location-text">
                City,Property Name or Location
              </p>
              <div>
                <div
                  className="hotel-location-city"
                  onClick={() => setShowInputCities(!showInputCities)}
                >
                  {location}
                </div>
              </div>
              <p>India</p>
            </div>
          </div>

          <div className="check-in">
            <div>Check-in</div>
            <p>
              <span className="depature-month">
                <DatePicker
                  label="Check-in"
                  className="flights-section-calendar mt-1"
                  value={FormatedDate(checkin)}
                  onChange={(date) => setCheckin(date)}
                  dateFormat="MMM/d/YY"
                  minDate={new Date()}
                />
              </span>
            </p>

            <p>{FormatedDay(checkin)}</p>
          </div>
          <div className="check-out">
            <div>Check-out</div>
            <p>
              <span className="depature-month">
                <DatePicker
                  label="Check-in"
                  className="flights-section-calendar"
                  value={FormatedDate(checkout)}
                  onChange={(date) => setCheckout(date)}
                  dateFormat="MMM/d/YY"
                />
              </span>
            </p>

            <p>{FormatedDay(checkout)}</p>
          </div>
          <div className="rooms-guest" onClick={() => setShowRooms(!showRooms)}>
            <div>Rooms & Guests</div>
            <span className="rooms-guest-no">{rooms}</span>
            <span className="rooms-guest-text">Room</span>
            <span className="rooms-guest-no"> {adults}</span>
            <span className="rooms-guest-text">Adults</span>
          </div>
        </div>
        {showRooms === true ? (
          <div className="w-52 h-24 border-2 border-red absolute top-44 right-6 bg-slate-50 flex items-center flex-col justify-center gap-y-2">
            <div>
              <span className="mx-2 text-base">No. of Rooms:</span>
              <span>
                <span className={`border border-black px-2 text-black text-base ${rooms > 1 ? "bg-sky-200" : "bg-gray-200 cursor-not-allowed"}`} onClick={() => rooms > 1 && setRooms(rooms - 1)}>
                  -
                </span>
                <span className="border border-black px-2 bg-sky-200 text-black text-base">{rooms}</span>
                <span className="border border-black px-2 bg-sky-200 text-black text-base" onClick={() => setRooms(rooms + 1)}>
                  <button >+</button>
                </span>
              </span>
            </div>

            <div>
              <span className="mx-2 text-base">No. of Adults :</span>
              <span>
                <span className={`border border-black px-2 text-black text-base ${adults > 2 ? "bg-sky-200" : "bg-gray-200 cursor-not-allowed"}`} onClick={() => (adults > 2 && setAdults(adults - 1))}  disabled={adults <= 2 ? true : false}>
                 -
                </span>
                <span className="border border-black px-2  bg-sky-200 text-black text-base">{adults}</span>
                <span className="border border-black px-2  bg-sky-200 text-black text-base"  onClick={() => setAdults(adults + 1)}>
                  <button>+</button>
                </span>
              </span>
            </div>
          </div>
        ) : null}

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
