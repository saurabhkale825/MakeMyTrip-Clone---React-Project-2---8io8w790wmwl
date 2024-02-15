import { useState, useEffect } from "react";
import axios from "axios";
import IndividualFlightCard from "./DetailPages/FlightSection/IndividualFlightCard/IndividualFlightCard";

function Asach() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const fetchFlights = async () => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"DEL","destination":"BLR"}&day=Sun`,
        {
          headers: {
            projectID: "8io8w790wmwl",
          },
        }
      );
      setData(response.data.data?.flights || []);
      console.log(response.data.data?.flights);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  useEffect(() => {
    filterDataByAirline("65144a1b664a43628887c460") ;
    filterDataByAirline("65144a1b664a43628887c45e");
  }, [data]);

  const filterDataByAirline = (airlineId) => {
    if (data) {
      const filtered = data.filter((flight) => flight.airline === airlineId);
      setFilterData(filtered);
    }
  };

  return (
    <div>
      <ul>
        {filterData &&
          filterData.map((flight) => <div key={flight._id}>
          <IndividualFlightCard Flight={flight} />
        </div>)}
      </ul>
    </div>
  );
}

export default Asach;
