import React, { useCallback, useContext } from 'react'
import "./TrainSearchNav.css"
import TrainContext from "../../../Context/TrainContext"
import { format } from "date-fns";

function TrainSearchNav() {


    const{source , destination , travelDate} = useContext(TrainContext);

    const FormatedDate = (date) => format(date, "dd MMM''yy");

  return (
    <>
    <div className='hotel-search-nav'>
        <div className='hotel-search-nav-location-inputbox'>
        <div className='flex-col '>
                <div className='search-nav-label' >
                <span >From City</span>
                </div>
                <div className='text-white font-bold text-xl text-left ml-2'>{source}</div>
            </div>
        </div>

        <div className="hotel-search-nav-location-inputbox">
        <div className='flex-col '>
                <div className='search-nav-label' >
                <span >To City</span>
                </div>
                <div className='text-white font-bold text-xl text-left ml-2'>{destination}</div>
            </div>
        </div>

        <div className='hotel-search-nav-checkin-inputbox'>
        
        <div className='flex-col '>
                <div className="search-nav-label">Travel Date</div>
                <div className='text-white font-bold text-xl text-left ml-2 mt-2'>{FormatedDate(travelDate)}</div>
           </div>
        </div>
    </div>
    </>
  )
}

export default TrainSearchNav