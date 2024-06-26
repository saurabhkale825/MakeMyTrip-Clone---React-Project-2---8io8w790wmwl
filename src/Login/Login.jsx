import "./Login.css";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useEffect, useState } from "react";
import MyContext from "../Context/MyContext";
import LoginInput from "./LoginInput";
import SignUp from "./SignUp";
import LoginPageFlight from "../../src/Assest/Logo/LoginPageFlightLogo.png";
import LoginPageHotel from "../../src/Assest/Logo/LoginPageHotelLogo.png";
import LoginPageTrain from "../../src/Assest/Logo/LoginPageTrainLogo.png";

function Login() {
  const {
    setLogin,
    toggleSignin,
    setToggleSignin,
  } = useContext(MyContext);

  return (
    <div className="login">
      <div className="login-page-carousel">
        <div className="login-page-carousel-content">
          <h3 className="text-white text-xl font-bold mx-5 antialiased">
            Sign up/Login now to
          </h3>
          <div className="p-5">
            <div className=" flex justify-evenly items-center">
              <span>
                <img src={LoginPageFlight} width="30px"></img>
              </span>
              <span className="text-white w-40 text-s font-blod ">
                {" "}
                Lock Flight Prices & Pay Later
              </span>
            </div>
            <br className="text-white" />
            <div className=" flex justify-evenly items-center">
              <span>
                <img src={LoginPageHotel} width="30px"></img>
              </span>
              <span className="text-white w-40 text-s font-blod ">
                {" "}
                Book Hotels @₹0
              </span>
            </div>

            <div className=" flex justify-evenly items-center mt-5">
              <span>
                <img src={LoginPageTrain} width="30px"></img>
              </span>
              <span className="text-white w-40 text-s font-blod ">
                Get 3X refund, if your waitlisted train doesn't get confirmed
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="login-page-content">
        <div className="login-page-navbar">
          <div
            className={
              toggleSignin === true
                ? "login-page-personal-account-selected lg:text-base md:text-sm text-xs"
                : "login-page-personal-account lg:text-base md:text-sm text-xs"
            }
            onClick={() => setToggleSignin(true)}
          >
            Personal Account
          </div>
          <div
            className={
              toggleSignin === false
                ? "login-page-signup-selected lg:text-base md:text-sm text-xs"
                : "login-page-signup lg:text-base md:text-sm text-xs"
            }
            onClick={() => setToggleSignin(false)}
          >
            Signup
          </div>
        </div>

        {toggleSignin === true ? <LoginInput /> : <SignUp />}

        <div className="login-page-footer">
          <span className="login-page-footer-text">
            By proceeding, you agree to MakeMyTrip's
          </span>
          <span className="login-page-footer-anchor">Privacy Policy</span>
          <span className="login-page-footer-text">,</span>
          <span className="login-page-footer-anchor"> User Agreement</span>
          <span className="login-page-footer-text">and</span>
          <span className="login-page-footer-anchor">T&C's</span>
        </div>
      </div>

      <div className="login-page-cancel-button" onClick={() => setLogin(false)}>
        <CloseIcon />
      </div>
    </div>
  );
}

export default Login;
