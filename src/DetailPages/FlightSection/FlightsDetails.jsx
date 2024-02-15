import { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./FlightsDetails.css";
import FlightContext from "../../Context/FlightsContext";
import NavbarDetails from "../../Homepage/Navbar/NavbarDetails";
import DetailSearchNav from "./DetailSearch.jsx/DetailSearchNav";
import IndividualFlightCard from "./IndividualFlightCard/IndividualFlightCard";
import Indigo from "../../Assest/Logo/6E.png";
import AirIndia from "../../Assest/Logo/AI.png";
import SpiceJet from "../../Assest/Logo/SG.png";
import Vistara from "../../Assest/Logo/UK.png";
import AKasa from "../../Assest/Logo/QP.png";
import Morning from "../../Assest/Logo/morning_inactive.webp";
import Noon from "../../Assest/Logo/noon_inactive.png";
import Evening from "../../Assest/Logo/evening_inactive.png";
import Night from "../../Assest/Logo/night_inactive.png";

function FlightsDetails() {
  const [data, setData] = useState([]);
  const {
    departureCity,
    setDepartureCity,
    arrivalCity,
    setArrivalCity,
    setDepartureCityAirportId,
    setArrivalCityAirportId,
  } = useContext(FlightContext);

  const [myData, setMyData] = useState(
    JSON.parse(sessionStorage.getItem("myData"))
  );

  const departure = myData.departureCityAirportId;
  const arrival = myData.arrivalCityAirportId;
  const day = myData.day;

  useEffect(() => {
    setDepartureCity(myData.departureCity);
    setArrivalCity(myData.arrivalCity);
    setDepartureCityAirportId(myData.departureCityAirportId);
    setArrivalCityAirportId(myData.arrivalCityAirportId);
  }, []);

  const FetchFlights = async () => {
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${departure}","destination":"${arrival}"}&day=${day}`,
      {
        headers: {
          projectID: "8io8w790wmwl",
        },
      }
    );
    setData(response.data.data?.flights);
  };

  useEffect(() => {
    FetchFlights();
  }, [departureCity, arrivalCity]);

  return (
    <div className="flights-details">
      <NavbarDetails />
      <DetailSearchNav />
      <div className="flights-details-content">
        <div className="flights-details-filter-wrapper">
          <div className="filterouter">
            <p className="filterheading">Applied Filters</p>
            <span className="clearFilter">CLEAR ALL</span>
          </div>
          <ul>
            <li>
              <div className="filter-option-outer">
                <h3 className="filtering-heading">Popular AirLines</h3>
                <div className="filtering-airlines-options">
                  <div className="airlines-innerbox">
                    <input
                      type="checkbox"
                      value={false}
                      className="common-checkbox "
                    />
                    <div className="flex gap-x-2 p-y-2">
                      <span className="common-text">
                        <img src={Indigo} alt="logo" width="15px" />
                      </span>
                      <span>Indigo</span>
                    </div>
                  </div>

                  <div className="airlines-innerbox">
                    <input
                      type="checkbox"
                      value={false}
                      className="common-checkbox "
                    />
                    <div className="flex gap-x-2 p-y-2">
                      <span className="common-text">
                        <img src={AirIndia} alt="logo" width="15px" />
                      </span>
                      <span>Air India</span>
                    </div>
                  </div>

                  <div className="airlines-innerbox">
                    <input
                      type="checkbox"
                      value={false}
                      className="common-checkbox"
                    />
                    <div className="flex gap-x-2 p-y-2">
                      <span className="common-text">
                        <img src={SpiceJet} alt="logo" width="15px" />
                      </span>
                      <span>Spice Jet</span>
                    </div>
                  </div>

                  <div className="airlines-innerbox">
                    <input
                      type="checkbox"
                      value={false}
                      className="common-checkbox "
                    />
                    <div className="flex gap-x-2 p-y-2">
                      <span className="common-text">
                        <img src={Vistara} alt="logo" width="15px" />
                      </span>
                      <span>Vistara</span>
                    </div>
                  </div>

                  <div className="airlines-innerbox">
                    <input
                      type="checkbox"
                      value={false}
                      className="common-checkbox "
                    />
                    <div className="flex  gap-x-2 p-y-2">
                      <span className="inline">
                        <img src={AKasa} alt="logo" width="15px" />
                      </span>
                      <span>Akasa</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="filter-option-outer">
                <h3 className="filtering-heading">Price</h3>
                <div className="filtering-airlines-option">
                  <div className="airlines-innerbox">
                    <input
                      type="checkbox"
                      value="1"
                      className="common-checkbox"
                      id="lower"
                      name="checkbox"
                      // checked={isChecked ? true : false}
                    />
                    <span>Lowest to Highest</span>
                  </div>

                  <div className="airlines-innerbox">
                    <input
                      type="checkbox"
                      value="-1"
                      className="common-checkbox"
                      id="higher"
                      name="checkbox"
                      // checked={isChecked ? false : true}
                    />
                    <span>Highest to Lowest</span>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="filter-option-outer">
                <h3 className="filtering-heading">{`Depature From ${departureCity}`}</h3>
                <div className="filtering-departure-option">
                  <div className="flight-departure-time-inner">
                    <div className="flex-col content-center justify-center">
                      <img
                        src={Morning}
                        alt="logo"
                        width="30px"
                        className="mx-3"
                      />
                      <span className="font-bold">Before 3 PM</span>
                    </div>
                  </div>
                  <div className="flight-departure-time-inner">
                    <div className="flex-col content-center justify-center">
                      <img
                        src={Noon}
                        alt="logo"
                        width="30px"
                        className="mx-3"
                      />
                      <span className="font-bold">6AM - 12AM</span>
                    </div>
                  </div>
                  <div className="flight-departure-time-inner">
                    <div className="flex-col content-center justify-center">
                      <img
                        src={Evening}
                        alt="logo"
                        width="30px"
                        className="mx-3"
                      />
                      <span className="font-bold">12AM - 6PM</span>
                    </div>
                  </div>
                  <div className="flight-departure-time-inner">
                    <div className="flex-col content-center justify-center">
                      <img
                        src={Night}
                        alt="logo"
                        width="30px"
                        className="mx-3"
                      />
                      <span className="font-bold">After 6 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="filter-option-outer">
                <h3 className="filtering-heading">{`Arrival to ${arrivalCity}`}</h3>
                <div className="filtering-departure-option">
                  <div className="flight-departure-time-inner">
                    <div className="flex-col content-center justify-center">
                      <img
                        src={Morning}
                        alt="logo"
                        width="30px"
                        className="mx-3"
                      />
                      <span className="font-bold">Before 6 AM</span>
                    </div>
                  </div>
                  <div className="flight-departure-time-inner">
                    <div className="flex-col content-center justify-center">
                      <img
                        src={Noon}
                        alt="logo"
                        width="30px"
                        className="mx-3"
                      />
                      <span className="font-bold">6AM - 12AM</span>
                    </div>
                  </div>
                  <div className="flight-departure-time-inner">
                    <div className="flex-col content-center justify-center">
                      <img
                        src={Evening}
                        alt="logo"
                        width="30px"
                        className="mx-3"
                      />
                      <span className="font-bold">12AM - 6PM</span>
                    </div>
                  </div>
                  <div className="flight-departure-time-inner">
                    <div className="flex-col content-center justify-center">
                      <img
                        src={Night}
                        alt="logo"
                        width="30px"
                        className="mx-3"
                      />
                      <span className="font-bold">After 6 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <div className="filter-option-outer">
              <h3 className="filtering-heading">Stops</h3>
              <div className="filtering-airlines-option">
                <div className="airlines-innerbox">
                  <input
                    type="checkbox"
                    value={false}
                    className="common-checkbox "
                  />
                  <span>Non Stop</span>
                </div>

                <div className="airlines-innerbox">
                  <input
                    type="checkbox"
                    value={false}
                    className="common-checkbox "
                  />
                  <span>1 Stop</span>
                </div>

                <div className="airlines-innerbox">
                  <input
                    type="checkbox"
                    value={false}
                    className="common-checkbox "
                  />
                  <span>2 Stops</span>
                </div>
              </div>
            </div>
            <li></li>
          </ul>

          <div className="filterouter"></div>
        </div>

        <div className="flights-details-list">
          <div className="flights-details-list-heading">
            {`Flights from ${departureCity} to ${arrivalCity}`}
          </div>

          <div>
            {data?.length > 0
              ? data?.map((flight) => (
                  <div key={flight._id}>
                    <IndividualFlightCard Flight={flight} />
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightsDetails;
