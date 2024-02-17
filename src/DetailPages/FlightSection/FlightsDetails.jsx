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
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useCallback } from "react";

function FlightsDetails() {
  const [data, setData] = useState([]);
  const [airline, setAirline] = useState("");
  const [airlineName, setAirlineName] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

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

  const updateAirline = (airline, airlineName) => {
    setAirline(airline);
    setAirlineName(airlineName);
  };

  const handleAirlineClick = useCallback((airline, airlineName) => {
    updateAirline(airline, airlineName);
  }, []);

  const updateSelectedSort = (sort) => {
    setSelectedSort(sort);
  };

  const handleUpdateSelectedSort = useCallback((sort) => {
    updateSelectedSort(sort);
  });

  const updateSelectedFilter = (filter) => {
    setSelectedFilter(filter);
  };

  const handleUpdateSelectedFilter = useCallback((filter) => {
    updateSelectedFilter(filter);
  });

  const FetchFlights = async () => {
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${departure}","destination":"${arrival}"}&day=${day}&filter={${selectedFilter}}&sort={${selectedSort}}`,
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

  useEffect(() => {
    FetchFlights();
  }, [selectedSort, selectedFilter]);

  const updateClearAll = () => {
    setSelectedFilter("");
    setSelectedSort("");
  };

  return (
    <div className="flights-details">
      <NavbarDetails />
      <DetailSearchNav />
      <div className="flights-details-content">
        <div className="flights-details-filter-wrapper">
          <div className="filterouter">
            <p className="filterheading">Applied Filters</p>
            <span className="clearFilter" onClick={() => updateClearAll()}>
              CLEAR ALL
            </span>
          </div>
          <ul>
            <li>
              <div className="filter-option-outer">
                <h3 className="filtering-heading">Popular AirLines</h3>
                <div className="filtering-airlines-options">
                  <div className="airlines-innerbox">
                    <div
                      onClick={() =>
                        updateSelectedFilter(
                          `"airline":"65144a1b664a43628887c45e"`
                        )
                      }
                    >
                      {selectedFilter ===
                      `"airline":"65144a1b664a43628887c45e"` ? (
                        <CheckBoxIcon />
                      ) : (
                        <CheckBoxOutlineBlankIcon />
                      )}
                    </div>
                    <div className="flex gap-x-2 p-y-2">
                      <span className="common-text">
                        <img src={Indigo} alt="logo" width="15px" />
                      </span>
                      <span>Indigo</span>
                    </div>
                  </div>

                  <div className="airlines-innerbox">
                    <div
                      onClick={() =>
                        updateSelectedFilter(
                          `"airline":"65144a1b664a43628887c460"`
                        )
                      }
                    >
                      {selectedFilter ===
                      `"airline":"65144a1b664a43628887c460"` ? (
                        <CheckBoxIcon />
                      ) : (
                        <CheckBoxOutlineBlankIcon />
                      )}
                    </div>
                    <div className="flex gap-x-2 p-y-2">
                      <span className="common-text">
                        <img src={AirIndia} alt="logo" width="15px" />
                      </span>
                      <span>Air India</span>
                    </div>
                  </div>

                  <div className="airlines-innerbox">
                    <div
                      onClick={() =>
                        updateSelectedFilter(
                          `"airline":"65144a1b664a43628887c45f"`
                        )
                      }
                    >
                      {selectedFilter ===
                      `"airline":"65144a1b664a43628887c45f"` ? (
                        <CheckBoxIcon />
                      ) : (
                        <CheckBoxOutlineBlankIcon />
                      )}
                    </div>
                    <div className="flex gap-x-2 p-y-2">
                      <span className="common-text">
                        <img src={SpiceJet} alt="logo" width="15px" />
                      </span>
                      <span>Spice Jet</span>
                    </div>
                  </div>

                  <div className="airlines-innerbox">
                    <div
                      onClick={() =>
                        updateSelectedFilter(
                          `"airline":"65144a1b664a43628887c45d"`
                        )
                      }
                    >
                      {selectedFilter ===
                      `"airline":"65144a1b664a43628887c45d"` ? (
                        <CheckBoxIcon />
                      ) : (
                        <CheckBoxOutlineBlankIcon />
                      )}
                    </div>
                    <div className="flex gap-x-2 p-y-2">
                      <span className="common-text">
                        <img src={Vistara} alt="logo" width="15px" />
                      </span>
                      <span>Vistara</span>
                    </div>
                  </div>

                  <div className="airlines-innerbox">
                    <div
                      onClick={() =>
                        updateSelectedFilter(
                          `"airline":"65144a1b664a43628887c461"`
                        )
                      }
                    >
                      {selectedFilter ===
                      `"airline":"65144a1b664a43628887c461"` ? (
                        <CheckBoxIcon />
                      ) : (
                        <CheckBoxOutlineBlankIcon />
                      )}
                    </div>
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
                <h3 className="filtering-heading">Sort</h3>
                <div className="filtering-airlines-option">
                  <div className="airlines-innerbox">
                    <div onClick={() => updateSelectedSort(`"ticketPrice":1 `)}>
                      {selectedSort === `"ticketPrice":1 ` ? (
                        <CheckBoxIcon />
                      ) : (
                        <CheckBoxOutlineBlankIcon />
                      )}
                    </div>
                    <span>Lowest to Highest</span>
                  </div>

                  <div className="airlines-innerbox">
                    <div
                      onClick={() => updateSelectedSort(`"ticketPrice":-1 `)}
                    >
                      {selectedSort === `"ticketPrice":-1 ` ? (
                        <CheckBoxIcon />
                      ) : (
                        <CheckBoxOutlineBlankIcon />
                      )}
                    </div>
                    <span>Highest to Lowest</span>
                  </div>

                  <div className="airlines-innerbox">
                    <div onClick={() => updateSelectedSort(`"duration":1`)}>
                      {selectedSort === `"duration":1` ? (
                        <CheckBoxIcon />
                      ) : (
                        <CheckBoxOutlineBlankIcon />
                      )}
                    </div>
                    <span>Duration(min to max)</span>
                  </div>

                  <div className="airlines-innerbox">
                    <div onClick={() => updateSelectedSort(`"duration":-1`)}>
                      {selectedSort === `"duration":-1` ? (
                        <CheckBoxIcon />
                      ) : (
                        <CheckBoxOutlineBlankIcon />
                      )}
                    </div>
                    <span>Duration(max to min)</span>
                  </div>

                  <div className="airlines-innerbox">
                    <div onClick={() => updateSelectedSort(`"stops":1`)}>
                      {selectedSort === `"stops":1` ? (
                        <CheckBoxIcon />
                      ) : (
                        <CheckBoxOutlineBlankIcon />
                      )}
                    </div>
                    <span>Stops(min to max)</span>
                  </div>

                  <div className="airlines-innerbox">
                    <div onClick={() => updateSelectedSort(`"stops":-1`)}>
                      {selectedSort === `"stops":-1` ? (
                        <CheckBoxIcon />
                      ) : (
                        <CheckBoxOutlineBlankIcon />
                      )}
                    </div>
                    <span>Stops(max to min)</span>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="filter-option-outer">
                <h3 className="filtering-heading">{`Depature From ${departureCity}`}</h3>
                <div className="filtering-departure-option">
                  <div className="flight-departure-time-inner">
                    <div
                      className="flex-col content-center justify-center"
                      onClick={() =>
                        handleUpdateSelectedFilter(
                          `"departureTime":{"$lte":"15:00"}`
                        )
                      }
                    >
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
                    <div
                      className="flex-col content-center justify-center"
                      onClick={() =>
                        handleUpdateSelectedFilter(
                          `"departureTime":{"$lte":"18:00"}`
                        )
                      }
                    >
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
                    <div
                      className="flex-col content-center justify-center"
                      onClick={() =>
                        handleUpdateSelectedFilter(
                          `"arrivalTime":{"$lte":"15:00"}`
                        )
                      }
                    >
                      <img
                        src={Morning}
                        alt="logo"
                        width="30px"
                        className="mx-3"
                      />
                      <span className="font-bold">Before 3 AM</span>
                    </div>
                  </div>

                  <div className="flight-departure-time-inner">
                    <div
                      className="flex-col content-center justify-center"
                      onClick={() =>
                        handleUpdateSelectedFilter(
                          `"arrivalTime":{"$gte":"15:00"}`
                        )
                      }
                    >
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
                  <div onClick={() => updateSelectedFilter(`"stops":0`)}>
                    {selectedFilter === `"stops":0` ? (
                      <CheckBoxIcon />
                    ) : (
                      <CheckBoxOutlineBlankIcon />
                    )}
                  </div>
                  <span>Non Stop</span>
                </div>

                <div className="airlines-innerbox">
                  <div onClick={() => updateSelectedFilter(`"stops":1`)}>
                    {selectedFilter === `"stops":1` ? (
                      <CheckBoxIcon />
                    ) : (
                      <CheckBoxOutlineBlankIcon />
                    )}
                  </div>
                  <span>1 Stop</span>
                </div>

                <div className="airlines-innerbox">
                  <div onClick={() => updateSelectedFilter(`"stops":2`)}>
                    {selectedFilter === `"stops":2` ? (
                      <CheckBoxIcon />
                    ) : (
                      <CheckBoxOutlineBlankIcon />
                    )}
                  </div>
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
            {data?.length > 0 ? (
              data?.map((flight) => (
                <div key={flight._id}>
                  <IndividualFlightCard Flight={flight} />
                </div>
              ))
            ) : (
              <p className="text-4xl font-bold text-black subpixel-antialiased absolute start-80 top-40 border-2 border-black p-5 rounded-2xl">
                No Data Found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightsDetails;
