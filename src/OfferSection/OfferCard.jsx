import React from 'react'

const OfferCard =(offer) => {
  return (
    <div className='offer-card'>
    <img src={offer.newHeroOfferCardUrl} alt='logo' width="150px" height="150px" />
    </div>
  )
}

export default OfferCard