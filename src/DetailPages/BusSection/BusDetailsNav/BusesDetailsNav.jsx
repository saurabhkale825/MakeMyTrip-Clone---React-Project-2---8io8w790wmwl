import React, { useContext } from 'react'
import "./BusesDetailsNav.css"
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import BusContext from '../../../Context/BusContext';
import { format } from "date-fns";

function BusesDetailsNav() {

    const {busSource, setBusSource , busDestination , setBusDestination , busTravelDate , setBusTravelDate} = useContext(BusContext);

    const FormatedDate = (travelDate) => format(travelDate, "dd MMM'' yy");
  return (
    <div className='buses-details-nav'>
        <div className='buses-details-nav-bsw-inner'>
            <div className="bsw-inner-inputbox-start-city">
                <div className='lbl-input'>From</div> 
                <div  className='bsw-inputField'>{busSource}</div>
            </div>

            <div className='bsw-inner-swap'><SwapHorizIcon /></div>
            <div className='bsw-inner-inputbox-start-city'>
            <div className='lbl-input'>To</div> 
                <div  className='bsw-inputField'>{busDestination}</div>
            </div>

            <div className='bsw-inner-inputbox-start-city'>
            <div className='lbl-input'>Departs</div> 
                <div  className='bsw-inputField'>{FormatedDate(busTravelDate)}</div>
            </div>
        </div>
    </div>
  )
}

export default BusesDetailsNav