import { useState, useEffect } from "react";
import "./OfferSection.css";
import axios from "axios";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function OfferSection() {
  const [offers, setOffers] = useState([]);
  const [offerSelected, SetOfferSelected] = useState("all");

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/bookingportals/offers?limit=6",
        {
          method: "GET",
          headers: {
            projectID: "8io8w790wmwl",
          },
        }
      );
      const data = response.data.data;
      setOffers(data.offers);
    };
    fetchApi();
  }, []);

  return (
    <div className="offer-section">
      <div className="offer-section-navbar">
        <div className="offer-section-navbar-text">Offers</div>

        <div className="offer-section-navbar-content">
          <div className={offerSelected==="all"?"offer-section-navbar-content-selected":"offer-section-navbar-content-notselected"}
          onClick={()=> SetOfferSelected("all")}>
            <p> All Offers </p>
          </div>

          <div className={offerSelected==="flights"?"offer-section-navbar-content-selected":"offer-section-navbar-content-notselected"}
          onClick={()=> SetOfferSelected("flights")}>
            Flights
          </div>

          <div className={offerSelected==="hotels"?"offer-section-navbar-content-selected":"offer-section-navbar-content-notselected"}
          onClick={()=> SetOfferSelected("hotels")}>Hotels</div>

          <div className={offerSelected==="trains"?"offer-section-navbar-content-selected":"offer-section-navbar-content-notselected"}
          onClick={()=> SetOfferSelected("trains")}>Trains</div>
        </div>

        <div className="offer-section-navbar-button-section">
          <div className="all-offfer-navbar">
            <span>View All</span>
            <span><ArrowRightAltIcon/></span>
          </div>
          <button className="offer-navbar-prev-section" disabled>
          <ChevronLeftIcon/>
          </button>

          <button className="offer-navbar-next-section" >
          <ChevronRightIcon/>
          </button>
        </div>
      </div>

      <div className="offer-section-content">
        {offers.map((offer) => (
          <div key={offer._id} className="offer-card">
            <div className="offer-card-content">
              <div className="offer-card-image">
                <img src={offer.newHeroUrl} alt="logo" />
              </div>
              <div className="offer-card-text">
                <div className="offer-card-text-heading">{offer.pTl}</div>
                <div className="offer-card-text-seperation"></div>
                <div className="offer-card-text-data">{offer.pTx}</div>
              </div>
            </div>
            <div className="offer-card-footer">
              <div className="offer-card-footer-left">{offer.tncCtaText}</div>
              <div className="offer-card-footer-right">{offer.cardCTAText}</div>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferSection;
