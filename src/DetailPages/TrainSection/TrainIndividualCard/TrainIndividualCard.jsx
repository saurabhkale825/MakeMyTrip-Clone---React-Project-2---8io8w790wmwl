import {useEffect} from "react";
import "./TrainIndividualCard.css";
import { Link } from "react-router-dom";

function TrainIndividualCard(Trains) {

  const FormatDay = (item) => {
    if (item === "Mon") {
      return "M";
    } else if (item === "Tue" || item === "Thu") {
      return "T";
    } else if (item === "Wed") {
      return "W";
    } else if (item === "Fri") {
      return "F";
    } else {
      return "S";
    }
  };

  

  return (
    <div className="train-individual-card">
        
      <div className="train-individaul-card-first">
        <div className="train-individual-cart-name">
          <h2 className="trainName">{Trains?.Trains.trainName}</h2>
          <div className="flex items-between flex-col">
            <span className="trainNumber text-xs">{`${Trains?.Trains.trainNumber}`}</span>
            <div className="flex justify-between items-center text-xs">
              <div>
                departs on:
                {Trains?.Trains.daysOfOperation?.map((item , index) => (
                  <span className="xl-1" key={index}>{FormatDay(item)} </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="train-departure-time">
          <div className="text-lg font-bold">{Trains?.Trains.departureTime}</div>
          <div className="text-xs">{Trains?.Trains.source}</div>
        </div>
        <div className="empty-space mx-2"></div>
        <div className="train-duration ">
          <div className="text-lg font-bold">{Trains?.Trains.travelDuration}</div>
          <div className="text-xs text-blue-700 font-semibold ml-1">
            View Route
          </div>
        </div>
        <div className="empty-space mx-2"></div>
        <div className="train-arrival-time ">
          <div className="text-lg font-bold">{Trains?.Trains.arrivalTime}</div>
          <div className="text-xs ">{Trains?.Trains.destination}</div>
        </div>

        <div className="train-fare">
          <div className="text-xs font-normal">Train Fare</div>
          <div className="train-fare-content"> ₹{Trains?.Trains.fare}</div>
        </div>

        <div className="train-availableSeats">
          <div className="update-seat">Available Seats </div>
          <div className="text-xl text-sky-500">{Trains?.Trains.availableSeats}</div>
        </div>
      </div>

      <div className="train-individaul-card-second">
        {Trains?.Trains?.coaches?.map((coach) => (
          <Link to={"/railways/review"}>
          <div className="individual-coach-details" key={coach._id}>
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold text-black">
                {coach.coachType}
              </div>
              <div className="text-xs text-sky-500">
                <span>AVL </span>
                <span>{coach.numberOfSeats}</span>
              </div>
            </div>
            <div className="update-time text-left mt-4">Free Cancellation</div>
            <div className="update-time text-left ">{`Updated 10 min ago.`}</div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TrainIndividualCard;
