import React from "react";
import "./ComingSoon.css"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar";

function ComingSoon() {
  return (
    <div className="coming-soon-page">
    <Header />
    <Navbar />
    <div className="coming-soon">
    <p className="coming-soon-para">Coming Soon !!!
        <br/><a href="https://www.makemytrip.com/" className="coming-soon-tag">Make My Trip.</a></p>
    </div>
    </div>
  );
}

export default ComingSoon;
