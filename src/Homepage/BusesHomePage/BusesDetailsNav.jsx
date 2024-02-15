import React from 'react'
import "./BusesDetailsNav.css"
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

function BusesDetailsNav() {
  return (
    <div className='buses-details-nav'>
        <div className='buses-details-nav-bsw-inner'>
            <div className="bsw-inner-inputbox-start-city">
                <label for="fromCity" className='lbl-input'>From
                    <input id='from' type='text' readOnly value="Delhi" className='bsw-inputField'></input>    
                </label> 
            </div>

            <div className='bsw-inner-swap'><SwapHorizIcon /></div>
            <div className='bsw-inner-inputbox-start-city'>
            <label for="toCity" className='lbl-input'>to
                    <input id='to' type='text' readOnly value="Kanpur" className='bsw-inputField'></input>    
                </label> 
            </div>

            <div className='bsw-inner-inputbox-start-city'>
            <label for="departure" className='lbl-input'>depart
                    <input id='to' type='text' readOnly value="Thu, 25 Jan 2024" className='bsw-inputField'></input>    
                </label> 
            </div>

            <div className='bsw-inner-search'>search</div>
        </div>
    </div>
  )
}

export default BusesDetailsNav