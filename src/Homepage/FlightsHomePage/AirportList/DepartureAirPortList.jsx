import { useState, useEffect, useContext } from "react";
import axios from "axios";
import FlightContext from "../../../Context/FlightsContext";
import "./AirportList.css";

function DepartureAirportList() {
  const {departureCity ,setDepartureCity ,setShowDepartureAirportList } = useContext(FlightContext)
  const [air, setAir] = useState([]);

  const updateDepartureCity = (departureCity) => {
    const storedData = JSON.parse(sessionStorage.getItem("myData")) || {};
    storedData.departureCity = departureCity;
    sessionStorage.setItem("myData" , JSON.stringify(storedData));
    console.log(sessionStorage.getItem("myData"));
  }

  useEffect(() => {
    updateDepartureCity(departureCity);
  }, [departureCity]);


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
     
    };
    fetchAirportList();
  }, []);

  return (
    <div className="airport-list-main">
      <ul>
        {air.map((air) => (
          <li key={air._id} onClick={() => (setDepartureCity(air.city) , setShowDepartureAirportList(false) )}>
            <div className="airport-list-individual" >
              <div className="flex justify-center content-center w-8 h-8 mt-2">
                <img src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png" alt="logo"
                width="20px" height="10px"/>
                </div>
                
                <div className="airport-list-content">
                <h3>{air.city}</h3>
                <p className="text-xs">{air.name}</p>
                </div>

                <div className="
                ">
                    {air.iata_code}
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DepartureAirportList;
