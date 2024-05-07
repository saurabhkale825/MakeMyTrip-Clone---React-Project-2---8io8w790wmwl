import { useState, useEffect } from "react";
import "./SeatSelection.css";
import Seat from "../../../Assest/Logo/busListingSprite2.91d970f4 (1).png";
import BusSteering from "../../../Assest/Logo/Bus-sterring.png";
import HoverSeat from "../../../Assest/Logo/HoverSeat.png";
import InfoIcon from "@mui/icons-material/Info";
import { Link, useParams } from "react-router-dom";

function SeatSelection(bus) {
  const [hovered, setHovered] = useState(0);
  const [seatselected, setSeatselected] = useState([]);
  const [numberSelected, setNumberSeleted] = useState(0);

  const HandleSeatSelection = (id) => {
    setSeatselected((seatselected) => {
      const isSelected = seatselected.includes(id);

      if (isSelected) {
        return seatselected.filter((seat) => seat !== id);
      } else {
        return [...seatselected, id];
      }
    });
  };

  useEffect(() => {
    setNumberSeleted(seatselected.length);
  }, [seatselected.length]);

  console.log(bus);

  return (
    <div className="SeatSelection">
      <div className="w-1/2 ">
        <div className="flex justify-between p-2 w-4/5">
          <div className="font-semibold text-black">Select Seats</div>
          <div className="flex items-center text-xs">
            <span>
              <InfoIcon sx={{ fontSize: 20 }} />
            </span>
            <span className="text-sm ml-2">Know your seat</span>
          </div>
        </div>

        <div className="bus-layout ml-10 ">
          <div className="bus-layout-line">
            <div className="bus-layout-line-left">
              <div className="p-4 mt-5">
                <div></div>
              </div>

              <div className="flex justify-evenly mb-4">
                <img
                  src={
                    seatselected.includes(1) || hovered === 1 ? HoverSeat : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id || ?HoverSeat:Seat"
                  id="1"
                  onMouseEnter={() => setHovered(1)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(1);
                  }}
                />
                <img
                  src={
                    seatselected.includes(2) || hovered === 2 ? HoverSeat : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="text-blue-500"
                  id="2"
                  onMouseEnter={() => setHovered(2)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(2);
                  }}
                />
              </div>
              <div className="flex justify-evenly mb-4">
                <img
                  src={
                    seatselected.includes(3) || hovered === 3 ? HoverSeat : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="text-blue-500"
                  id="3"
                  onMouseEnter={() => setHovered(3)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(3);
                  }}
                />
                <img
                  src={
                    seatselected.includes(4) || hovered === 4 ? HoverSeat : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="4"
                  onMouseEnter={() => setHovered(4)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(4);
                  }}
                />
              </div>
              <div className="flex justify-evenly mb-4">
                <img
                  src={
                    seatselected.includes(5) || hovered === 5 ? HoverSeat : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="5"
                  onMouseEnter={() => setHovered(5)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(5);
                  }}
                />
                <img
                  src={
                    seatselected.includes(6) || hovered === 6 ? HoverSeat : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="6"
                  onMouseEnter={() => setHovered(6)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(6);
                  }}
                />
              </div>
              <div className="flex justify-evenly mb-4">
                <img
                  src={
                    seatselected.includes(7) || hovered === 7 ? HoverSeat : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="7"
                  onMouseEnter={() => setHovered(7)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(7);
                  }}
                />
                <img
                  src={
                    seatselected.includes(8) || hovered === 8 ? HoverSeat : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="8"
                  onMouseEnter={() => setHovered(8)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(8);
                  }}
                />
              </div>
              <div className="flex justify-evenly mb-4">
                <img
                  src={
                    seatselected.includes(9) || hovered === 9 ? HoverSeat : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="9"
                  onMouseEnter={() => setHovered(9)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(9);
                  }}
                />
                <img
                  src={
                    seatselected.includes(10) || hovered === 10
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="10"
                  onMouseEnter={() => setHovered(10)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(10);
                  }}
                />
              </div>
              <div className="flex justify-evenly mb-4">
                <img
                  src={
                    seatselected.includes(11) || hovered === 11
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="11"
                  onMouseEnter={() => setHovered(11)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(11);
                  }}
                />
                <img
                  src={
                    seatselected.includes(12) || hovered === 12
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="12"
                  onMouseEnter={() => setHovered(12)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(12);
                  }}
                />
              </div>
              <div className="flex justify-evenly mb-4">
                <img
                  src={
                    seatselected.includes(13) || hovered === 13
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="13"
                  onMouseEnter={() => setHovered(13)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(13);
                  }}
                />
                <img
                  src={
                    seatselected.includes(14) || hovered === 14
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="14"
                  onMouseEnter={() => setHovered(14)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(14);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="bus-layout-line">
            <div className="bus-layout-line-left">
              <div className="flex justify-right mb-4">
                <img
                  src={BusSteering}
                  alt="logo"
                  width="30px"
                  className="ml-16 mt-2"
                />
              </div>
              <div className="flex justify-evenly mb-4">
                <img
                  src={
                    seatselected.includes(15) || hovered === 15
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="15"
                  onMouseEnter={() => setHovered(15)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(15);
                  }}
                />
                <img
                  src={
                    seatselected.includes(16) || hovered === 16
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="16"
                  onMouseEnter={() => setHovered(16)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(16);
                  }}
                />
              </div>
              <div className="flex justify-evenly mb-4">
                <img
                  src={
                    seatselected.includes(17) || hovered === 17
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="17"
                  onMouseEnter={() => setHovered(17)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(17);
                  }}
                />
                <img
                  src={
                    seatselected.includes(18) || hovered === 18
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="18"
                  onMouseEnter={() => setHovered(18)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(18);
                  }}
                />
              </div>
              <div className="flex justify-evenly mb-4">
                <img
                  src={
                    seatselected.includes(19) || hovered === 19
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="19"
                  onMouseEnter={() => setHovered(19)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(19);
                  }}
                />
                <img
                  src={
                    seatselected.includes(20) || hovered === 20
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="20"
                  onMouseEnter={() => setHovered(20)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(20);
                  }}
                />
              </div>
              <div className="flex justify-evenly mb-4">
                <img
                  src={
                    seatselected.includes(21) || hovered === 21
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="21"
                  onMouseEnter={() => setHovered(21)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(21);
                  }}
                />
                <img
                  src={
                    seatselected.includes(22) || hovered === 22
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="22"
                  onMouseEnter={() => setHovered(22)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(22);
                  }}
                />
              </div>
              <div className="flex justify-evenly mb-4">
                <img
                  src={
                    seatselected.includes(23) || hovered === 23
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="23"
                  onMouseEnter={() => setHovered(23)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(23);
                  }}
                />
                <img
                  src={
                    seatselected.includes(24) || hovered === 24
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="24"
                  onMouseEnter={() => setHovered(24)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(24);
                  }}
                />
              </div>
              <div className="flex justify-evenly mb-4">
                <img
                  src={
                    seatselected.includes(25) || hovered === 25
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="25"
                  onMouseEnter={() => setHovered(25)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(25);
                  }}
                />
                <img
                  src={
                    seatselected.includes(26) || hovered === 26
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="26"
                  onMouseEnter={() => setHovered(26)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(26);
                  }}
                />
              </div>
              <div className="flex justify-evenly mb-4">
                <img
                  src={
                    seatselected.includes(27) || hovered === 27
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="27"
                  onMouseEnter={() => setHovered(27)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(27);
                  }}
                />
                <img
                  src={
                    seatselected.includes(28) || hovered === 28
                      ? HoverSeat
                      : Seat
                  }
                  alt="logo"
                  width="40px"
                  className="individual-bus-hovered === id?HoverSeat:Seat"
                  id="28"
                  onMouseEnter={() => setHovered(28)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    HandleSeatSelection(28);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/5 h-min border border-black relative top-14 rounded">
        <div className=" flex justify-between p-3 gap-x-2">
          <div className="w-1/2 border border-slate-200 text-left p-2">
            <h3 className="font-semibold uppercase text-black text-xs">
              Pick Up Point
            </h3>
            <div className="bg-slate-200 p-2 mt-3 ">
              <p className="text-sm text-black font-semibold">
                {bus?.bus.departureTime}
              </p>
              <div className="text-base font-medium ">{bus?.bus.source}</div>
            </div>
          </div>

          <div className="w-1/2 border border-slate-200 text-left p-2">
            <h3 className="font-semibold uppercase text-black text-xs">
              Drop Point
            </h3>
            <div className="bg-slate-200 p-2 mt-3">
              <p className="text-sm text-black font-semibold">
                {bus?.bus.arrivalTime}
              </p>
              <div className="text-base font-medium ">
                {bus?.bus.destination}
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-3  pb-2 h-12 flex justify-center items-center">
          <span className="text-lg font-medium text-black">
            Number of Seats :
          </span>
          <span className="text-xl font-semibold text-blue-500 ml-2">
            {numberSelected}
          </span>
        </div>

        <div className=" pb-2 h-12 flex justify-center items-center">
          <span className="text-lg font-medium text-black">
            Total Price:
          </span>
          <span className="text-xl font-semibold text-blue-500 ml-2">
            {numberSelected * bus?.bus.fare}
          </span>
        </div>


        {numberSelected > 0 ? (
        <Link to={`/bus/bookingpage/${bus.bus._id}`}>
          <div className="primary-btn mx-16 my-4">Continue</div>
        </Link>
      ) : (
        <div className="disabled-btn mx-16 my-4" disabled>Continue</div>
      )}
      </div>
    </div>
  );
}

export default SeatSelection;
