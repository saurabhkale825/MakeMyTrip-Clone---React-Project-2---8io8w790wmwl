import React, { useState , useEffect } from "react";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import MyContext from "../Context/MyContext";
import FlightContext from "../Context/FlightsContext";
import HotelContext from "../Context/HotelContext";
import TrainContext from "../Context/TrainContext";
import BusContext from "../Context/BusContext";
import HomePage from "../Homepage/HomePage";
import HotelHomepage from "../Homepage/HotelHomePage/HotelHomepage";
import TrainHomePage from "../Homepage/TrainHomePage/TrainHomePage";
import BusHomePage from "../Homepage/BusesHomePage/BusHomePage";
import FlightsDetails from "../DetailPages/FlightSection/FlightsDetails";
import Login from "../Login/Login";
import Calender from "../Calender/Calender";
import TravellerSection from "../Homepage/FlightsHomePage/TrvellerSection/TravellerSection";
import BusesDetails from "../DetailPages/BusSection/BusesDetails";
import AirportList from "../Homepage/FlightsHomePage/AirportList/DepartureAirPortList";
import BookNowPage from "../DetailPages/FlightSection/BookNowPage/BookNowPage";
import HotelDetails from "../DetailPages/HotelSection/HotelDetails";
import SourceTrainStationList from "../Homepage/TrainHomePage/SourceTrainStationList";
import TrainDetails from "../DetailPages/TrainSection/TrainDetails";
import SeatSelection from "../DetailPages/BusSection/SeatSelection/SeatSelection";
import Payment from "../DetailPages/Payment/Payment";
import HotelCarousel from "../DetailPages/HotelSection/HotelCarousel/HotelCarousel";
import IndividualDetailHotel from "../DetailPages/HotelSection/IndividualDetailHotel/IndividualDetailHotel";
import HotelBookingPage from "../DetailPages/HotelSection/HotelBookingPage/HotelBookingPage";
import TrainBookingShow from "../DetailPages/TrainSection/TrainBookingPage/TrainBookingPage";
import BusBookingPage from "../DetailPages/BusSection/BusBookingPage/BusBookingPage";
import MyTrips from "../MyTrips/MyTrips";
import ComingSoon from "../Homepage/ComingSoon/ComingSoon";


function LandingPage() {
  
  const [mode, setMode] = useState("Flights");
  const [authenticate , setAuthenticate] = useState(false);
  const [login, setLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
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
  const [showDepartureAirportList, setShowDepartureAirportList] =useState(false);
  const [showArrivalAirportList, setShowArrivalAirportList] = useState(false);
  const [location, setLocation] = useState("Mumbai");
  const [showInputCities , setShowInputCities] = useState(false);
  const [checkin, setCheckin] = useState(new Date());
  const [checkout, setCheckout] = useState(new Date());
  const [hotelPrice , setHotelPrice] = useState("");
  const [hotelTax , setHotelTax] = useState("");
  const [source, setSource] = useState("Delhi Junction");
  const [destination, setDestination] = useState("Surat");
  const [travelDate, setTravelDate] = useState(new Date());
  const [trainDay, setTrainDay] = useState("");
  const [coachType , setCoachType] = useState("");
  const [seats , setSeats] = useState("");
  const [busSource, setBusSource] = useState("Mumbai");
  const [busDestination, setBusDestination] = useState("Pune");
  const [busTravelDate, setBusTravelDate] = useState(new Date());

  useEffect(() => {
    setLogin((JSON.parse(sessionStorage.getItem("isLoggedIn"))) === true ? true : false)  
  }, []);

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
          authenticate,
          setAuthenticate,
          showTravellerSection,
          setShowTravellerSection
          
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
              setCheckout,
              showInputCities,
              setShowInputCities,
              hotelPrice , 
              setHotelPrice ,
              hotelTax , 
              setHotelTax
            }}
          >

            
            <TrainContext.Provider
              value={{
                source,
                setSource,
                destination,
                setDestination,
                travelDate,
                setTravelDate,
                trainDay,
                setTrainDay,
                coachType , 
                setCoachType ,
                seats , 
                setSeats
              }}
            >
              <BusContext.Provider
                value={{
                  busSource,
                  setBusSource,
                  busDestination,
                  setBusDestination,
                  busTravelDate,
                  setBusTravelDate
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
                  <Route path="/flight/:itemId" element={<BookNowPage />} />
                  <Route path="/hotels/details" element={<HotelDetails />} />
                  <Route path="/trains/details" element={<TrainDetails />} />
                  <Route path="/railways/bookingpage/:itemId" element={<TrainBookingShow />} />
                  <Route path="/selectionseat" element={< SeatSelection />} />
                  <Route path="/payment/:itemId" element={< Payment />} />
                  <Route path="/inputCities" element={< HotelCarousel />} />
                  <Route path="/hotels/:itemId" element={<IndividualDetailHotel />} />
                  <Route path="/hotels/bookingpage/:itemId" element={< HotelBookingPage />} />
                  <Route path="/bus/bookingpage/:itemId" element={< BusBookingPage />} />
                  <Route path="/mytrips" element={< MyTrips />} />
                  <Route path="/comingsoon" element={< ComingSoon />} />


                </Routes>
              </BusContext.Provider>
            </TrainContext.Provider>
          </HotelContext.Provider>
        </FlightContext.Provider>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default LandingPage;
