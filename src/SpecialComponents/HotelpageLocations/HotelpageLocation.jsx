import React from "react";
import "./HotelpageLocation.css";
import { Link } from "react-router-dom";

function HotelpageLocation() {
  const data = [
    {
      img: "https://promos.makemytrip.com/store/GoaDT.JPG",
      loacation: "Goa",
      text: "Hotels , Budget Hotels , Resorts , Best Hotels, North Goa, Villas",
    },
    {
      img: "https://promos.makemytrip.com/store/DelhiDT.JPG",
      loacation: "Delhi",
      text: "Hotels , Budget Hotels , Resorts , Best Hotels, Near Mumbai Airport",
    },
    {
      img: "https://promos.makemytrip.com/store/BangaloreDT.JPG",
      loacation: "Bangalore",
      text: "Hotels , Budget Hotels , Resorts , Near Airport , Gunhantara Resort",
    },
    {
      img: "https://promos.makemytrip.com/images/50x50-Ooty-23052019.png",
      loacation: "Ooty",
      text: "Hotels , Resorts, Cottges , Budget Hotels, Homestay",
    },
    {
      img: "https://promos.makemytrip.com/store/MumbaiDT.JPG",
      loacation: "Mumbai",
      text: "Hotels , Budget Hotels , Resorts ,Couple Hotels, Near Mumbai Airport",
    },
    {
      img: "https://promos.makemytrip.com/images/50x50-Shimla-23052019.png",
      loacation: "Shimla",
      text: "Hotels , Budget Hotels , Resorts , Best Hotels, Near Mall Road",
    },
    {
      img: "https://promos.makemytrip.com/store/JaipurDT.JPG",
      loacation: "Jaipur",
      text: "Hotels , Budget Hotels , Resorts , Best Hotels, Near Railway Station",
    },
    {
      img: "https://promos.makemytrip.com/images/50x50-Manali-23052019.png",
      loacation: "Manali",
      text: "Hotels , Budget Hotels , Resorts , Best Hotels, Near Mall Road",
    },
    {
      img: "https://promos.makemytrip.com/images/CDN_upload/shutterstock_1892460739.jpg",
      loacation: "Dubai",
      text: "Hotels , Budget Hotels , Resorts , 5 star Hotels, Apart-Hotels , Homestays",
    },
    {
      img: "https://promos.makemytrip.com/images/CDN_upload/popular%20area.jpg",
      loacation: "Singapore",
      text: "Hotels , 5 star Hotels , Little India , Orchard Road, Hostels , Hotels in sentosa",
    },
    {
      img: "https://promos.makemytrip.com/images/CDN_upload/shutterstock_701150233.jpg",
      loacation: "Bangkok",
      text: "Hotels , 3 Star Hotels , 5 Star Hotels , Hostels ,Budget Hotels in Sukhumvit",
    },
    {
      img: "https://promos.makemytrip.com/images/CDN_upload/shutterstock_1008532504.jpg",
      loacation: "Pattaya",
      text: "Hotels , Resorts , Budget Hotels , 5 Star Hotels , Central Pattaya , Beachfront Properties",
    },
    {
      img: "https://promos.makemytrip.com/images/CDN_upload/shutterstock_389416630.jpg",
      loacation: "Phuket",
      text: "Hotels , Resorts , Budget Hotels , Beachfront Properties",
    },
    {
      img: "https://promos.makemytrip.com/images/CDN_upload/shutterstock_1306548694.jpg",
      loacation: "Bali",
      text: "Hotels , Resorts ,5 Star Hotels, Budget Hotels , Villas In Bali, Beach-front Properties",
    },
    {
      img: "https://promos.makemytrip.com/images/CDN_upload/shutterstock_1901686090.jpg",
      loacation: "Maldives",
      text: "Hotels, 3 Star Hotels, Resorts , 5 Star Hotels, 4 Star Hotels , Hotels in Male",
    },
    {
      img: "https://promos.makemytrip.com/images/50x50-Other-23052019.png",
      loacation: "Others",
      text: "Puri Hotels , OYO Delhi , Alleppey Houseboat , Mahabaleshwar Hotels",
    },
  ];

  return (
    <div className="hotelpage-location">
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
            <Link to={"/error"}> {item.loacation} </Link>
            </div>
            <p className="text-s">
            <Link to={"/error"}> {item.text} </Link></p>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default HotelpageLocation;
