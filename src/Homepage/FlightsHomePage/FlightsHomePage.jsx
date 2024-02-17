import { useState, useEffect, useContext } from "react";
import "./FlightsHomePage.css";
import { Link } from "react-router-dom";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import TravellerSection from ".././FlightsHomePage/TrvellerSection/TravellerSection";
import MyContext from "../../Context/MyContext";
import FlightContext from "../../Context/FlightsContext";
import DepartureAirportList from "./AirportList/DepartureAirPortList";
import ArrivalAirportList from "./AirportList/ArrivalAirportList";
import Login from "../../Login/Login";

function FlightsHomePage() {
  const [selectedFare, setSelectedFare] = useState("regular");
  const [departureCityAirport, setDepartureCityAirport] = useState("");
  const [arrivalCityAirport, setArrivalCityAirport] = useState("");
  const [ myData , setMyData] = useState({});
 
  //contexts
  const { showTravellerSection, setShowTravellerSection , showLogin ,setShowLogin  } = useContext(MyContext);
  const {
    departureCity,
    setDepartureCity,
    arrivalCity,
    setArrivalCity,
    startDate,
    setStartDate,
    day,
    traveller,
    setTraveller,
    selectedClass,
    departureCityAirportId,
    setDepartureCityAirportId,
    arrivalCityAirportId,
    setArrivalCityAirportId,
    showDepartureAirportList,
    setShowDepartureAirportList,
    showArrivalAirportList,
    setShowArrivalAirportList
  } = useContext(FlightContext);

  const FormatedDate = (date) => format(date, "dd MMM''yy");

  useEffect(() => {
    const storedData = sessionStorage.getItem('myData');
    if (storedData) {
      setMyData(JSON.parse(storedData));
    }
  }, []);


  const updateData = (newData) => {
    setMyData(newData);
    sessionStorage.setItem('myData', JSON.stringify(newData));
  };

  useEffect(() => {
    setTimeout(() => {
      const fetchAirport = async () => {
        const response = await axios.get(
          `https://academics.newtonschool.co/api/v1/bookingportals/airport?search={"city": "${departureCity}"}`,
          {
            headers: {
              projectID: "8io8w790wmwl",
            },
          }
        );

        setDepartureCityAirport(response.data.data.airports[0]?.name);
        setDepartureCityAirportId(response.data.data?.airports[0]?.iata_code);
      };
      fetchAirport();
    }, 100);
  }, [departureCity]);

  useEffect(() => {
    setTimeout(() => {
      const fetchAirport = async () => {
        try {
          const response = await axios.get(
            `https://academics.newtonschool.co/api/v1/bookingportals/airport?search={"city": "${arrivalCity}"}`,
            {
              headers: {
                projectID: "8io8w790wmwl",
              },
            }
          );

          setArrivalCityAirport(response?.data?.data?.airports[0]?.name);
          setArrivalCityAirportId(response.data.data.airports[0]?.iata_code);
        } catch (error) {
          console.error("Error fetching airport:", error);
        }
      };

      fetchAirport();
    }, 100);
  }, [arrivalCity]);

  return (
    <>
    {showLogin === true ? <Login /> :null}
      <div className="flights-homepage">
        <div className="flights-homepage-content">
          <div className="trip-route">
            <div
              className="trip-date"
              onClick={() => setShowDepartureAirportList(!showDepartureAirportList)}
            >
              <div>
                <p className="mx-5">From</p>
                <div className="trip-start">{departureCity}</div>
                <div className="airport">
                  {departureCityAirportId},{departureCityAirport}
                </div>
              </div>
            </div>
            {showDepartureAirportList === true ? (
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

            <div className="trip-date"
            onClick={() => setShowArrivalAirportList(!showArrivalAirportList)}>
              <div>
                <p className="mx-5">To</p>
                <div className="trip-start">{arrivalCity}</div>
                <div className="airport">
                  {arrivalCityAirportId},{arrivalCityAirport}
                </div>
              </div>
            </div>
            {showArrivalAirportList === true ? (
              <div className="arrival-airport-list">
                <input
                  type="text"
                  id="airportList-input"
                  autoFocus
                  onChange={(e) => setArrivalCity(e.target.value)}
                  value={arrivalCity}
                />
                <ArrivalAirportList setShowArrivalAirportList="setShowArrivalAirportList" />
              </div>
            ) : null}


            <div className="trip-depature">
              <div>
                <DatePicker
                  label="Depature"
                  className="flights-section-calendar"
                  value="Departure"
                  onChange={(date) => setStartDate(date)}
                  dateFormat="MMM/d/YY"
                />
              </div>

              <div>
                <span className="depature-date">{FormatedDate(startDate)}</span>
              </div>
              <div
                style={{
                  marginLeft: "0px",
                  marginTop: "5px",
                  textAlign: "left",
                }}
              >
                {startDate.toLocaleDateString("en-US", { weekday: "long" })}
              </div>
            </div>

            <div className="trip-class">
              <div
                className="trip-class-heading"
                onClick={() => setShowTravellerSection(!showTravellerSection)}
              >
                <span>Traveller & Class</span>
                <span>
                  <KeyboardArrowDownIcon className="trip-class-heading-icon" />
                </span>
              </div>
              <>{showTravellerSection === true ? <TravellerSection /> : null}</>
              <div>
                <span className="no-of-passengers">{traveller}</span>
                <span className="no-of-passengers-text">Traveller</span>
              </div>
              <div className="no-of-passengers-class">{selectedClass}</div>
            </div>
          </div>

          <div>
            <ul className="fare-type">
              <li className="fare-type-heading">Select A Fare Type:</li>
              <li
                className="fare-type-content"
                onClick={() => setSelectedFare("regular")}
              >
                <span>
                  {selectedFare === "regular" ? (
                    <CheckBoxTwoToneIcon sx={{ fontSize: 16 }} />
                  ) : (
                    <CircleOutlinedIcon sx={{ fontSize: 16 }} />
                  )}
                </span>
                <span className="fare-type-text">Regular Fares</span>
              </li>
              <li
                className="fare-type-content"
                onClick={() => setSelectedFare("armedForce")}
              >
                <span>
                  {selectedFare === "armedForce" ? (
                    <CheckBoxTwoToneIcon sx={{ fontSize: 16 }} />
                  ) : (
                    <CircleOutlinedIcon sx={{ fontSize: 16 }} />
                  )}
                </span>
                <span className="fare-type-text">Armed Forces Fares</span>
              </li>
              <li
                className="fare-type-content"
                onClick={() => setSelectedFare("student")}
              >
                <span>
                  {selectedFare === "student" ? (
                    <CheckBoxTwoToneIcon sx={{ fontSize: 16 }} />
                  ) : (
                    <CircleOutlinedIcon sx={{ fontSize: 16 }} />
                  )}
                </span>
                <span className="fare-type-text">Students Fares</span>
              </li>
              <li
                className="fare-type-content"
                onClick={() => setSelectedFare("seniorCitizen")}
              >
                <span>
                  {selectedFare === "seniorCitizen" ? (
                    <CheckBoxTwoToneIcon sx={{ fontSize: 16 }} />
                  ) : (
                    <CircleOutlinedIcon sx={{ fontSize: 16 }} />
                  )}
                </span>
                <span className="fare-type-text">Senior Citizen Fares</span>
              </li>
              <li
                className="fare-type-content"
                onClick={() => setSelectedFare("doctor")}
              >
                <span>
                  {selectedFare === "doctor" ? (
                    <CheckBoxTwoToneIcon sx={{ fontSize: 16 }} />
                  ) : (
                    <CircleOutlinedIcon sx={{ fontSize: 16 }} />
                  )}
                </span>
                <span className="fare-type-text">Doctors & Nurses Fares</span>
              </li>
              <li
                className="fare-type-content"
                onClick={() => setSelectedFare("doubleSeat")}
              >
                <span>
                  {selectedFare === "doubleSeat" ? (
                    <CheckBoxTwoToneIcon sx={{ fontSize: 16 }} />
                  ) : (
                    <CircleOutlinedIcon sx={{ fontSize: 16 }} />
                  )}
                </span>
                <span className="fare-type-text">Double Seat Fares</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Link to={"/flights/details"}>
        <div className="search-button" onClick={() => updateData({"departureCity" :`${departureCity}`, "arrivalCity":`${arrivalCity}` , "startDate" : `${startDate}` , "traveller" :`${traveller}` , "departureCityAirportId":`${departureCityAirportId}` , "arrivalCityAirportId" :`${arrivalCityAirportId}` , "day" :`${day}`})}>SEARCH</div>
      </Link>
    </>
  );
}

export default FlightsHomePage;
