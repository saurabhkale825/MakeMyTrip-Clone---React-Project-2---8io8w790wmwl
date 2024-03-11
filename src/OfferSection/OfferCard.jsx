import React from "react";

const OfferCard = (offer) => {
  // console.log("Offer in each card", offer);
  return (
    <div key={offer?.offer._id} className="offer-card">
      <div className="offer-card-content">
        <div className="offer-card-image">
          <img src={offer?.offer.newHeroUrl} alt="logo" />
        </div>
        <div className="offer-card-text">
          <div className="offer-card-text-heading">{offer?.offer.pTl}</div>
          <div className="offer-card-text-seperation"></div>
          <div className="offer-card-text-data">{offer?.offer.pTx}</div>
        </div>
      </div>
      <div className="offer-card-footer">
        <div className="offer-card-footer-left">{offer?.offer.tncCtaText}</div>
      </div>
    </div>
  );
};

export default OfferCard;
