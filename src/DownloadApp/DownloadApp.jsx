import React, { useState } from 'react'
import "./DownloadApp.css"
import logo from "../Assest/Logo/app-sprite (1) (4).png"
import scanner from "../Assest/Logo/app-sprite (1) (3).png"
import googleplay from "../Assest/Logo/app-sprite (1) (2).png"
import applestore from "../Assest/Logo/app-sprite (1) (1).png"
import flag from "../Assest/Logo/—Pngtree—the national flag of india_5934004.png";
import { Link } from 'react-router-dom'

function DownloadApp() {

    const [phoneNumber , setPhoneNumber] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (/^[0-9]*$/.test(value)) {
         setPhoneNumber(e.target.value);
        }
      };

  return (
    <div className='download-app'>
        <div className='download-app-left'>
            <div className='w-full h-1/2  flex'>
                <div className=' w-1/8 lg:w-20'>
                <img src={logo} alt='logo' width="50px" />
                </div>
                <div className=' w-4/5  text-left'>
                    <h2 className='lg:text-3xl text-xl text-black font-semibold mt-2'>Download App Now!</h2>
                    <p className='text-medium ml-1'>
                        <span>Use code </span>
                        <span className='text-black font-semibold uppercase'>Welcomemmt</span>
                        <span> and get</span>
                        <span className='text-black font-semibold uppercase'> Flat 12%</span>
                        <span>OFF* on your first domestic flight booking. </span>
                        </p>
                </div>
            </div>
            <div className=' h-1/2 flex justify-start items-center'>
                <div className='md:w-1/2 w-2/3 h-1/2 border border-black flex  items-center lg:ml-20 ml-12  px-2'>
                    <span><img src={flag} alt='logo' width="25px<"/> </span>
                    <span className='text-base '> +91-</span>
                    <span>
                    <input
                type="text"
                id="mobile-homepage"
                name="phoneNumber"
                maxLength="10"
                required
                value={phoneNumber}
                autoComplete="off"
                onChange={handleChange}
                pattern="[0-9]*"
                inputMode="numeric"
              />
                    </span>

                </div>
               
                <div className='md:w-40 w-1/3 h-1/2 border border-blue-500 flex justify-center items-center lg:text-base  font-semibold text-blue-500 cursor-pointer '> 
                <Link to="/error"> Get App Link </Link></div>
                
            </div>
        </div>

        <div className='download-app-right lg:ml-24'>
            <div>
                <img src={googleplay} alt='logo' width="120px"/>
                <img src={applestore} alt='logo' width="120px"/>
            </div>

            <div>
                <img src={scanner} alt='logo' width="120px" />
            </div>
        </div>
    </div>
  )
}

export default DownloadApp