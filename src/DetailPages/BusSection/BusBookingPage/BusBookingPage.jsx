import React, { useState, useEffect } from "react";
import "./BusBookingPage.css";
import NavbarDetails from "../../../Homepage/Navbar/NavbarDetails";
import UserDetails from "../../UserDetails/UserDetails";
import { useParams } from "react-router-dom";
import axios from "axios";
import StarIcon from '@mui/icons-material/Star';
import { grey } from '@mui/material/colors';
import Primo from "../../../Assest/Logo/primo.png"

function BusBookingPage() {
  const { itemId } = useParams();
  const [bus, setBus] = useState({});

  useEffect(() => {
      localStorage.setItem('value',"bus")
  }, []);


  const FetchBus = async () => {
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/bookingportals/bus/${itemId}`,
      {
        headers: {
          projectID: "8io8w790wmwl",
        },
      }
    );
      // console.log(response?.data);
      setBus(response?.data.data);
  };
  useEffect(() => {
    FetchBus();
  }, []);

  


  
  return (
    <div className="bus-booking-page">
      <NavbarDetails />
      
      <div className="bus-booking-page-header">
        <div className="text-2xl font-bold text-white ml-2">
          Complete your booking
        </div>
      </div>

      <div className="bus-booking-page-container">
            <div className="w-3/5 px-2 py-4">
                <div className="flex justify-between">
                    <div className="w-2/3 border  text-left p-2">
                        <div className="text-xl font-semibold text-black ">{bus.name}</div>
                        <p className="text-xs ml-1">
                            <span>{bus.type}</span>
                            <span className="ml-2">Seater/Sleeper (2+1)</span>
                            </p>
                    </div>
                    <div className="w-1/4 mr-2  text-right p-2 font-semibold">
                        <p>Seat No: 06</p>
                    </div>
                </div>

                <div className="w-full h-10 bg-gray-200 mt-2 flex justify-between items-center">
                    <div className="flex">
                    <div className="ml-2 bg-cyan-600 px-2">
                        <span><StarIcon  sx={{fontSize : 12 , color : grey[50]}} /></span>
                        <span className="ml-1 text-white font-semibold">4.6</span>
                    </div>
                    <div className="ml-2 text-black">601 Ratings</div>
                    </div>

                    <div><img src={Primo} alt="logo" width="80px" /></div>
                </div>

                <div className="flex items-center border mt-5 ">
                    <div className="w-2/5">
                        <p className="text-black font-semibold ">{bus.departureTime}</p>
                        <div>{bus.source}</div>
                    </div>

                    <div className="border border-black p-1 w-fit h-fit ">8 h 40 min</div>

                    <div className="w-2/5">
                        <p className="text-black font-semibold ">{bus.arrivalTime}</p>
                        <div>{bus.destination}</div>
                    </div>
                </div>
            </div>

            <div className="w-1/3 border border-black rounded-xl p-3 text-left h-fit relative top-5 right-5 ">
                <h3 className="text-lg font-semibold text-black border-b border-black">Price Breakup</h3>

                <div className="w-full py-3 flex justify-between border-b border-zinc-400 px-2">
                    <div>Base Fare</div>
                    <div className="text-sm font-semibold text-black">{`₹${bus.fare}`}</div>
                </div>

                <div className="w-full py-3 flex justify-between bg-gray-100 px-2">
                    <div className="text-black font-semibold">Total Amount</div>
                    <div className="text-base font-semibold text-black">{`₹${bus.fare}`}</div>
                </div>
            </div>
      </div>
      
      <div className="w-4/5 m-auto h-16 border bg-primo text-left">
        <div className="flex items-center ">
            <div><img  src="https://jsak.mmtcdn.com/bus_cdn_dt/static/media/double_tick_white.8b9d3d2b.svg" alt="logo" width="15px"/></div>
            <div className="flex text-white items-center text-sm text-left  ml-3">
                <p>You have selected a</p>
                <p className="ml-1"><img src="https://jsak.mmtcdn.com/bus_cdn_dt/static/media/bus_primo_transparent.4fc16f60.svg" alt="logo" width="40px" /></p>
                <p className="ml-1">bus for travel.</p>
            </div>
        </div>

        <div className="ml-7 text-white">This bus is best-in-class when it comes to comfort ans amenities.</div>
      </div>
      <UserDetails />
    </div>
  );
}

export default BusBookingPage;
