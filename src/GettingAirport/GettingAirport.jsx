import axios from "axios";
import { useState, useEffect } from 'react';

function GettingAirport(city) {
  const [airport, setAirport] = useState([]);
  

  useEffect(() => {
    const fetchAirport = async () => {
      try {
        const response = await axios.get(
          `https://academics.newtonschool.co/api/v1/bookingportals/airport?search={"city": "${city}"}`,
          {
            headers: {
              projectID: "8io8w790wmwl",
            },
          }
        );

         setAirport(response.data.data.airports);
         console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching airport:", error);
      }
    };

    fetchAirport();
  }, [city]);

  return (
    {airport}
  );
}

export default GettingAirport;
