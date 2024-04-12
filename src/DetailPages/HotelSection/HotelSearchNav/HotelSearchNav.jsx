import React, { useContext, useState } from 'react'
import "./HotelSearchNav.css";
import HotelContext from "../../../Context/HotelContext"
import { format } from "date-fns";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



function HotelSearchNav() {
    const {location, setLocation , checkin , checkout } = useContext(HotelContext);
    // const [selectedInput , setSelectedInput] = useState(false);

    // const HandleChangeLocation = (e) =>{
    //     setTimeout((setLocation(e.target.value))),500
    // }

    const FormatedDate = (date) => format(date, "dd MMM''yy");

  return (
    <div className='hotel-search-nav'>
        <div className='hotel-search-nav-location-inputbox'>
            <div  className='flex-col '>
                <div className='search-nav-label' >
                <span >City , area or property</span>
                <span><KeyboardArrowDownIcon /></span>
                </div>
                <div className='text-white font-bold text-xl text-left ml-2 capitalize'>{location}</div>
            </div>
            {/* {selectedInput === true ?<div>
                <input type='name'
                    value={location}
                    // onChange={(e) => HandleChangeLocation(e)}
                    autoComplete='off'
                    className='hotel-search-nav-input-container'
                ></input>
            </div>:null} */}
        </div>

        <div className='hotel-search-nav-checkin-inputbox'>
        
        <div className='flex-col '>
                <div className="search-nav-label">Check-In</div>
                <div className='text-white font-bold text-xl text-left ml-2 mt-2'>{FormatedDate(checkin)}</div>
           </div>
        </div>
        
        <div className='hotel-search-nav-checkout-inputbox'>
        <div className='flex-col '>
                <div className="search-nav-label">Check-Out</div>
                <div className='text-white font-bold text-xl text-left ml-2 mt-2'>{FormatedDate(checkout)}</div>
           </div>
        </div>
        <div className='hotel-search-nav-room-inputbox'>
        <div  className='flex-col ' >
                <div className="search-nav-label">Rooms</div>
                <div className='text-white font-bold text-sm text-left ml-2 mt-3'> 1 Rooms 2 Adults </div>
           </div>
        </div>

        

    </div>
  )
}

export default HotelSearchNav