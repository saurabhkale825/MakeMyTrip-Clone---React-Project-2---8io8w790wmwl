import React from 'react'
import "./GiftCardsPayment.css"
import Cashcard from "../../../Assest/Logo/Cashcard.png";
import Mobikwik from "../../../Assest/Logo/Mobikiwi.png";
import Payzapp from "../../../Assest/Logo/Payzapp.png";
import MMTgiftcard from "../../../Assest/Logo/MMTgift card.png";

function GiftCardsPayment() {
  return (
    <div className='gift-cards'>
      <h3 className='text-lg font-medium text-black'>Select wallet to pay</h3>
      <div className='flex justify-evenly p-3'>
          <div className='w-24 border-giftcards flex justify-center items-center flex-col text-center'>
            <img src='	https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/airtel_payment_bank_new.png' alt='logo' width="30px" />
            <div className='font-semibold'>Airtel Payments Bank</div>
          </div>

          <div className='w-24 border-giftcards flex justify-center items-center flex-col text-center' >
            <img src={Cashcard} alt='logo' width="30px" />
            <div className='font-semibold'>Itz Cash Card</div>
          </div>

          <div className='w-24 border-giftcards flex justify-center items-center flex-col text-center'>
            <img src={Mobikwik} alt='logo' width="30px" />
            <div className='font-semibold'>MobiKwik</div>
          </div>

          <div className='w-24 border-giftcards flex justify-center items-center flex-col text-center'>
            <img src={Payzapp} alt='logo' width="30px" />
            <div className='font-semibold'>PayZapp</div>
          </div>
          
      </div>

      <div className='flex justify-evenly p-3 w-1/2 ml-3'>
      <div className='w-24 border-giftcards flex justify-center items-center flex-col text-center'>
            <img src='https://imgak.mmtcdn.com/payment-ui-service/images/bank_logos/new_amazonpay.png' alt='logo' width="30px" />
            <div className='font-semibold'>Amazon Pay</div>
          </div>

          <div className='w-24 border-giftcards flex justify-center items-center flex-col text-center'>
            <img src={MMTgiftcard} alt='logo' width="30px" />
            <div className='font-semibold'>Make My Trip Gift Card</div>
          </div>
      </div>
    </div>
  )
}

export default GiftCardsPayment