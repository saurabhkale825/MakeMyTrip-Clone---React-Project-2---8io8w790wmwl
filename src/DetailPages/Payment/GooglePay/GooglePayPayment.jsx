import React from 'react'
import "./GooglePayPayment.css"
import Google from "../../../Assest/Logo/Google logo.png"

function GooglePayPayment() {
  return (
    <div className='google-pay-payment'>
      <div className='mt-3'>
        <div>
          <img src={Google} alt='logo' width="50px" />
        </div>
        <div className='mt-3 flex justify-between items-center p-2'>
        <div>
          <label htmlFor='upiId' className='text-base font-medium text-black mb-2'>Enter UPI ID</label><br/>
        <input type='email' id="upiId" placeholder='userName@upi' required  className='border border-grey p-2'/>
        </div>
        <div className='primary-btn'>Verify & Pay</div>
        </div>
      </div>
      
      <div className="px-5 text-left mt-6">
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
  )
}

export default GooglePayPayment