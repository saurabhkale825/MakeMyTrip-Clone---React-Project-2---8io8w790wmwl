import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "../Context/MyContext";
import FlightContext from "../Context/FlightsContext";
import HotelContext from "../Context/HotelContext";
import TrainContext from "../Context/TrainContext";
import HomePage from "../Homepage/HomePage";
import HotelHomepage from "../Homepage/HotelHomePage/HotelHomepage";
import TrainHomePage from "../Homepage/TrainHomePage/TrainHomePage";
import BusHomePage from "../Homepage/BusesHomePage/BusHomePage";
import FlightsDetails from "../DetailPages/FlightSection/FlightsDetails";
import Login from "../Login/Login";
import Calender from "../Calender/Calender";
import TravellerSection from "../Homepage/FlightsHomePage/TrvellerSection/TravellerSection";
import BusesDetails from "../Homepage/BusesHomePage/BusesDetails";
import AirportList from "../Homepage/FlightsHomePage/AirportList/DepartureAirPortList";
import BookNowPage from "../DetailPages/FlightSection/BookNowPage/BookNowPage";
import HotelDetails from "../DetailPages/HotelSection/HotelDetails";
import SourceTrainStationList from "../Homepage/TrainHomePage/SourceTrainStationList";
import TrainDetails from "../DetailPages/TrainSection/TrainDetails";


function LandingPage() {
  const [mode, setMode] = useState("Flights");
  const[login , setLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [traveller, setTraveller] = useState(1);
  const [selectedClass, setSelectedClass] = useState("economy");
  const [showTravellerSection, setShowTravellerSection] = useState(false);
  const [departureCity, setDepartureCity] = useState("Mumbai");
  const [arrivalCity, setArrivalCity] = useState("Bengaluru");
  const [departureCityAirportId, setDepartureCityAirportId] = useState("");
  const [arrivalCityAirportId, setArrivalCityAirportId] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [day, setDay] = useState("");
  const [airportList, setAirportList] = useState([]);
  const [showDepartureAirportList, setShowDepartureAirportList] = useState(false);
  const [showArrivalAirportList, setShowArrivalAirportList] = useState(false);
  const [location , setLocation] = useState("Mumbai");
  const [ checkin , setCheckin] = useState(new Date());
  const [checkout , setCheckout] = useState(new Date);
  const [source , setSource] = useState("Delhi Junction");
  const [destination , setDestination]= useState("Surat");
  const [travelDate , setTravelDate] = useState(new Date());
  
  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{
          mode,
          setMode,
          login,
          setLogin,
          showLogin, 
          setShowLogin, 
          showTravellerSection,
          setShowTravellerSection,
        }}
      >
        <FlightContext.Provider
          value={{
            departureCity,
            setDepartureCity,
            arrivalCity,
            setArrivalCity,
            startDate,
            setStartDate,
            traveller,
            setTraveller,
            selectedClass,
            setSelectedClass,
            departureCityAirportId,
            setDepartureCityAirportId,
            arrivalCityAirportId,
            setArrivalCityAirportId,
            day,
            setDay,
            airportList,
            setAirportList,
            showDepartureAirportList,
            setShowDepartureAirportList,
            showArrivalAirportList,
            setShowArrivalAirportList,
          }}
        >

           <HotelContext.Provider
          value={{
            location,
            setLocation,
            checkin,
            setCheckin,
            checkout,
            setCheckout

          }}
        >

          <TrainContext.Provider
            value={{
              source,
              setSource,
              destination,
              setDestination,
              travelDate,
              setTravelDate
            }}
          >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/flights/details" element={<FlightsDetails />} />
            <Route path="/hotels" element={<HotelHomepage />} />
            <Route path="/trains" element={<TrainHomePage />} />
            <Route path="/buses" element={<BusHomePage />} />
            <Route path="/datepicker" element={<Date />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/traveller" element={<TravellerSection />} />
            <Route path="/buses/details" element={<BusesDetails />} />
            <Route path="/airports" element={<AirportList />} />
            <Route path="/flight-book-now" element={<BookNowPage/>} />
            <Route path="/hotels/details" element={<HotelDetails /> }/>
            <Route path="/trains/details" element={<TrainDetails/>} />
            <Route path="/asach" element={<SourceTrainStationList/>} />
          </Routes>
          </TrainContext.Provider>
          </HotelContext.Provider> 
        </FlightContext.Provider>

       
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default LandingPage;
