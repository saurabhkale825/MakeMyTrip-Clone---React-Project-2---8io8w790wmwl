import { useEffect, useState } from "react";
import "./IndividualBus.css";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import SeatSelection from "../SeatSelection/SeatSelection";

function IndividualBus(bus) {

  const[showSelectionSeat , setShowSelectionSeat] = useState(false);

  const DurationHours = (arrival, departure) => {
    const a = parseInt(arrival.split(":")[0]);
    const d = parseInt(departure.split(":")[0]);
    return a > d ? a - d : a + 24 - d;
  };

  const DurationMins = (arrival, departure) => {
    const a = parseInt(arrival.split(":")[1]);
    const d = parseInt(departure.split(":")[1]);
    return a >= d ? (a - d === 0 ? "00" : a - d) : a + 60 - d;
  };

  const Ratings = () => {
    const rating = Math.floor(Math.random() * 999);
    return rating;
  };

  const WindowSeats = (seats) => {
    return seats - 15;
  };

  useEffect(() => {
    Ratings();
    WindowSeats();
  }, []);

  return (
    <div className="individualbus">
      <div className="individualbus-details">
        <div className="individual-bus-name">
          <h3 className="bus-name">{bus.bus.name}</h3>
          <div className="mt-2 text-base">{bus.bus.type}</div>
        </div>
        <div className="individual-bus-info">
          <div className="bus-departure">
            <div className="lg:font-bold font-semibold text-black lg:text-sm text-xs">{bus.bus.departureTime}</div>
            <div className="text-s">{bus.bus.source.split(",")[0]}</div>
          </div>
          <div className="bus-seperator">
            <div className="time-seperator"></div>
          </div>
          <div className="flex justify-center items-center h-1/2 bus-departure text-medium lg:text-sm">{`${DurationHours(
            bus.bus.arrivalTime,
            bus.bus.departureTime
          )}hrs${DurationMins(bus.bus.arrivalTime, bus.bus.departureTime)}min`}</div>
          <div className="bus-seperator">
            <div className="time-seperator"></div>
          </div>
          <div className="bus-departure">
            <div className="lg:font-bold font-semibold text-black lg:text-sm text-xs">{bus.bus.arrivalTime}</div>
            <div className="text-s">{bus.bus.destination.split(",")[0]}</div>
          </div>
        </div>
        <div className="individual-bus-fare">
          <div className="text-medium font-thin">Fare</div>
          <div className="text-medium lg:font-bold font-semibold">{`₹ ${bus.bus.fare}`}</div>
        </div>
      </div>

      <div className="individual-bus-middle">
        <div className="individual-bus-middle-left">
          <div className="bus-rating">
            <div>
              <StarIcon sx={{ fontSize: 15 }} />
            </div>
            <div>4.0</div>
          </div>
          <div className="flex justify-center items-center  text-xs font-thin">{`${Ratings()} Ratings`}</div>
        </div>

        <div className="individual-bus-middle-right">
          <div className="individual-bus-middle-right-text">{`${bus.bus.seats} Seats left`}</div>
          <div className="individual-bus-middle-right-text border-l border-black px-1">{`${WindowSeats(
            bus.bus.seats
          )} Window Seats`}</div>
        </div>
      </div>

      <div className="individual-bus-middle-lower">
        <div className="individual-bus-middle-lower-left">
            <p className="text-xs font-semibold text-black">Amenities:</p>
            <ul className="flex gap-4 w-full ml-1">
          {bus?.bus.amenities?.map((amenities , index) => (
            <li key={index}>{amenities}</li>
          ))}
          </ul>
        </div>
        <div className="individual-bus-middle-lower-right" onClick={() => setShowSelectionSeat(!showSelectionSeat)}>
            select seats
        </div>
      </div>
      <div  className={showSelectionSeat === true ? "block" : "hidden"}><SeatSelection bus={bus?.bus} /></div>
    </div>
  );
}

export default IndividualBus;
