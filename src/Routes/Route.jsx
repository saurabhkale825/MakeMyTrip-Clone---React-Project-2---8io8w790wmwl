import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "../Context/MyContext";
import FlightContext from "../Context/FlightsContext";
import HotelContext from "../Context/HotelContext";
import TrainContext from "../Context/TrainContext";
import BusContext from "../Context/BusContext";
import HotelHomepage from "../Homepage/HotelHomePage/HotelHomepage";
import TrainHomePage from "../Homepage/TrainHomePage/TrainHomePage";
import BusHomePage from "../Homepage/BusesHomePage/BusHomePage";
import FlightsDetails from "../DetailPages/FlightSection/FlightsDetails";
import BusesDetails from "../DetailPages/BusSection/BusesDetails";
import BookNowPage from "../DetailPages/FlightSection/BookNowPage/BookNowPage";
import HotelDetails from "../DetailPages/HotelSection/HotelDetails";
import TrainDetails from "../DetailPages/TrainSection/TrainDetails";
import Payment from "../DetailPages/Payment/Payment";
import HotelCarousel from "../DetailPages/HotelSection/HotelCarousel/HotelCarousel";
import IndividualDetailHotel from "../DetailPages/HotelSection/IndividualDetailHotel/IndividualDetailHotel";
import HotelBookingPage from "../DetailPages/HotelSection/HotelBookingPage/HotelBookingPage";
import TrainBookingShow from "../DetailPages/TrainSection/TrainBookingPage/TrainBookingPage";
import BusBookingPage from "../DetailPages/BusSection/BusBookingPage/BusBookingPage";
import MyTrips from "../MyTrips/MyTrips";
import ComingSoon from "../Homepage/ComingSoon/ComingSoon";
// import FlightsHomePage from "../Homepage/FlightsHomePage/FlightsHomePage";
import AuthContext from "../Context/AuthContext";
import { ToastContainer } from "react-toastify";
import HomePage from "../Homepage/HomePage";

function LandingPage() {
  //States required for Authentication of user
  const [authenticate, setAuthenticate] = useState(false); //To check wheather login and authenticated or not.
  const [login, setLogin] = useState(false); //To toggle login model
  const [toggleSignin, setToggleSignin] = useState(true); //To toggle between login and signup options

  //States required for overall project.
  const [mode, setMode] = useState("Flights");

  // States rquired for Flight-section.
  const [traveller, setTraveller] = useState(1);
  const [selectedClass, setSelectedClass] = useState("economy");
  const [showTravellerSection, setShowTravellerSection] = useState(false);
  const [departureCity, setDepartureCity] = useState("Mumbai"); //To set depatureCity
  const [arrivalCity, setArrivalCity] = useState("Bengaluru"); //To set depatureCity
  const [departureCityAirportId, setDepartureCityAirportId] = useState("");
  const [arrivalCityAirportId, setArrivalCityAirportId] = useState("");
  const [startDate, setStartDate] = useState(new Date()); //To set flight date
  const [day, setDay] = useState(""); // To set flight day
  const [airportList, setAirportList] = useState([]); // to set airport name list
  const [showDepartureAirportList, setShowDepartureAirportList] =
    useState(false);
  const [showArrivalAirportList, setShowArrivalAirportList] = useState(false);

  //States rquired for HotelSection.
  const [location, setLocation] = useState("Mumbai"); //To define location for hotel search
  const [showInputCities, setShowInputCities] = useState(false);
  const [checkin, setCheckin] = useState(new Date());
  const [checkout, setCheckout] = useState(new Date());
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [hotelPrice, setHotelPrice] = useState("");
  const [hotelTax, setHotelTax] = useState("");

  //States rquired for Train-section.
  const [source, setSource] = useState("Delhi Junction");
  const [destination, setDestination] = useState("Surat");
  const [travelDate, setTravelDate] = useState(new Date());
  const [trainDay, setTrainDay] = useState("");
  const [coachType, setCoachType] = useState("");
  const [seats, setSeats] = useState("");

  //States rquired for bus-section.
  const [busSource, setBusSource] = useState("Mumbai");
  const [busDestination, setBusDestination] = useState("Pune");
  const [busTravelDate, setBusTravelDate] = useState(new Date());

  useEffect(() => {
    const storedData = localStorage.getItem("user-info");
    if (storedData) {
      setAuthenticate(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        type="success"
        theme="light"
        autoClose={5000}
        closeOnClick={true}
      />
      <AuthContext.Provider
        value={{
          authenticate,
          setAuthenticate,
        }}
      >
        <MyContext.Provider
          value={{
            mode,
            setMode,
            login,
            setLogin,
            toggleSignin,
            setToggleSignin,
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
                setCheckout,
                showInputCities,
                setShowInputCities,
                hotelPrice,
                setHotelPrice,
                hotelTax,
                setHotelTax,
                rooms,
                setRooms,
                adults,
                setAdults,
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
                  coachType,
                  setCoachType,
                  seats,
                  setSeats,
                }}
              >
                <BusContext.Provider
                  value={{
                    busSource,
                    setBusSource,
                    busDestination,
                    setBusDestination,
                    busTravelDate,
                    setBusTravelDate,
                  }}
                >
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                      path="/flights/details"
                      element={<FlightsDetails />}
                    />
                    <Route path="/flight/:itemId" element={authenticate ? <BookNowPage /> : <HomePage/>} />
                    <Route path="/hotels" element={<HotelHomepage />} />
                    <Route path="/hotels/details" element={<HotelDetails />} />
                    <Route path="/inputCities" element={<HotelCarousel />} />
                    <Route
                      path="/hotels/:itemId"
                      element={<IndividualDetailHotel />}
                    />
                    <Route
                      path="/hotels/bookingpage/:itemId"
                      element={authenticate ? <HotelBookingPage /> : <HomePage/>}
                    />
                    <Route path="/trains" element={<TrainHomePage />} />
                    <Route path="/buses" element={<BusHomePage />} />
                    <Route path="/buses/details" element={<BusesDetails />} />
                    <Route path="/trains/details" element={<TrainDetails />} />
                    <Route
                      path="/railways/bookingpage/:itemId"
                      element={authenticate ? <TrainBookingShow /> : <HomePage/>}
                    />
                    <Route path="/payment/:itemId" element={<Payment />} />
                    <Route
                      path="/bus/bookingpage/:itemId"
                      element={authenticate ? <BusBookingPage /> : <HomePage/>}
                    />
                    <Route path="/mytrips" element={authenticate ? <MyTrips /> : <HomePage/>} />
                    <Route path="/comingsoon" element={<ComingSoon />} />
                  </Routes>
                </BusContext.Provider>
              </TrainContext.Provider>
            </HotelContext.Provider>
          </FlightContext.Provider>
        </MyContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default LandingPage;
