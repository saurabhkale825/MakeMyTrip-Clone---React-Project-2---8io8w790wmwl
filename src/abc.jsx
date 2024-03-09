import React, { useEffect, useState } from "react";
import "./upiwidget.css";
import upiqrcode from "../../assets/Images/Upiqrcode.png";
import ConfirmationPopup from "../confirmationpopup/ConfirmationPopup";
import { toast } from "react-toastify";
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";

const UpiWidget = ({ setShowConfirmation, showConfirmation }) => {
  const [upiID, setUpiID] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { error: apiError, post, data, get, loading } = useFetch([]);
  const [upiIDError, setUpiIDError] = useState("");
  const [loginError, setLoginError] = useState(null);

  const { id } = useParams();

  const handleChange = (field, event) => {
    setUpiID(event.target.value);
    const upiRegex = /^(\w{1,5})?\d{10}@\w+$/;
    if (!upiRegex.test(event.target.value)) {
      setUpiIDError("Enter Invalid UPI ID format*");
    } else {
      setUpiIDError(""); // Clear the error if the format is valid
    }
    setIsValid(!upiIDError);
  };
  useEffect(() => {
    const value = localStorage.getItem("keyforpayment");
    if (value !== undefined && value !== null) {
      get(`/bookingportals/${value}/${id}`);
    }
  }, [id]);

  // console.log("data", data);
  const flightId = data?.data?._id;
  const departureTime = data?.data?.departureTime;
  const arrivalTime = data?.data?.arrivalTime;
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const nextDay = date.getDate() + 1;
  const startDate = year + "-" + 0 + month + "-" + day + "T" + departureTime;
  const endDate = year + "-" + 0 + month + "-" + nextDay + "T" + arrivalTime;
  const startDateHotel = year + "-" + 0 + month + "-" + day;
  const endDateHotel = year + "-" + 0 + month + "-" + day;

  const handlePayNowClick = async () => {
    let flightBookingDetails;
    const value = localStorage.getItem("keyforpayment");
    if (value === "flight") {
      flightBookingDetails = {
        bookingType: "flight",
        bookingDetails: {
          flightId: flightId,
          startDate: startDate,
          endDate: endDate,
        },
      };
    }
    if (value === "train") {
      flightBookingDetails = {
        bookingType: "train",
        bookingDetails: {
          trainId: flightId,
          startDate: startDate,
          endDate: endDate,
        },
      };
    }
    if (value === "hotel") {
      flightBookingDetails = {
        bookingType: "hotel",
        bookingDetails: {
          hotelId: flightId,
          startDate: startDateHotel,
          endDate: endDateHotel,
        },
      };
    }
    if (value === "bus") {
      flightBookingDetails = {
        bookingType: "bus",
        bookingDetails: {
          busId: flightId,
          startDate: startDate,
          endDate: endDate,
        },
      };
    }
 
    const FetchInfo = async() => {
      //     try{
      //       const response = await axios.get(`https://academics.newtonschool.co/api/v1/bookingportals/${value}/${itemId}`,
      //       {
      //         headers: {
      //           projectID: "8io8w790wmwl",
      //         },
      //       });
      //       console.log("info-data",response.data?.data);
    
      //     }
      //     catch{
    
      //     }
      // } 
    