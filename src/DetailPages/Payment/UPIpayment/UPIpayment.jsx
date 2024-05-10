import { useState, useEffect } from "react";
import "./UPIpayment.css";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { orange } from "@mui/material/colors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Scanner from "../../../Assest/Logo/upiqrcode-bfa1c2eb.png";
import Google from "../../../Assest/Logo/BanklogoSprite-c0931f75.png";
import PhonePay from "../../../Assest/Logo/BanklogoSprite-c0931f75 (1).png";
import HDFC from "../../../Assest/Logo/BanklogoSprite-c0931f75 (2).png";
import SBI from "../../../Assest/Logo/BanklogoSprite-c0931f75 (3).png";
import Axis from "../../../Assest/Logo/BanklogoSprite-c0931f75 (4).png";
import Paytm from "../../../Assest/Logo/BanklogoSprite-c0931f75 (5).png";
import PaymentContainer from "../../PaymentContainer/PaymentContainer";
import { useParams } from "react-router-dom";

function UPIpayment() {
  const { itemId } = useParams();
  const value = localStorage.getItem("value");
  const [showConfirmationPage, setShowConfirmationPage] = useState(false);
  const user = JSON.parse(localStorage.getItem("user-info"));
  const token = user.token;
  const [upiId, setUpiId] = useState("");
  const [validUPI , setValidUPI] = useState(false);

  const Booking = async () => {
    let body;
    if (value === "flight") {
      body = {
        bookingType: "flight",
        bookingDetails: {
          flightId: itemId,
          startDate: "2023-10-09T10:03:53.554+00:00",
          endDate: "2023-10-09T10:03:53.554+00:00",
        },
      };
    }

    if (value === "hotel") {
      body = {
        bookingType: "hotel",
        bookingDetails: {
          hotelId: { itemId },
          startDate: "2023-10-09T10:03:53.554+00:00",
          endDate: "2023-10-09T10:03:53.554+00:00",
        },
      };
    }

    if (value === "train") {
      body = {
        bookingType: "train",
        bookingDetails: {
          trainId: itemId,
          startDate: "2023-10-09T10:03:53.554+00:00",
          endDate: "2023-10-09T10:03:53.554+00:00",
        },
      };
    }

    if (value === "bus") {
      body = {
        bookingType: "bus",
        bookingDetails: {
          busId: itemId,
          startDate: "2023-10-09T10:03:53.554+00:00",
          endDate: "2023-10-09T10:03:53.554+00:00",
        },
      };
    }

    try{
      const response = await fetch('https://academics.newtonschool.co/api/v1/bookingportals/booking',{
        method :'POST',
        headers : {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${token}`,
          'projectID' :"8io8w790wmwl"
        },
        body: JSON.stringify(body)
      })
    

      const result = await response.json();
      
      const functionThatReturnPromise = () =>
      new Promise((resolve) => setTimeout(resolve, 2000));

    toast
      .promise(functionThatReturnPromise, {
        pending: "Payment in Process",
        success: "Booking Successful",
        error: "Promise rejected 🤯",
      })
      .then(() => {
        // Code to execute after the promise is resolved (PaymentContainer is shown)
        setShowConfirmationPage(true);
      });
      // console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const isValidUPI = () => {
      const upiRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+$/;
      setValidUPI(upiRegex.test(upiId) && upiId.length === 14);
    };
    isValidUPI();
  }, [upiId]);

  return (
    <div>
      <div className="text-left ml-10 ">
        <span>
          <PhoneIphoneIcon sx={{ color: orange[500] }} />
        </span>
        <span className="text-orange-500">Keep your phone handy !</span>
      </div>

      <div className="scanner-container">
        <div className="scanner-container-top">
          <div className="width-selection  flex flex-col items-center justify-between">
            <h4 className="font-semibold text-black">Scan and pay </h4>
            <div className="scanner-container-internal">
              <img
                src={Scanner}
                alt="logo"
                width="100px"
                height="100px"
                className="mb-1"
              />
            </div>
            <div className="font-semibold">
              Scan and pay using any banking app
            </div>
          </div>
          <div className="width-selction-second  flex items-center justify-center">
            OR
          </div>
          <div className="width-selection flex flex-col items-center justify-between ">
            <h4 className="font-semibold text-black">Enter UPI ID</h4>
            <div>
              <input
                type="email"
                autoComplete="off"
                className="upi-input"
                placeholder="@upi"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
              <button
                className={validUPI ? "primary-btn mt-3" : "pay-button" }
                onClick={Booking}
                // disabled={validUPI ? true : false}
              >
                Verify & Pay
              </button>


              {showConfirmationPage === true ? (
                <div>
                  <PaymentContainer />
                </div>
              ) : null}
            </div>
            <div className="font-semibold">Enter your registered VPA</div>
          </div>
        </div>

        <div className="scanner-container-bottom">
          <div>
            <img src={Google} alt="logo" width="30px" />
          </div>
          <div>
            <img src={PhonePay} alt="logo" width="40px" />
          </div>
          <div>
            <img src={HDFC} alt="logo" width="40px" />
          </div>
          <div>
            <img src={SBI} alt="logo" width="30px" />
          </div>
          <div>
            <img src={Axis} alt="logo" width="40px" />
          </div>
          <div>
            <img src={Paytm} alt="logo" width="60px" />
          </div>
        </div>
      </div>

      <div className="px-5 text-left ml-6">
        <div>
          <span>By coninuing to pay, I understand and agree with the </span>
          <span className="text-blue-500">privacy policy</span>
          <span>, the</span>
          <span className="text-blue-500"> user agreement</span>
          <span> and </span>
          <span className="text-blue-500">terms of services</span>
          <span> of makemytrip</span>
        </div>
      </div>
    </div>
  );
}

export default UPIpayment;
