import { useState, useEffect } from "react";
import "./OfferSection.css";
import axios from "axios";
import OfferCard from "./OfferCard";
import { Link } from "react-router-dom";

function OfferSection() {
  const [offers, setOffers] = useState([]);
  const [offerSelected, SetOfferSelected] = useState("ALL");

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"${offerSelected}"}&limit=6`,
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
  }, [offerSelected]);

  return (
    <div className="offer-section">
      <div className="offer-section-navbar">
        <div className="offer-section-navbar-text">Offers</div>

        <div className="offer-section-navbar-content">
          <div
            className={
              offerSelected === "ALL"
                ? "offer-section-navbar-content-selected"
                : "offer-section-navbar-content-notselected"
            }
            onClick={() => SetOfferSelected("ALL")}
          >
            <p> All Offers </p>
           
          </div>

          <div
            className={
              offerSelected === "FLIGHTS"
                ? "offer-section-navbar-content-selected"
                : "offer-section-navbar-content-notselected"
            }
            onClick={() => SetOfferSelected("FLIGHTS")}
          >
            Flights
          </div>

          <div
            className={
              offerSelected === "HOTELS"
                ? "offer-section-navbar-content-selected"
                : "offer-section-navbar-content-notselected"
            }
            onClick={() => SetOfferSelected("HOTELS")}
          >
            Hotels
          </div>

          <div
            className={
              offerSelected === "RAILS"
                ? "offer-section-navbar-content-selected"
                : "offer-section-navbar-content-notselected"
            }
            onClick={() => SetOfferSelected("RAILS")}
          >
            Trains
          </div>
        </div>
        <div className="lg:text-lg text-sm font-semibold text-blue-500 w-3/10 flex items-center px-3 cursor-pointer"> 
        <Link to={"/all-offer"}>View All</Link></div>
      </div>

      <div className="offer-section-content">
        {offers.map((offer, index) => (
          <OfferCard offer={offer} key={index} />
        ))}
      </div>
    </div>
  );
}

export default OfferSection;
