import React, { useState , useEffect } from 'react'
import "./CardsPayment.css"
import {useParams} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentContainer from "../../PaymentContainer/PaymentContainer";


function CardsPayment() {

  const [isCardDetailsValid , setIsCardDetailsValid] = useState(false);
  const[cardNumber , setCardNumber] = useState("");
  const[nameOnCard , setNameOnCard]=useState("");
  const[expiryMonth , setExpiryMonth] = useState("");
  const[expiryYear , setExpiryYear] = useState("");
  const[cvv, setCvv] = useState("");

  const { itemId } = useParams();
  const value = localStorage.getItem('value');
  const [ showConfirmationPage , setShowConfirmationPage] = useState(false)
  const user = JSON.parse(localStorage.getItem('user-info'));
  const token = user.token;

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

  const handleCardValidation = () => {
    if(cardNumber !== "" && nameOnCard !== "" && expiryMonth !== "" && expiryYear !== "" && cvv !== ""){
      setIsCardDetailsValid(true);
    }
    else{
      setIsCardDetailsValid(false)
    }
  }

  useEffect(() => {
    handleCardValidation();  
  }, [cardNumber , nameOnCard]);

  useEffect(() => {
    handleCardValidation();  
  }, [expiryMonth , expiryYear]);

  useEffect(() => {
    handleCardValidation();  
  }, [cvv]);

  const handleYearChange = (e) => {
    setTimeout(() => {
      setExpiryYear(e.target.value);
    },1000)
  }

  const handleMonthChange = (e) => {
    setTimeout(() => {
      setExpiryMonth(e.target.value);
    },1000)
  }

  const handleCVVChange = (e) => {
    setTimeout(() => {
      setCvv(e.target.value);
    },1000)
  }



  return (
    <div className='cards-payment'>
      <div className='text-left p-5 ml-2'>
        <div className='flex flex-col '>
          <label className='text-base font-semibold text-black'>Card Number</label>
          <input type='text'  placeholder='Enter Your Cards Number Here' minLength="12" maxLength="12"
           required 
          className='border border-gray-400 rounded w-4/5 p-2' onChange={(e) => setCardNumber(e.target.value)}/> 
        </div>

        <div className='flex flex-col gap-1'>
          <label className='lg:text-base text-xs lg:font-semibold font-semibold text-black mt-5'>Name on Card</label>
          <input type='text' placeholder='Enter Your Name On Card' required 
          className='border border-gray-400 rounded w-4/5 p-2'  onChange={(e) => setNameOnCard(e.target.value)}/> 
        </div>

        <div className='flex gap-x-4 mt-3' >
          <div >
          <label className='lg:text-base text-xs lg:font-semibold font-semibold text-black mt-5'>Expiry Month & Year</label>
            <div className='flex'>
            <div className='border border-gray-400 rounded lg:w-40 md:w-16 w-12 p-2 flex justify-between text-xs'>
              <input type='number' max="12" min="1"  required placeholder='Month' className='w-full border border-gray-50 px-2' onChange={(e) => handleMonthChange(e)}></input>
              
            </div>
            <div className='border border-gray-400 rounded lg:w-40 md:w-20  w-12 p-2 flex justify-between'>
            <input type='number' required placeholder='Year' minLength="4" maxLength="4" min="2023" max="2050" className='w-full border border-gray-50 px-2' onChange={(e) => handleYearChange(e)}></input>
            </div>
            </div>
          </div>

          <div>
            <label className='lg:text-base text-xs lg:font-semibold font-semibold text-black mt-5'>Card CVV</label>
            <input type= "text"  maxLength="3" placeholder="Enter Card CVV" 
            className='border border-gray-400 rounded lg:w-40  md:w-20 w-12 p-2 flex justify-between' onChange={(e) => handleCVVChange(e)}/>
          </div>
        </div>

        <div className='mt-3 flex justify-end mr-8'>
          <div className={isCardDetailsValid === false ? "btn-disabled" : "primary-btn"}  onClick={Booking}>PAY NOW</div>
        </div>

        <ToastContainer
                position="top-center"
                type="success"
                theme="light"
                autoClose={5000}
                closeOnClick={true}
              />

              {showConfirmationPage === true ? <div><PaymentContainer /></div> : null}

        <div className="px-1 text-left mt-3">
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
    </div>
  )
}

export default CardsPayment