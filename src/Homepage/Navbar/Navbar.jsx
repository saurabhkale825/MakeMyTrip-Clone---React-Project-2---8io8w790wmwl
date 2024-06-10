import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Flights from "../../Assest/Logo/Flight.png";
import FlightSelected from "../../Assest/Logo/Fights-selected.png";
import Hotels from "../../Assest/Logo/Hotels.png";
import HotelSelected from "../../Assest/Logo/Hotels-selected.png";
import HomeVillas from "../../Assest/Logo/Homevillas.png";
import HomeVillasSelected from "../../Assest/Logo/HomeVillas-selected.png";
import Trains from "../../Assest/Logo/Trains.png";
import TrainsSelected from "../../Assest/Logo/Trains-selected.png";
import Buses from "../../Assest/Logo/Buses.png";
import BusesSelected from "../../Assest/Logo/Buses-selected.png";
import Cabs from "../../Assest/Logo/Cabs.png";
import cabsSelected from "../../Assest/Logo/Cabs-selected.png";
import ForexCard from "../../Assest/Logo/Forex-card.png";
import ForexCardSelected from "../../Assest/Logo/Forex-card-selected.png";
import TravelInsurance from "../../Assest//Logo/Travel-insurance.png";
import TravelInsuranceSelected from "../../Assest/Logo/Travel-insurance-selected.png";
import Holiday from "../../Assest/Logo/Holiday-package.png";
import HolidaySelected from "../../Assest/Logo/Holiday-package-selected.png";
import MyContext from "../../Context/MyContext";

function Navbar() {
 const{mode,setMode} = useContext(MyContext);

 useEffect(() => {
  sessionStorage.setItem("mode",mode); 
 }, [mode]
);

  useEffect(() => {
    setMode(sessionStorage.getItem("mode"));
  }, []);

  return (
    <div className="navbar">
      <ul className="navbar-list">
        
        <li className="individual-nav" onClick={() => setMode("Flights")}>
         <Link to={"/"}>
         <div>
         
          {mode === "Flights" ? (
            <img
              src={FlightSelected}
              alt="flights"
             
            />
          ) : (
            <img src={Flights} alt="flights"  />
          )}
          
          <p className={(mode==="Flights"?"nav-text-selected":"nav-text")}>Flights</p>
          </div>
          </Link>

        </li>
        

        
        
          
        <li className="individual-nav"
          onClick={() => setMode("Hotels")}>
            <Link to={"/hotels"}>
            <div>
        {mode === "Hotels" ? (
            <img
              src={HotelSelected}
              alt="flights"
              width="32px"
              height="22px"
            />
          ) : (
            <img src={Hotels} alt="flights" width="32px" height="22px" />
          )}
          <p className={(mode==="Hotels"?"nav-text-selected":"nav-text")}>Hotels</p>
          </div>
          </Link>
        </li>
        
      
        <li className="individual-nav" onClick={() => setMode("HomeVillas")}>
          <Link to={'/comingsoon'}>
          <div>
        {mode === "HomeVillas" ? (
            <img
              src={HomeVillasSelected}
              alt="flights"
              width="32px"
              height="22px"
            />
          ) : (
            <img src={HomeVillas} alt="flights" width="32px" height="22px" />
          )}
          <p className={(mode==="HomeVillas"?"nav-text-selected":"nav-text")}>Homestays & Viilas</p>
          </div>
          </Link>
        </li>

        <li className="individual-nav" onClick={() => setMode("Holiday")}>
          <Link to={"/comingsoon"}>
          <div>
        {mode === "Holiday" ? (
            <img
              src={HolidaySelected}
              alt="flights"
              width="32px"
              height="22px"
            />
          ) : (
            <img src={Holiday} alt="flights" width="32px" height="22px" />
          )}
          <p className={(mode==="Holiday"?"nav-text-selected":"nav-text")}>Holiday Packages</p>
          </div>
          </Link>
        </li>

        <li className="individual-nav" onClick={() => setMode("Trains")}>
        <Link to={"/trains"}>
        <div>
        {mode === "Trains" ? (
            <img
              src={TrainsSelected}
              alt="flights"
              width="32px"
              height="22px"
            />
          ) : (
            <img src={Trains} alt="flights" width="32px" height="22px" />
          )}
          <p className={(mode==="Trains"?"nav-text-selected":"nav-text")}>Trains</p>
          </div>
          </Link>
        </li>

        <li className="individual-nav" onClick={() => setMode("Buses")}>
        <Link to={"/buses"}>
        <div>
        {mode === "Buses" ? (
            <img
              src={BusesSelected}
              alt="flights"
              width="32px"
              height="22px"
            />
          ) : (
            <img src={Buses} alt="flights" width="32px" height="22px" />
          )}
          <p className={(mode==="Buses"?"nav-text-selected":"nav-text")}>Buses</p>
          </div>
          </Link>
        </li>

        <li className="individual-nav" onClick={() => setMode("Cabs")}>
          <Link to={'/comingsoon'}>
        <div>
        {mode === "Cabs" ? (
            <img
              src={cabsSelected}
              alt="flights"
              width="32px"
              height="22px"
            />
          ) : (
            <img src={Cabs} alt="flights" width="32px" height="22px" />
          )}
          <p className={(mode==="Cabs"?"nav-text-selected":"nav-text")}>Cabs</p>
          </div>
          </Link>
        </li>

        <li className="individual-nav" onClick={() => setMode("ForexCard")}>
          <Link to={'/comingsoon'}>
          <div>
        {mode === "ForexCard" ? (
            <img
              src={ForexCardSelected}
              alt="flights"
              width="32px"
              height="22px"
            />
          ) : (
            <img src={ForexCard} alt="flights" width="32px" height="22px" />
          )}
          <p className={(mode==="ForexCard"?"nav-text-selected":"nav-text")}>ForexCard & Currency</p>
          </div>
          </Link>
        </li>

        <li
          className="individual-nav"
          onClick={() => setMode("TravelInsurance")}
        >
          <Link to={'/comingsoon'}>
          <div>
          {mode === "TravelInsurance" ? (
            <img
              src={TravelInsuranceSelected}
              alt="flights"
              width="32px"
              height="22px"
            />
          ) : (
            <img src={TravelInsurance} alt="flights" width="32px" height="22px" />
          )}
          <p className={(mode==="TravelInsurance"?"nav-text-selected":"nav-text")}>Travel Insurance</p>
          </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;