import React, { useContext } from 'react'
import "./BusStand.css"
import BusContext from '../../Context/BusContext';

function DestinationBusStand() {

    const {setBusDestination}= useContext(BusContext)

    const BusStands = [
        { busStand: "Mumbai" },
        { busStand: "Delhi" },
        { busStand: "Bangalore" },
        { busStand: "Kolkata" },
        { busStand: "Chennai" },
        { busStand: "Hydrabad" },
        { busStand: "Pune" },
        { busStand: "Ahamedabad" },
        { busStand: "Surat" },
        { busStand: "Jaipur" },
        { busStand: "Lucknow" },
        { busStand: "Nagpur" },
        { busStand: "Thane" },
        { busStand: "Bhopal" },
        { busStand: "Vishakhapatnam" },
        { busStand: "Patna" },
        { busStand: "Vadodara" },
        { busStand: "Ludhiana" },
        { busStand: "Agra" },
        { busStand: "Nashik" },
        { busStand: "Faridabad" },
        { busStand: "Rajkot" },
        { busStand: "Varanasi" },
        { busStand: "Dhanabad" },
        { busStand: "Jadhpur" },
        { busStand: "Raipur" },
        { busStand: "Coimbadore" },
        { busStand: "Jabalpur" },
        { busStand: "Vijaywada" },
        { busStand: "Kanpur" },
        { busStand: "Indore" },
        { busStand: "Pimpri-Chinchwad" },
        { busStand: "Gaziabad" },
        { busStand: "Merrut" },
        { busStand: "Kalyan-Dombivali" },
        { busStand: "Vasai-Virar" },
        { busStand: "Srinagar" },
        { busStand: "Amristar" },
        { busStand: "Allahabad" },
        { busStand: "Gwalior" },
      ];


  return (
    <div className='bus-stand'>
        <ul>
            {BusStands.map((item , index) => (
                <li className='individual-stand' onClick={() => setBusDestination(item.busStand)} key={index}>{item.busStand} </li>
            ))}
        </ul>
    </div>
  )
}

export default DestinationBusStand