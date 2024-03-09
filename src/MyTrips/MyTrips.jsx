import React, { useState , useEffect } from 'react'
import "./MyTrips.css"
import axios from 'axios';

function MyTrips() {

  const [data , setData] = useState([]);

  const user = localStorage.getItem('user-info');
  const userData = user ? JSON.parse(user) : null;
  const token = userData && userData.data ? userData.token : null;

  const FetchMyTrips = async() => {
    const response = await axios.get(`https://academics.newtonschool.co/api/v1/bookingportals/booking/`,{
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "8io8w790wmwl",
      },
  })

    console.log(response.data.data);
    setData(response?.data?.data);
  }

  useEffect(() => {
    FetchMyTrips();
  }, []);

  return (
    <div className='mytrips'>
    {data?.map((item) => (
      <div key={item._id} className='text-black'>{item.flight.airline}</div>
    ))}
  </div>
  )
}

export default MyTrips