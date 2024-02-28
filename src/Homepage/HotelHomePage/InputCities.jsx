import { useState , useEffect, useContext } from 'react'
import "./InputCities.css"
import axios from 'axios';
import HotelContext from '../../Context/HotelContext';

function InputCities() {

  const[data , setData] = useState([]);
  const [cities , setCities] = useState("");
  const{setLocation , setShowInputCities } = useContext(HotelContext);

  const updateLocation = (city) => {
    setLocation(city.split(",")[0]);
    setShowInputCities(false);
  }


  const FetchCities = async() => {
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/bookingportals/city`,
      {
        headers: {
          projectID: "8io8w790wmwl",
        },
      }
    )   
    setData(response.data?.data.cities);
    console.log(response.data?.data.cities);
  }

  useEffect(() => {
    FetchCities();
  }, []);

  return (
    <div className='input-cities'>
      <ul>
        {data?.map((item) => (
          <li key={item._id} className='individual-city-container' onClick={() => updateLocation(item.cityState) }>{item.cityState}</li>
        ))}
      </ul>
    </div>
  )
}

export default InputCities