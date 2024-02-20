import React, { useContext } from 'react'
import "./TrainStationList.css"
import TrainContext from "../../Context/TrainContext"

function DestinationTrainStationList() {

    const {setDestination} = useContext(TrainContext);

    const cities = [
        { JunctionName: "Delhi Junction" },
        { JunctionName: "Salem Junction" },
        { JunctionName: "Hubli Junction" },
        { JunctionName: "Surat" },
        { JunctionName: "Udaipur" },
        { JunctionName: "Katpadi Junction" },
        { JunctionName: "Vadodara Junction" },
        { JunctionName: "Kanpur" },
        { JunctionName: "Dhanbad Junction" },
        { JunctionName: "Kharagpur Junction" },
        { JunctionName: "Manmad Junction" },
        { JunctionName: "Indore Junction" },
        { JunctionName: "Vijayawada Junction" },
        { JunctionName: "Chandigarh" },
        { JunctionName: "Gorakhpur Junction" },
        { JunctionName: "Gwalior Junction" },
        { JunctionName: "Ghaziabad Junction" },
        { JunctionName: "Agra Cantonment" },
        { JunctionName: "Allahabad Junction" },
        { JunctionName: "Ambala Cantonment" },
        { JunctionName: "Warangal" },
        { JunctionName: "Bhusaval Junction" },
        { JunctionName: "Howrah Junction" },
        { JunctionName: "Thrissur" },
        { JunctionName: "Yesvantpur Junction" },
        { JunctionName: "Visakhapatnam Junction" },
        { JunctionName: "Asansol Junction" },
        { JunctionName: "Nagpur Junction" },
        { JunctionName: "Ahmedabad Junction" },
        { JunctionName: "Visakhapatnam Junction" },
        { JunctionName: "Coimbatore Junction" },
        { JunctionName: "Thiruvananthapuram Central" },
      ];

  return (
    <div className='train-station'>
        <ul>
            {cities.map((item , index) => (
                <li className='individual-station' onClick={() => setDestination(item.JunctionName)} key={index}>{item.JunctionName} </li>
            ))}
        </ul>
    </div>
  )
}

export default DestinationTrainStationList