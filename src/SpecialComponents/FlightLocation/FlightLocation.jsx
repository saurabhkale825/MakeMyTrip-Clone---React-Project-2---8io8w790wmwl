import React from 'react'
import "./FlightLocation.css"
import { Link } from 'react-router-dom'

function FlightLocation() {

    const data = [
        {
            img : "http://promos.makemytrip.com/images/50x50-Other-23052019.png",
            location : "Chennai",
            text: "Via - Delhi, Mumbai, Coimbatore, Madurai"
        },
        {
            img: "https://promos.makemytrip.com/store/GoaDT.JPG",
            location:"Goa",
            text:"Via- Delhi, Mumbai, Bangalore, Ahemdabad"
        },
        {
            img: "https://promos.makemytrip.com/store/MumbaiDT.JPG",
            location:"Mumbai",
            text:"Via- Delhi, Bangalore, Chennai, Ahmedabad"
        },
        {
            img: "http://promos.makemytrip.com/images/50x50-Ooty-23052019.png",
            location:"Hyderabad",
            text:"Via- Chennai, Mumbai, Bangalore, Delhi"
        },
        {
            img: "https://promos.makemytrip.com/store/DelhiDT.JPG",
            location:"Delhi",
            text:"Via- Mumbai, Pune, Bangalore, Chennai"
        },
        {
            img: "https://promos.makemytrip.com/store/PuneDT.JPG",
            location:"Pune",
            text:"Via- Delhi, Bangalore, Chennai, Ahmedabad"
        },
        {
            img: "https://promos.makemytrip.com/store/SingaporeDT.JPG",
            location:"Kolkata",
            text:"Via- Delhi, Mumbai, Bangalore, Pune"
        },
        {
            img: "https://promos.makemytrip.com/store/BangaloreDT.JPG",
            location:"Bangalore",
            text:"Via- Delhi, Pune, Mumbai, Kolkata"
        },
        {
            img: "https://promos.makemytrip.com/store/JaipurDT.JPG",
            location:"Jaipur",
            text:"Via- Mumbai, Delhi, Pune, Bangalore"
        }
    ]
  return (
    
        <div className="flight-location">
      {data.map((item, index) => (
        <div className="h-20  flex pl-2 cursor-pointer" key={index}>
            
          <div
            className="w-1/4 flex justify-center items-center mt-4 "
            style={{
              backgroundImage: `url(${item.img}`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "50px",
              height: "50px",
              borderRadius : "50%"
            }}
          >
          </div>
          <div className="w-3/4 text-left flex flex-col justify-center lg:ml-1 ml-1">
            <div className="text-black lg:text-lg text-sm font-semibold  ">
            <Link to={"/error"}> {item.location} </Link>
            </div>
            <p className="text-s">
            <Link to={"/error"}> {item.text} </Link></p>
          </div>
          
        </div>
      ))}
    </div>
    
  )
}

export default FlightLocation