import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./HotelBookingPage.css";
import axios from "axios";
import UserDetails from "../../UserDetails/UserDetails";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HotelContext from "../../../Context/HotelContext";
import CircleIcon from '@mui/icons-material/Circle';
import CloseIcon from '@mui/icons-material/Close';
import { red } from '@mui/material/colors';

function HotelBookingPage() {
  const [hotel, setHotel] = useState({});
  const { itemId } = useParams();
  const { hotelPrice, hotelTax } = useContext(HotelContext);

  useEffect(() => {
    localStorage.setItem('value',"hotel")
}, []);


  const FetchIndiHotel = async () => {
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/bookingportals/hotel/${itemId}`,
      {
        headers: {
          projectID: "8io8w790wmwl",
        },
      }
    );
    // console.log(response.data);
    setHotel(response?.data);
  };

  useEffect(() => {
    FetchIndiHotel();
  }, []);

  return (
    <div className="hotel-booking-page">
      <div className="hotel-booking-page-header">
        <div className="text-2xl font-bold text-white ">
          Review your Booking
        </div>
      </div>

      <div className="hotel-booking-page-container">
        <div className="hotel-booking-page-info">
          <div className="w-3/5 ">
            <div className="p-2 ml-2 flex justify-between ">
              <div >
                <h3 className="font-semibold text-black hotel-booking-page-name">
                  {hotel?.data?.name}
                </h3>
                <div className="my-1  hotel-booking-page-location">{hotel?.data?.location}</div>
                <div className="hotel-booking-page-hard-text">
                  <div>
                  <span>
                    <StarIcon sx={{ fontSize: 16 }} />
                  </span>
                  <span>
                    <StarIcon sx={{ fontSize: 16 }} />
                  </span>
                  <span>
                    <StarIcon sx={{ fontSize: 16 }} />
                  </span>
                  <span>
                    <StarIcon sx={{ fontSize: 16 }} />
                  </span>
                  <span>
                    <StarBorderIcon sx={{ fontSize: 16 }} />
                  </span>
                  </div>

                  {hotel?.data?.houseRules.guestProfile
                    .unmarriedCouplesAllowed === true ? (
                    <span className="w-fit border border-black px-2 bg-gray-500  text-white rounded-xl  hotel-booking-page-nature">
                      Couple Friendly
                    </span>
                  ) : null}
                </div>
              </div>

              <img
                src={hotel?.data?.images[0]}
                alt="logo"
                width="100px"
                height="100px"
                className="object-center object-cover"
              />
            </div>

            <div className="border-black border rounded-xl lg:w-1/2 w-full">
              <h4 className="ml-2 mt-1 lg:text-lg text-sm font-medium text-red-500">Important information</h4>
              <div className="ml-2 p-1 flex gap-x-8">
                <span><CircleIcon sx={{fontSize : 8}} /></span>
                <span className="ml-1 lg:text-sm text-xs">Room only</span>
              </div>

              <div className="ml-2 p-1 flex gap-x-8">
                <span><CircleIcon sx={{fontSize : 8}} /></span>
                <span className="ml-1 lg:text-sm text-xs">No meals included</span>
              </div>

              <div className="ml-2 p-1 flex gap-x-6">
                <span><img src="https://promos.makemytrip.com/Hotels_product/Inclusions/Icons/Food&Beverage_F&BServices.png" alt="logo" width="20px"/></span>
                <span className="lg:text-sm text-xs">20 % Discount On F&B Services</span>
              </div>
              
              <div className="ml-2 p-1 flex gap-x-6">
                <span><CloseIcon sx={{fontSize : 14 , color: red[500]}} /></span>
                <span className="ml-1 lg:text-sm text-xs">Non-Refundable</span>
              </div>
              
            </div>
          </div>

          <div className="w-2/6 p-2 ml-2 border border-black h-fit rounded">
            <h3 className="lg:text-base text-xs lg:font-semibold  font-medium text-black">
              Price Breakup
            </h3>

            <div className="flex justify-between items-center mt-2 border-b border-black px-2">
              <div>
                <p className="lg:font-semibold font-medium lg:text-base text-xs" >1 Room x 1 Night</p>
                <p className="text-xs hotel-homepage-base-price">Base Price</p>
              </div>

              <div className="lg:text-lg  text-xs lg:font-semibold text-black">
                {`₹ ${hotelPrice}`}
              </div>
            </div>

            <div className="flex justify-between items-center mt-2 border-b border-black px-2">
              <div>
                <p className="lg:font-semibold text-xs">Hotel Taxes </p>
                
              </div>

              <div className="lg:text-lg  text-xs lg:font-semibold text-black">
                {`₹ ${hotelTax}`}
              </div>
            </div>

            <div className="flex justify-between items-center mt-2 bg-slate-300 py-1 px-2">
              <div>
                <p className="lg:font-semibold text-xs">Total Amount to be paid </p>
              </div>

              <div className="lg:text-lg  text-xs lg:font-semibold text-black">
                {`₹ ${hotelPrice + hotelTax}`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserDetails />
    </div>
  );
}

export default HotelBookingPage;
