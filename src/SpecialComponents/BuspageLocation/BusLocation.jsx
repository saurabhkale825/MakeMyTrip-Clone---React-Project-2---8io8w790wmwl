import React from 'react'
import "./BusLocation.css"
import { Link } from "react-router-dom";

function BusLocation() {

  const data = [
    {
        img: "https://promos.makemytrip.com/store/BangaloreDT.JPG",
        location : "Bangalore",
        text : "Chennai , Hyderabad , Coimbatore , Mumbai, Goa"
    },
    {
        img: "http://promos.makemytrip.com/images/50x50-Other-23052019.png",
        location : "Chennai",
        text : "Bangalore , Coimbatore , MAdurai , Hyderabadd , Trichy"
    },
    {
        img: "http://promos.makemytrip.com/images/50x50-Ooty-23052019.png",
        location : "Hyderabad",
        text : "Bangalore , Chennai , Mumbai , Pune , Vijayawada"
    },

    {
        img: "https://promos.makemytrip.com/store/PuneDT.JPG",
        location : "Pune",
        text : "Goa, Bangalore , Nagpur , Hyderabad , Mumbai"
    },
    {
        img: "https://promos.makemytrip.com/store/DelhiDT.JPG",
        location : "Delhi",
        text : "Lucknow , Dehradun , Manali , Kanpur , Jaipur"
    },
    {
        img: "https://promos.makemytrip.com/store/MumbaiDT.JPG",
        location : "Mumbai",
        text : "Bangalore , Goa , Pune , Indore , Ahmedabad"
    },
    {
        img: "https://promos.makemytrip.com/store/JaipurDT.JPG",
        location : "Ahmedabad",
        text : "Mumbai, Rajkot , Surat , Pune , Indire"
    },
    {
        img: "http://promos.makemytrip.com/images/50x50-Ooty-23052019.png",
        location : "Coimbatore",
        text : "Chennai , Bangalore , Madurai , Pondicherry , NAgercoil"
    },
    {
        img: "https://promos.makemytrip.com/store/SingaporeDT.JPG",
        location : "Kolkata",
        text : "Durgapur , Asansol , Siliguri , Bhubaneshwar , Bardhaman"
    },
  ]  

  return (
    <div className='bus-location'>
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
            <Link to={"/error"}> {`Buses From ${item.location} To`} </Link>
            </div>
            <p className="text-s">
            <Link to={"/error"}> {item.text} </Link></p>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default BusLocation