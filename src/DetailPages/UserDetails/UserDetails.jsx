import React from 'react'
import "./UserDetails.css"

function UserDetails() {
  return (
    <div className='user-deatils'>
        <h3 className='font-black text-lg font-medium text-left ml-4'>User Details</h3>

        <div className='text-left user-details-text'> 
            <span className='font-black font-semibold'>Important:</span>
            <span className='text-xs ml-2'> Enter name as mentioned on your passport or Government approved IDs.</span>
        </div>

        <div className='userdetails-maindiv'>
            <div className='flex gap-8 border border-black w-3/4 py-2 px-4'>
                    <div className='flex flex-col'>
                    <label htmlFor="name" className='text-left mb-2'>First Name </label> 
                    <input type='name' id='name' required className="name-input" autoComplete='off' placeholder=" Enter First Name" className='border border-black'/>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="name" className='text-left mb-2'>Last Name</label> 
                    <input type='name' id='lastname' className="name-input" required autoComplete='off' placeholder=' Enter Last Name' className='border border-black'/>
                </div>

                <div className='flex items-center gap-6'>
                    <div className='flex'> 
                    <input type='radio' id='gender1' name="gender" value="Male" required autoComplete='off' className='border border-black'/>
                    <label htmlFor="gender1" className='font-semibold ml-1'> Male</label>
                    </div>

                    <div className='flex'>
                    <input type='radio' id='gender2' name="gender" value="Female" required autoComplete='off' className='border border-black'/>
                    <label htmlFor="gender2" className='font-semibold ml-1'> Female</label>
                    </div>
                </div>
            </div>

            <div className='flex gap-8 border border-black w-3/4 py-2 px-4 mt-2'>
                    <div className='flex flex-col'>
                    <label htmlFor="mobile" className='text-left mb-2'>Mobile Number </label> 
                    <input type='phone' id='mobile' required className="name-input" autoComplete='off' placeholder=" Enter 10 digit Number" className='border border-black'/>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="email" className='text-left mb-2'>Last Name</label> 
                    <input type='email' id='email' required className="name-input" autoComplete='off' placeholder=' Enter E-mail' className='border border-black'/>
                </div>

               
                </div>
            </div>
        </div>
  )
}

export default UserDetails