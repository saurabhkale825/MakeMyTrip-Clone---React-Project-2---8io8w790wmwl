import {useContext} from "react";
import "./TrainIndividualCard.css";
import { Link } from "react-router-dom";
import TrainContext from "../../../Context/TrainContext";

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

  const {setCoachType , setSeats} = useContext(TrainContext)

  const UpdateSeats = (coach , seat) => {
    setCoachType(coach);
    setSeats(seat);
  }
  

  return (
    <div className="train-individual-card">
        
      <div className="train-individaul-card-first">
        <div className="train-individual-cart-name">
          <h2 className="trainName">{Trains?.Trains.trainName}</h2>
          <div className="flex items-between flex-col">
            <span className="trainNumber text-s">{`${Trains?.Trains.trainNumber}`}</span>
            <div className="lg:flex justify-between items-center text-xs hidden">
              <div className="text-xs">
                departs on:
                {Trains?.Trains.daysOfOperation?.map((item , index) => (
                  <span className="xl-1 text-s" key={index}>{FormatDay(item)} </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="train-departure-time">
          <div className="lg:text-lg text-sm font-bold">{Trains?.Trains.departureTime}</div>
          <div className="text-s">{Trains?.Trains.source}</div>
        </div>
        <div className="empty-space mx-2  lg:block hidden"></div>
        <div className="train-duration ">
          <div className="lg:text-lg text-xs lg:font-bold font-medium">{Trains?.Trains.travelDuration}</div>
          <div className="text-s text-blue-700 font-semibold ml-1">
            View Route
          </div>
        </div>
        <div className="empty-space mx-2 lg:block hidden"></div>
        <div className="train-arrival-time ">
          <div className="lg:text-lg text-sm font-bold">{Trains?.Trains.arrivalTime}</div>
          <div className="text-s ">{Trains?.Trains.destination}</div>
        </div>

        <div className="train-fare">
          <div className="text-s lg:font-semibold font-normal">Train Fare</div>
          <div className="train-fare-content"> ₹{Trains?.Trains.fare}</div>
        </div>

        <div className="train-availableSeats">
          <div className="update-seat">Available Seats </div>
          <div className="lg:text-xl text-sky-500">{Trains?.Trains.availableSeats}</div>
        </div>
      </div>

      <div className="train-individaul-card-second">
        {Trains?.Trains?.coaches?.map((coach) => (
          <Link to={`/railways/bookingpage/${Trains?.Trains._id}`}>
          <div className="individual-coach-details" key={coach._id}  onClick={() => UpdateSeats(coach.coachType , coach.numberOfSeats)}>
            <div className="flex justify-between items-center">
              <div className="lg:text-lg text-xs font-semibold text-black">
                {coach.coachType}
              </div>
              <div className="text-s text-sky-500">
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
