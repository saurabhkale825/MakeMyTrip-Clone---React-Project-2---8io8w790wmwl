import React, { useState } from 'react'
import "./GooglePayPayment.css"
import Google from "../../../Assest/Logo/Google logo.png"
import {useParams} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentContainer from "../../PaymentContainer/PaymentContainer";


function GooglePayPayment() { 
  const { itemId } = useParams();
  const value = localStorage.getItem('value');
  const [ showConfirmationPage , setShowConfirmationPage] = useState(false)
  const user = JSON.parse(localStorage.getItem('user-info'));
  const token = user.token;
  const [googlePay , setGooglePay] = useState("");
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

  const handleGooglePayChange = (e) => {
    setTimeout(() => {
      setGooglePay(e.target.value);
    },2000)
  }

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
    <div className='google-pay-payment'>
      <div className='mt-3'>
        <div>
          <img src={Google} alt='logo' width="50px" />
        </div>
        <div className='mt-3 lg:flex lg:justify-between lg:items-center p-2'>
        <div className='lg:w-48'>
          <label htmlFor='upiId' className='text-base font-medium text-black mb-2'>Enter UPI ID</label><br/>
        <input type='email' id="upiId" placeholder='userName@upi' required  className='border border-grey p-2 lg:w-40 w-full' onChange={(e) => handleGooglePayChange(e)}/>
        </div>
        <div className={googlePay === ""?"btn-disabled mt-2":"primary-btn mt-2"} onClick={Booking}>Verify & Pay</div>
        </div>
      </div>

      <ToastContainer
                position="top-center"
                type="success"
                theme="light"
                autoClose={5000}
                closeOnClick={true}
              />

              {showConfirmationPage === true ? <div><PaymentContainer /></div> : null}
      
      <div className="px-5 text-left mt-6">
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
  )
}

export default GooglePayPayment