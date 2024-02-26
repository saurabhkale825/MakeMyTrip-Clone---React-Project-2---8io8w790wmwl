import React from "react";
import "./Payment.css";
import logo from "../../Assest/Logo/paymentSpriteDTv2.png";
import UPI from "../../Assest/Logo/paymentSpriteDTv2 (1).png";
import Credit from "../../Assest/Logo/paymentSpriteDTv2 (2).png";
import BNPL from "../../Assest/Logo/paymentSpriteDTv2 (3).png";
import NetBanking from "../../Assest/Logo/paymentSpriteDTv2 (5).png";
import GiftCard from "../../Assest/Logo/paymentSpriteDTv2 (6).png";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { orange } from "@mui/material/colors";
import Scanner from "../../Assest/Logo/upiqrcode-bfa1c2eb.png";
import Google from "../../Assest/Logo/BanklogoSprite-c0931f75.png";
import PhonePay from "../../Assest/Logo/BanklogoSprite-c0931f75 (1).png";
import HDFC from "../../Assest/Logo/BanklogoSprite-c0931f75 (2).png";
import SBI from "../../Assest/Logo/BanklogoSprite-c0931f75 (3).png";
import Axis from "../../Assest/Logo/BanklogoSprite-c0931f75 (4).png";
import Paytm from "../../Assest/Logo/BanklogoSprite-c0931f75 (5).png";
import { ToastContainer, toast } from "react-toastify";

function Payment() {
  const notify = () => {
    toast("Payment Sucessful");
  };
  return (
    <>
      <div className="payment-header">
        <div className="flex items-center gap-6">
          <div>
            <img
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
              alt="logo"
              width="150px"
            />
          </div>
          <div>
            <span className="text-lg text-white">Hey,</span>
            <span className="text-teal-600 ml-1">
              You are viewing this booking at the best price
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <span>
            <img src={logo} alt="logo" width="30px" />
          </span>
          <span className="font-semibold  text-white ml-2">
            Safe and secure
          </span>
        </div>
      </div>
      <div className="payment-content">
        <div className="payment-option pr-2">
          <h3 className="text-xl font-black font-bold h-1/10 border-b border-black w-full text-left p-2">
            Payment Option
          </h3>
          <div className=" flex flex-col h-full w-full ">
            <div className="payment-option-individual">
              <div className="flex items-center gap-4 ml-3">
                <img src={UPI} alt="logo" width="30px" />
              </div>
              <div className="text-left">
                <div className="text-xl font-semibold text-blue-600">
                  UPI Options
                </div>
                <p className="font-black font-semibold text-xs">
                  Pay Directly From Your Bank Account
                </p>
              </div>
            </div>
            <div className="payment-option-individual">
              <div className="flex items-center gap-4 ml-3">
                <img src={Credit} alt="logo" width="30px" />
              </div>
              <div className="text-left">
                <div className="text-xl font-semibold text-blue-600">
                  Credit/Debit/ATM Card
                </div>
                <p className="font-black font-semibold text-xs">
                  Visa,MAsterCard,Amex,Rupay And More
                </p>
              </div>
            </div>
            <div className="payment-option-individual">
              <div className="flex items-center gap-4 ml-3">
                <img src={BNPL} alt="logo" width="40px" height="40px" />
              </div>
              <div className="text-left">
                <div className="text-xl font-semibold text-blue-600">
                  Book Now Pay Later
                </div>
                <p className="font-black font-semibold text-xs ">
                  Tripmoney,Lazypay,Simpl,ZestMoney,ICICI,HDFC
                </p>
              </div>
            </div>
            <div className="payment-option-individual">
              <div className="flex items-center gap-4 ml-3">
                <img src={NetBanking} alt="logo" width="30px" />
              </div>
              <div className="text-left">
                <div className="text-xl font-semibold text-blue-600">
                  Net Banking
                </div>
                <p className="font-black font-semibold text-xs">
                  All Major Banks Available
                </p>
              </div>
            </div>
            <div className="payment-option-individual">
              <div className="flex items-center gap-4 ml-3">
                <img src={GiftCard} alt="logo" width="30px" />
              </div>
              <div className="text-left">
                <div className="text-xl font-semibold text-blue-600">
                  Gift Cards,Wallets & More
                </div>
                <p className="font-black font-semibold text-xs">
                  Gift cards, AmazonPay
                </p>
              </div>
            </div>
            <div className="payment-option-individual">
              <div className="flex items-center gap-4 ml-3">
                <img
                  src="data:image/png;base64,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"
                  alt="logo"
                  width="30px"
                />
              </div>
              <div className="text-left">
                <div className="text-xl font-semibold text-blue-600">
                  GooglePay
                </div>
                <p className="font-black font-semibold text-xs">
                  Pay with Google Pay
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="payment-details">
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
                  />
                  <button className="pay-button" onClick={notify}>
                    Verify & Pay
                  </button>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition="bounce"
                  />
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
            <span>By coninuing to pay, I understand and agree with the </span>
            <span className="text-blue-500">privacy policy,</span>
            <span>, the</span>
            <span className="text-blue-500"> user agreement</span>
            <span> and </span>
            <span className="text-blue-500">terms of services</span>
            <span> of makemytrip</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
