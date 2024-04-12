import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { format } from "date-fns";

function TripContainer(trip) {
    const FormatedDate = (date) => format(date, "dd MMM'' yy");

    const Date = trip.trip.start_date;

    console.log(Date.slice(0,10));
    // console.log(trip.trip.start_date);

  return (
    <div className='trip-container mt-3'>
              <div className='flex justify-left items-center gap-x-40 items-center trip-individual-container'> 
                <BookmarkIcon />
                <div className='flex justify-between  items-center gap-x-5'>
                  <span className='text-blue-500 text-lg font-semibold capitalize mr-8'>{trip.trip.booking_type}</span>
                  <span >
                    <p >Travel Date:</p>
                    <p className='font-semibold'>{Date.slice(0,10)}</p>
                  </span>

                  <span >
                    <p >End Date:</p>
                    <p className='font-semibold'>{trip.trip.end_date.slice(0,10)}</p>
                  </span>
                  </div>

                  <div className='text-base fomt-medium '>
                    <p>Status:</p>
                    <p className='font-semibold capitalize'>{trip.trip.status}</p>
                  </div>
              </div>
            </div>
  )
}

export default TripContainer