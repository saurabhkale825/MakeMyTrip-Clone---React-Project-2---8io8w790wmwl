import React, { useContext, useEffect } from "react";
import Header from "./Header/Header";
import Navbar from "../Homepage/Navbar/Navbar";
import FlightsHomePage from "./FlightsHomePage/FlightsHomePage";
import Footer from "../Footer/Footer"
import OfferSection from "../OfferSection/OfferSection";
import MyContext from "../Context/MyContext";
import Login from "../Login/Login"


function HomePage() {

  const { login,setLogin, authenticate , setAuthenticate, mode , setMode} = useContext(MyContext);
  const data = localStorage.getItem('user-info');
  
  useEffect(() => {
    console.log("before",authenticate);
    if(data){
      setAuthenticate(true)
    }
    console.log("after",authenticate);
    if(authenticate === false){
      setLogin(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('value' , "");
  })

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
