import React, { useContext, useEffect } from "react";
import Header from "./Header/Header";
import Navbar from "../Homepage/Navbar/Navbar";
import FlightsHomePage from "./FlightsHomePage/FlightsHomePage";
import Footer from "../Footer/Footer";
import OfferSection from "../OfferSection/OfferSection";
import MyContext from "../Context/MyContext";
import AuthContext from "../Context/AuthContext";
import DownloadApp from "../DownloadApp/DownloadApp";
import Saudi from "../SpecialComponents/SaudiImage/Saudi";
import HandPicked from "../SpecialComponents/HandPicked/HandPicked";
import LesserKnown from "../SpecialComponents/LesseKnown/LesserKnown";
import FlightLocation from "../SpecialComponents/FlightLocation/FlightLocation";

function HomePage() {
  const { setLogin, mode, setMode } = useContext(MyContext);

  const { authenticate, setAuthenticate } = useContext(AuthContext);

  const data = localStorage.getItem("user-info");

  useEffect(() => {
    localStorage.setItem("value", "");
  });

  return (
    <>
      <Header />
      <Navbar />
      <FlightsHomePage />
      <Saudi />
      <OfferSection />
      <DownloadApp />
      <HandPicked />
      <LesserKnown />
      <FlightLocation />
      <Footer />
    </>
  );
}

export default HomePage;
