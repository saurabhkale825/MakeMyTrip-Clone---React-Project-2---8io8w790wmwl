import React from "react";
import Header from "./Header/Header";
import Navbar from "../Homepage/Navbar/Navbar";
import FlightsHomePage from "./FlightsHomePage/FlightsHomePage";
import Footer from "../Footer/Footer"
import OfferSection from "../OfferSection/OfferSection";

function HomePage() {
  return (
    <>
      <Header />
      <Navbar />
      <FlightsHomePage/>
      <OfferSection />
      <Footer />
    </>
  );
}

export default HomePage;
