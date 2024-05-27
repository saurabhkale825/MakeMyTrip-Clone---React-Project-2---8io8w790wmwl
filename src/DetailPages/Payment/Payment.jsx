import React, { useState, useEffect } from "react";
import "./Payment.css";
import logo from "../../Assest/Logo/paymentSpriteDTv2.png";
import UPI from "../../Assest/Logo/paymentSpriteDTv2 (1).png";
import Credit from "../../Assest/Logo/paymentSpriteDTv2 (2).png";
import BNPL from "../../Assest/Logo/paymentSpriteDTv2 (3).png";
import NetBanking from "../../Assest/Logo/paymentSpriteDTv2 (5).png";
import GiftCard from "../../Assest/Logo/paymentSpriteDTv2 (6).png";
import UPIpayment from "./UPIpayment/UPIpayment";
import CardsPayment from "./CardsPayment/CardsPayment";
import BookNowPayment from "./BookNowPayment/BookNowPayment";
import NetBankingPayment from "./NetBanking/NetBankingPayment";
import GiftCardsPayment from "./GiftCardsPayment/GiftCardsPayment";
import GooglePayPayment from "./GooglePay/GooglePayPayment";
import { Link } from "react-router-dom";

function Payment() {

  const [paymentOption , setPaymentOption] = useState('UPI');
  const notify = () => {
    toast(
      <div>
        <PaymentContainer />
      </div>
    );
  };

  return (
    <>
      <div className="payment-header">
        <div className="flex items-center gap-6">
          <Link to={"/"}>
          <div>
            <img
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
              alt="logo"
              width="150px"
            />
          </div>
          </Link>
          <div>
            <span className="lg:text-lg text-sm text-white">Hey,</span>
            <span className="text-teal-600 lg:text-base text-xs ml-1">
              You are viewing this booking at the best price
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <span>
            <img src={logo} alt="logo" width="30px" />
          </span>
          <span className="font-semibold  lg:text-lg text-xs text-white ml-2">
            Safe and secure
          </span>
        </div>
      </div>

      <div className="payment-content">
        <div className="payment-option pr-2 ">
          <h3 className="lg:text-xl md:text-base text-sm pb-4 font-black font-bold h-1/10 border-b border-black w-full text-left p-2">
            Payment Option
          </h3>
          <div className=" flex flex-col pt-2 h-full w-full">
            <div className={paymentOption === "UPI"?"payment-option-individual-selected" : "payment-option-individual"} onClick={() => setPaymentOption("UPI")}>
              <div className="flex items-center gap-4 ml-3 w-1/5">
                <img src={UPI} alt="logo" width="30px" />
              </div>
              <div className="text-left">
                <div className="lg:text-lg text-sm font-semibold text-blue-600">
                  UPI Options
                </div>
                <p className="font-black lg:font-medium font-medium text-xs lg:block hidden">
                  Pay Directly From Your Bank Account
                </p>
              </div>
            </div>

            <div className={paymentOption === "Cards"?"payment-option-individual-selected" : "payment-option-individual"}  onClick={() => setPaymentOption("Cards")}>
              <div className="flex items-center gap-4 ml-3 w-1/5">
                <img src={Credit} alt="logo" width="30px" />
              </div>
              <div className="text-left">
                <div className="text-format font-semibold text-blue-600 ">
                  Credit/Debit/ATM Card
                </div>
                <p className="font-black lg:font-medium font-medium text-xs lg:block hidden">
                  Visa,MAsterCard,Amex,Rupay And More
                </p>
              </div>
            </div>

            <div className={paymentOption === "BookNow"?"payment-option-individual-selected" : "payment-option-individual"}  onClick={() => setPaymentOption("BookNow")}>
              <div className="flex items-center gap-4 ml-3 w-1/5">
                <img src={BNPL} alt="logo" width="40px" height="40px" />
              </div>
              <div className="text-left w-4/5">
                <div className="lg:text-lg text-sm font-semibold text-blue-600">
                  Book Now Pay Later
                </div>
                <p className="font-black lg:font-medium font-medium text-xs lg:block hidden">
                  Tripmoney,Lazypay,Simpl,ZestMoney
                </p>
              </div>
            </div>

            <div className={paymentOption === "NetBanking"?"payment-option-individual-selected" : "payment-option-individual"}  onClick={() => setPaymentOption("NetBanking")}>
              <div className="flex items-center gap-4 ml-3 w-1/5">
                <img src={NetBanking} alt="logo" width="30px" />
              </div>
              <div className="text-left w-4/5">
                <div className="lg:text-lg text-sm font-semibold text-blue-600">
                  Net Banking
                </div>
                <p className="font-black lg:font-medium font-medium text-xs lg:block hidden">
                  All Major Banks Available
                </p>
              </div>
            </div>

            <div className={paymentOption === "GiftCard"?"payment-option-individual-selected" : "payment-option-individual"} onClick={() => setPaymentOption("GiftCard")}>
              <div className="flex items-center gap-4 ml-3 w-1/5">
                <img src={GiftCard} alt="logo" width="30px" />
              </div>
              <div className="text-left w-4/5">
                <div className="lg:text-lg text-sm font-semibold text-blue-600">
                  Gift Cards,Wallets & More
                </div>
                <p className="font-black lg:font-medium font-medium text-xs lg:block hidden">
                  Gift cards, AmazonPay
                </p>
              </div>
            </div>

            <div className={paymentOption === "GooglePay"?"payment-option-individual-selected" : "payment-option-individual"} onClick={() => setPaymentOption("GooglePay")}>
              <div className="flex items-center gap-4 ml-3 w-1/5">
                <img
                  src="data:image/png;base64,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"
                  alt="logo"
                  width="30px"
                />
              </div>
              <div className="text-left w-4/5">
                <div className="lg:text-lg text-sm font-semibold text-blue-600">
                  GooglePay
                </div>
                <p className="font-black lg:font-medium font-medium text-xs lg:block hidden">
                  Pay with Google Pay
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="payment-details">
          {paymentOption === "UPI" ? <UPIpayment/> :
          (paymentOption === "Cards" ? <CardsPayment/> : 
          (paymentOption === "BookNow" ? <BookNowPayment  /> : 
          (paymentOption === "NetBanking" ? <NetBankingPayment /> :
          (paymentOption === "GiftCard") ? <GiftCardsPayment/> : <GooglePayPayment/>))
          ) }
        </div>
      </div>
    </>
  );
}

export default Payment;
