import React from 'react'
import"./PaymentContainer.css"
import { Link } from 'react-router-dom'

function PaymentContainer() {
  return (
    <div className='payment-container'>
        <h3 className='text-3xl font-semibold w-full mt-5 text-green-500'>Payment Successful !!! </h3>
        <div className='text-lg my-5 text-black font-semibold '> Your Booking is confirmed.</div>
        <Link to={"/mytrips"}>
        <p className='text-base font-medium text-blue-500'>Check your booking here!</p>
        </Link>
    </div>
  )
}

export default PaymentContainer