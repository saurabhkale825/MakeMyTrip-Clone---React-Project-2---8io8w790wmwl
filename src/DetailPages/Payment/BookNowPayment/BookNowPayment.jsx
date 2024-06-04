import React,{useState} from "react";
import "./BookNowPayment.css";
import {useParams} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentContainer from "../../PaymentContainer/PaymentContainer";

function BookNowPayment() {
  const { itemId } = useParams();
  const value = localStorage.getItem('value');
  const [ showConfirmationPage , setShowConfirmationPage] = useState(false)
  const user = JSON.parse(localStorage.getItem('user-info'));
  const token = user.token;
  const [date , setDate] = useState("");

  const myData = sessionStorage.getItem("myData");
  const StartDate = JSON.parse(myData).startDate;

  const formatMonth = (e) => {
    const Month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Nov","Dec"];
    if(Month.indexOf(e) < 10){
      console.log(`0${Month.indexOf(e)+1}`)
      return (`0${Month.indexOf(e)+1}`);
    }
    else{
      console.log(Month.indexOf(e))
      return (`0${Month.indexOf(e)+1}`);
    }
  }
  
  useEffect(() => {
    console.log(StartDate.split(' ')[2]);
    formatMonth(StartDate.split(' ')[1]);
    setDate(`${StartDate.split(' ')[3]}-${formatMonth(StartDate.split(' ')[1])}-${StartDate.split(' ')[2]}T10:03:53.554+00:00`);
    console.log("date =>",date);
  }, []);

  const Booking = async() => {
    let body ;
    if(value === "flight"){
      body = {
        "bookingType": "flight",
        "bookingDetails": {
          "flightId": itemId,
          "startDate": date,
          "endDate": date
        }
      }
    }

    if(value === "hotel"){
      body = {
        "bookingType": "hotel",
        "bookingDetails": {
          "hotelId": {itemId},
          "startDate": date,
          "endDate": date
        }
      }
    }

    if(value === "train"){
      body = {
        "bookingType": "train",
        "bookingDetails": {
          "trainId": itemId,
          "startDate": date,
          "endDate": date
        }
      }
    }

    if(value === "bus"){
      body = {
        "bookingType": "bus",
        "bookingDetails": {
          "busId":itemId,
          "startDate": date,
          "endDate": date
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
    <div className="book-now-payment">
      <div className="benefits-of-pay-later">
        <h2 className="text-xl font-black font-medium">
          Benefits Of Pay Later
        </h2>
        <div className="flex">
        <div className="w-1/2 p-2">

          <div className="flex gap-x-3">
            <div><img src="https://imgak.mmtcdn.com/payment-ui-service/images/payment/zero_interest_bnpl.png" alt="logo" width="40px" /></div>
            <div>
              <h4 className="text-base green-text">Starts at 0%  Interest</h4>
              <p>Starts at 0%  Interest</p>
            </div>
          </div>

          <div className="flex gap-x-5 mt-2">
            <div><img src="https://imgak.mmtcdn.com/payment-ui-service/images/payment/no-document_bnpl.png" alt="logo" width="30px" /></div>
            <div>
              <h4 className="text-base green-text">No Paperwork</h4>
              <p>No Paperwork</p>
            </div>
          </div>
          
          
        </div>
        <div className="w-1/2 flex p-2 gap-x-3">
          <div><img src="	https://imgak.mmtcdn.com/payment-ui-service/images/payment/credit_period.png" alt="logo" width="40px" height="40px"/></div>
          <div>
            <h4 className="text-base green-text">15 days-18 Months </h4>
            <p>Pay in 15 days-18 months</p>
          </div>
        </div>
        </div>
      </div>

      <div className="eligibility-check">
        <div className="flex justify-between items-center p-3 w-full mt-3">
          <div className="text-base font-semibold text-black text-left">
            <p >Check eligibility of mobile no.</p>
            <p>+91-9876543210</p>
          </div>

          <div className="book-now-proceed-btn" onClick={Booking}>PROCEED</div>
        </div>

        <ToastContainer
                position="top-center"
                type="success"
                theme="light"
                autoClose={5000}
                closeOnClick={true}
              />

              {showConfirmationPage === true ? <div><PaymentContainer /></div> : null}

        <div className="flex justify-evenly items-center w-4/5 ml-12 mt-4 p-2">
          <div className="border border-gray px-2">
            <img
              src="https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/lazypay.png"
              alt="logo"
              width="40px"
            />
          </div>

          <div className="border border-gray px-2">
            <img
              src="https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/simpl.png"
              alt="logo"
              width="40px"
            />
          </div>
          <div  className="border border-gray px-2" >
            <img
              src="https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/icicipaylater.png"
              alt="logo"
              width="40px"
            />
          </div>
          <div  className="border border-gray px-2">
            <img
              src="https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/olamoney.png"
              alt="logo"
              width="40px"
            />
          </div>
          <div  className="border border-gray px-2">
            <img
              src="	https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/hdfc.png"
              alt="logo"
              width="30px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNowPayment;
