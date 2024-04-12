import React, { useState } from "react";
import "./GiftCardsPayment.css";
import Cashcard from "../../../Assest/Logo/Cashcard.png";
import Mobikwik from "../../../Assest/Logo/Mobikiwi.png";
import Payzapp from "../../../Assest/Logo/Payzapp.png";
import MMTgiftcard from "../../../Assest/Logo/MMTgift card.png";
import PaymentContainer from "../../PaymentContainer/PaymentContainer";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function GiftCardsPayment() {
  const [giftCard, setGiftCard] = useState("");
  const { itemId } = useParams();
  const value = localStorage.getItem("value");
  const [showConfirmationPage, setShowConfirmationPage] = useState(false);
  const user = JSON.parse(localStorage.getItem("user-info"));
  const token = user.token;

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

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/bookingportals/booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            projectID: "8io8w790wmwl",
          },
          body: JSON.stringify(body),
        }
      );

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
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="gift-cards">
      <h3 className="text-lg font-medium text-black">Select wallet to pay</h3>
      <div className="flex justify-evenly p-3">
        <div
          className={
            giftCard === "Airtel" ? "indi-gift-card-selected" : "indi-gift-card"
          }
          onClick={() => setGiftCard("Airtel")}
        >
          <img
            src="	https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/airtel_payment_bank_new.png"
            alt="logo"
            width="30px"
          />
          <div className="font-semibold">Airtel Payments Bank</div>
        </div>

        <div
          className={
            giftCard === "Cashcard"
              ? "indi-gift-card-selected"
              : "indi-gift-card"
          }
          onClick={() => setGiftCard("Cashcard")}
        >
          <img src={Cashcard} alt="logo" width="30px" />
          <div className="font-semibold">Itz Cash Card</div>
        </div>

        <div
          className={
            giftCard === "Mobikwik"
              ? "indi-gift-card-selected"
              : "indi-gift-card"
          }
          onClick={() => setGiftCard("Mobikwik")}
        >
          <img src={Mobikwik} alt="logo" width="30px" />
          <div className="font-semibold">MobiKwik</div>
        </div>

        <div
          className={
            giftCard === "Payzapp"
              ? "indi-gift-card-selected"
              : "indi-gift-card"
          }
          onClick={() => setGiftCard("Payzapp")}
        >
          <img src={Payzapp} alt="logo" width="30px" />
          <div className="font-semibold">PayZapp</div>
        </div>
      </div>

      <div className="flex justify-evenly p-3 w-1/2 ml-3">
        <div
          className={
            giftCard === "Amazon" ? "indi-gift-card-selected" : "indi-gift-card"
          }
          onClick={() => setGiftCard("Amazon")}
        >
          <img
            src="https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/new_amazonpay.png"
            alt="logo"
            width="30px"
          />
          <div className="font-semibold">Amazon Pay</div>
        </div>

        <div
          className={
            giftCard === "MMTgiftcard"
              ? "indi-gift-card-selected"
              : "indi-gift-card"
          }
          onClick={() => setGiftCard("MMTgiftcard")}
        >
          <img src={MMTgiftcard} alt="logo" width="30px" />
          <div className="font-semibold">Make My Trip Gift Card</div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className={giftCard === "" ? "btn-disabled" : "primary-btn"}
          onClick={Booking}
        >
          Proceed
        </button>
      </div>

      <ToastContainer
        position="top-center"
        type="success"
        theme="light"
        autoClose={5000}
        closeOnClick={true}
      />

      {showConfirmationPage === true ? (
        <div>
          <PaymentContainer />
        </div>
      ) : null}
    </div>
  );
}

export default GiftCardsPayment;
