import React, { useState } from "react";
import "./NetBankingPayment.css";
import Axis from "../../../Assest/Logo/Axis.png";
import HDFC from "../../../Assest/Logo/HDFC.png";
import ICICI from "../../../Assest/Logo/ICICi.png";
import SBI from "../../../Assest/Logo/SBI.png";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PaymentContainer from "../../PaymentContainer/PaymentContainer";

function NetBankingPayment() {
  const { itemId } = useParams();
  const value = localStorage.getItem('value');
  const [ showConfirmationPage , setShowConfirmationPage] = useState(false)
  const user = JSON.parse(localStorage.getItem('user-info'));
  const token = user.token;
  const [selectedCard , setSelectedCard] = useState("");

  const Booking = async() => {
    let body ;
    if(value === "flight"){
      body = {
        "bookingType": "flight",
        "bookingDetails": {
          "flightId": itemId,
          "startDate": "2023-10-09T10:03:53.554+00:00",
          "endDate": "2023-10-09T10:03:53.554+00:00"
        }
      }
    }

    if(value === "hotel"){
      body = {
        "bookingType": "hotel",
        "bookingDetails": {
          "hotelId": {itemId},
          "startDate": "2023-10-09T10:03:53.554+00:00",
          "endDate": "2023-10-09T10:03:53.554+00:00"
        }
      }
    }

    if(value === "train"){
      body = {
        "bookingType": "train",
        "bookingDetails": {
          "trainId": itemId,
          "startDate": "2023-10-09T10:03:53.554+00:00",
          "endDate": "2023-10-09T10:03:53.554+00:00"
        }
      }
    }

    if(value === "bus"){
      body = {
        "bookingType": "bus",
        "bookingDetails": {
          "busId":itemId,
          "startDate": "2023-10-09T10:03:53.554+00:00",
          "endDate": "2023-10-09T10:03:53.554+00:00"
        }
      }
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
  }


  return (
    <div className="net-banking-payment">
      <div className="banks-options">
        <div className="flex gap-x-5 items-center border-b border-gray-300 p-1" onClick={() => setSelectedCard("Axis")}>
          <span>
            {selectedCard ==="Axis"?<CheckCircleIcon/>:<PanoramaFishEyeIcon/>}
          </span>
          <div className="flex  items-center gap-x-2 font-semibold">
            <div>
              <img src={Axis} alt="logo" width="30px" />
            </div>
            <div>Axis Bank</div>
          </div>
        </div>

        <div className="flex gap-x-5 items-center border-b border-gray-300 p-1" onClick={() => setSelectedCard("HDFC")}>
          <span>
           {selectedCard ==="HDFC"?<CheckCircleIcon/>:<PanoramaFishEyeIcon/>}
          </span>
          <div className="flex  items-center gap-x-2 font-semibold">
            <div>
              <img src={HDFC} alt="logo" width="30px" />
            </div>
            <div>HDFC Bank</div>
          </div>
        </div>

        <div className="flex gap-x-5 items-center  border-b border-gray-300 p-1" onClick={() => setSelectedCard("ICICI")}>
          <span>
           {selectedCard ==="ICICI"?<CheckCircleIcon/>:<PanoramaFishEyeIcon/>}
          </span>
          <div className="flex  items-center gap-x-2 font-semibold">
            <div>
              <img src={ICICI} alt="logo" width="30px" />
            </div>
            <div>ICICI Bank</div>
          </div>
        </div>

        <div className="flex gap-x-5 items-center p-1" onClick={() => setSelectedCard("SBI")}>
          <span>
           {selectedCard ==="SBI"?<CheckCircleIcon/>:<PanoramaFishEyeIcon/>}
          </span>
          <div className="flex  items-center gap-x-2 font-semibold">
            <div>
              <img src={SBI} alt="logo" width="30px" />
            </div>
            <div>SBI Bank</div>
          </div>
        </div>
      </div>

      <div className="flex justify-end ">
        <button className={selectedCard ===""?"btn-disabled":"primary-btn"} disabled={selectedCard === ""? true : false} onClick={Booking}>Proceed</button>
      </div>

      <ToastContainer
                position="top-center"
                type="success"
                theme="light"
                autoClose={5000}
                closeOnClick={true}
              />

              {showConfirmationPage === true ? <div><PaymentContainer /></div> : null}

      <div className="px-5 text-left ml-6 mt-4">
        <div className='lg:text-base text-xs'>
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

export default NetBankingPayment;
