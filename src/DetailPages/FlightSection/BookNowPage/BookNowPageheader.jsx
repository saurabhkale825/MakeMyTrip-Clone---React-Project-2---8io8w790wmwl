import React from 'react'
import "./BookNowPageheader.css"


function BookNowPageheader() {
  return (
    <div className='pageStickyHder '>
        <h2 className='text-white font-bold lg:text-xl md:text-lg text-sm text-left w-1/4 '>Complete your booking</h2>
        <div className='w-3/4 sm:block hidden'>
            <ul className='flex justify-end gap-2 text-xs '>
                <li>Flights Summary</li>
                <li>.</li>
                <li>Travel Insurance</li>
                <li>.</li>
                <li>Traveller Details</li>
                <li>.</li>
                <li>Seats & Meals</li>
                <li>.</li>
                <li>Add-ons</li>
            </ul>
        </div>
    </div>
  )
}

export default BookNowPageheader