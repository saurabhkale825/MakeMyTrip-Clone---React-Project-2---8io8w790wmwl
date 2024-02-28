import React from 'react'
import "./UserDetails.css"
import { Link } from 'react-router-dom'

function UserDetails() {
  return (
    <div className='user-deatils'>
        <h3 className='font-black text-lg font-medium text-left ml-4'>User Details</h3>

        <div className='text-left user-details-text'> 
            <span className='font-black font-semibold'>Important:</span>
            <span className='text-xs ml-2'> Enter name as mentioned on your passport or Government approved IDs.</span>
        </div>

        <div className='userdetails-maindiv'>
            <div className='flex gap-8  w-full p-4 indi-box'>
                    <div className='flex flex-col'>
                    <label htmlFor="name" className='text-left mb-2'>First Name </label> 
                    <input type='name' id='name' required className="name-input" autoComplete='off' placeholder=" Enter First Name" />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="name" className='text-left mb-2'>Last Name</label> 
                    <input type='name' id='lastname' className="name-input" required autoComplete='off' placeholder=' Enter Last Name' />
                </div>

                <div className='flex items-center gap-6'>
                    <div className='flex'> 
                    <input type='radio' id='gender1' name="gender" value="Male" required autoComplete='off' />
                    <label htmlFor="gender1" className='font-semibold ml-1'> Male</label>
                    </div>

                    <div className='flex'>
                    <input type='radio' id='gender2' name="gender" value="Female" required autoComplete='off' />
                    <label htmlFor="gender2" className='font-semibold ml-1'> Female</label>
                    </div>
                </div>
            </div>

            <div className='flex gap-8  w-full p-4 mt-2 indi-box '>
                    <div className='flex flex-col'>
                    <label htmlFor="mobile" className='text-left mb-2'>Mobile Number </label> 
                    <input type='tel' id='mobile' required className="name-input" autoComplete='off' placeholder=" Enter 10 digit Number" />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="email" className='text-left mb-2'>E-mail Address</label> 
                    <input type='email' id='email' required className="name-input" autoComplete='off' placeholder=' Enter E-mail' />
                </div>
                </div>

                <div className=' w-full p-4 mt-2 indi-box'>
                    <h3 className='flex mb-3 items-center'>
                        <span className='font-semibold text-lg'>Your pincode and state</span>
                        <span className='ml-1 text-xs'>(Required for generating your invoice. You can edit this anytime later in your profile section.)</span>
                    </h3>
                    <div className='flex gap-8'>
                    <div className='flex flex-col'>
                    <label htmlFor="pincode" className='text-left mb-2'>PinCode </label> 
                    <input type='text'  id="pincode" required className="name-input" autoComplete='off' placeholder=" Enter Pincode" />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="state" className='text-left mb-2'>State</label> 
                    <input type='email' id='state' required className="name-input" autoComplete='off' placeholder=' State' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="address" className='text-left mb-2'>Address</label> 
                    <input type='text' id='address' required className="name-input" autoComplete='off' placeholder=' Enter Address' />
                </div>
                </div>
                </div>
                <Link to={"/payment"}>
                <div className='userdetails-submit-button'>Continue</div>
                </Link>
            </div>
        </div>
  )
}

export default UserDetails