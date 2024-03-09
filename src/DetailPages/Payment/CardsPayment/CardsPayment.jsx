import React from 'react'
import "./CardsPayment.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function CardsPayment() {
  return (
    <div className='cards-payment'>
      <div className='text-left p-5 ml-2'>
        <div className='flex flex-col '>
          <label className='text-base font-semibold text-black'>Card Number</label>
          <input type='text'  placeholder='Enter Your Cards Number Here' minLength="12" maxLength="12"
           required 
          className='border border-gray-400 rounded w-4/5 p-2'/> 
        </div>

        <div className='flex flex-col gap-1'>
          <label className='text-base font-semibold text-black mt-5'>Name on Card</label>
          <input type='text' placeholder='Enter Your Name On Card' required 
          className='border border-gray-400 rounded w-4/5 p-2' /> 
        </div>

        <div className='flex gap-x-4 mt-3' >
          <div >
          <label className='text-base font-semibold text-black mt-5'>Expiry Month & Year</label>
            <div className='flex'>
            <div className='border border-gray-400 rounded w-40 p-2 flex justify-between'>
              <input type='number' min="01" max="12" required placeholder='Month' className='w-2/3 border border-gray-50'></input>
              <p ><KeyboardArrowDownIcon color="primary" /></p>
            </div>
            <div className='border border-gray-400 rounded w-32 p-2 flex justify-between'>
            <input type='number' required placeholder='Year' minLength="4" min="2023" max="2050" className='w-2/3'></input>
              <p><KeyboardArrowDownIcon color="primary" /></p>
            </div>
            </div>
          </div>

          <div>
            <label className='text-base font-semibold text-black mt-5'>Card CVV</label>
            <input type= "text"  maxLength="3" placeholder="Enter Card CVV" 
            className='border border-gray-400 rounded w-40 p-2 flex justify-between'/>
          </div>
        </div>

        <div className='mt-3 flex justify-end mr-8'>
          <div className='primary-btn'>PAY NOW</div>
        </div>

        <div className="px-1 text-left mt-3">
        <div>
          <span>By coninuing to pay, I understand and agree with the </span>
          <span className="text-blue-500">privacy policy</span>
          <span>, the</span>
          <span className="text-blue-500"> user agreement</span>
          <span> and </span>
          <span className="text-blue-500">terms of services</span>
          <span> of makemytrip</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CardsPayment