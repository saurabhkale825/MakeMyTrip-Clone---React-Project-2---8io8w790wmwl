import React from "react";
import "./BookNowPayment.css";

function BookNowPayment() {
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

          <div className="book-now-proceed-btn">PROCEED</div>
        </div>

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
