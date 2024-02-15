import {useState} from "react";
import "./IndividualFlightCard.css";
import { Link } from "react-router-dom";

function IndividualFlightCard(Flight) {

  const[showViewAll , setShowViewAll] = useState(false);

  const FormatAirlineName = (airline) => {
    if(airline === "65144a1b664a43628887c45e"){
      return "Indigo";
    }
    else if(airline === "65144a1b664a43628887c460"){
      return "AirIndia";
    }
    else if(airline === "65144a1b664a43628887c45d"){
      return "Vistara";
    }
    else if(airline === "65144a1b664a43628887c45f"){
      return "SpiceJet";
    }
    else{
      return "Akasa";
    }
  }

  const FormatAirlineImage = (airline) => {
      if(airline === "65144a1b664a43628887c45e"){
        return "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=18";
      }
      else if(airline === "65144a1b664a43628887c460"){
        return "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18";
      }
      else if(airline === "65144a1b664a43628887c45d"){
        return "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?v=18";
      }
      else if(airline === "65144a1b664a43628887c45f"){
        return "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=18";
      }
      else{
        return "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/QP.png?v=18";
      }
  }

  const FormatStop = (stop) =>
    stop === 0 ? "Non Stop" : stop === 1 ? `${stop} stop` : `${stop} stops`;

  return (
    <>
    <div className="individualflightcard">
      <div className="flight-image">
        <img
          src={FormatAirlineImage(Flight.Flight.airline)}
          alt="icon"
          width="50px"
          height="50px"
          className="singleairline"
        />
        <div className="flight-info">
          <p className="airlinename">{FormatAirlineName(Flight.Flight.airline)}</p>
          <p className="airlinecode">{Flight.Flight.flightID}</p>
        </div>
      </div>

      <div className="timing-option">
        <div className="departur-time">
          <p className="flighttimeinfo">{Flight.Flight.departureTime}</p>
          <p className="flightdeparture">{Flight.Flight.source}</p>
        </div>

        <div className="stop-info">
          <div className="flight-duration">{`${Flight.Flight.duration} hr`}</div>
          <div className="flistopSepLine"></div>
          <div className="flights-stops">{FormatStop(Flight.Flight.stops)}</div>
        </div>

        <div className="departur-time">
          <p className="flighttimeinfo">{Flight.Flight.arrivalTime}</p>
          <p className="flightdeparture">{Flight.Flight.destination}</p>
        </div>

        </div>

        <div className="priceSection">
          <div className="price-cluster">{`₹ ${Flight.Flight.ticketPrice}`}
          <p className="price-text">per adult</p>
          </div>
          <div className="price-section-view-button" onClick={() => setShowViewAll(!showViewAll)}>
           {showViewAll === true ? "HIDE PRICES" : "View All"}
          </div>
        </div>
      </div>
      {showViewAll === true ? <div className="individual-flight-more-details">
        <div>
          <div className="individual-flight-more-details-heading">Fares</div>
          <div className="individual-flight-more-details-content">
            <h3>Saver</h3>
            <p>Fare offered by airine.</p>
          </div>
        </div>

        <div>
          <div className="individual-flight-more-details-heading">cabin bag</div>
          <div className="individual-flight-more-details-content">7 Kgs/Adult</div>
        </div>

        <div>
          <div className="individual-flight-more-details-heading">check-in</div>
          <div className="individual-flight-more-details-content">15 Kgs/Adult</div>
        </div>

        <div>
          <div className="individual-flight-more-details-heading">cancellation</div>
          <div className="individual-flight-more-details-content">
            <p>Cancellation</p>
            <p>Free Starting ₹</p>
            <p>3,500</p>
          </div>
        </div>

        <div>
          <div className="individual-flight-more-details-heading">date change</div>
          <div className="individual-flight-more-details-content">
          <p>Date Change</p>
            <p>Free Starting ₹</p>
            <p>3,250</p>
          </div>
        </div>

        <div>
          <div className="individual-flight-more-details-heading">seat</div>
          <div className="individual-flight-more-details-content">Chargeable</div>
        </div>

        <div>
          <div className="individual-flight-more-details-heading">meal</div>
          <div className="individual-flight-more-details-content">Chargeable
          </div>
        </div>

        <div>
          <div className="individual-flight-more-details-heading">     </div>
          <div className="individual-flight-more-details-content">
            <h2>{`₹ ${Flight.Flight.ticketPrice}`}</h2>
            <Link to={`/flight-book-now`}>
            <div className="individual-flight-book-now-button">Book Now</div>
            </Link></div>
        </div>
        
      </div> : null} 
      </>
  );
}

export default IndividualFlightCard;
