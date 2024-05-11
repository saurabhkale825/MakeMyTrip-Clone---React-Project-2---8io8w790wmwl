import { useState, useEffect, useContext } from "react";
import axios from "axios";
import FlightContext from "../../../Context/FlightsContext";
import "./AirportList.css";

function ArrivalAirportList() {
  const { arrivalCity, setArrivalCity, setShowArrivalAirportList } =
    useContext(FlightContext);
  const [air, setAir] = useState([]);

  //To display airportList available in the databases.
  useEffect(() => {
    const fetchAirportList = async () => {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/bookingportals/airport",
        {
          headers: {
            projectID: "8io8w790wmwl",
          },
        }
      );
      setAir(response.data.data.airports);
      // console.log(air);
    };
    fetchAirportList();
  }, []);

  return (
    <div className="airport-list-main">
      <ul>
        {air.map((air) => (
          <li
            key={air._id}
            onClick={() => (
              setArrivalCity(air.city), setShowArrivalAirportList(false)
            )}
          >
            <div className="airport-list-individual">
              <div className="flex justify-center content-center w-8 h-8 mt-2">
                <img
                  src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
                  alt="logo"
                  width="20px"
                  height="10px"
                />
              </div>

              <div className="airport-list-content">
                <h3>{air.city}</h3>
                <p className="text-xs">{air.name}</p>
              </div>

              <div
                className="
                "
              >
                {air.iata_code}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrivalAirportList;
