import { useState ,useEffect} from "react";
import "./SeatSelection.css";
import Seat from "../../../Assest/Logo/busListingSprite2.91d970f4 (1).png";
import BusSteering from "../../../Assest/Logo/Bus-sterring.png";
import HoverSeat from "../../../Assest/Logo/HoverSeat.png"
import InfoIcon from '@mui/icons-material/Info';

function SeatSelection() {

  const [hovered , setHovered] = useState(0);

  useEffect(() => {
    console.log(hovered);

  }, [hovered]);
  return (
    <div className="SeatSelection">
      <div className="w-3/5 ">
      <div className="flex justify-between p-2 ">
        <div className="font-semibold text-black">Select Seats</div>
        <div className="flex text-xs">
          <span><img src={InfoIcon} alt="info" width="30px"/></span>
          <span>Know your seat</span></div>
      </div>
     
      <div className="bus-layout ml-10 ">
        <div className="bus-layout-line">
          <div className="bus-layout-line-left">
            <div className="p-4 mt-5">
              <div></div>
            </div>
            
            <div className="flex justify-evenly mb-4" >
              <img src={hovered === 1?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="1" onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(0)}/>
              <img src={hovered === 2?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="2" onMouseEnter={() => setHovered(2)} onMouseLeave={() => setHovered(0)}/>
            </div>
            <div className="flex justify-evenly mb-4" >
              <img src={hovered === 3?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="3" onMouseEnter={() => setHovered(3)} onMouseLeave={() => setHovered(0)}/>
              <img src={hovered === 4?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="4" onMouseEnter={() => setHovered(4)} onMouseLeave={() => setHovered(0)}/>
            </div>
            <div className="flex justify-evenly mb-4" >
              <img src={hovered === 5?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="5" onMouseEnter={() => setHovered(5)} onMouseLeave={() => setHovered(0)}/>
              <img src={hovered === 6?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="6" onMouseEnter={() => setHovered(6)} onMouseLeave={() => setHovered(0)}/>
            </div>
            <div className="flex justify-evenly mb-4" >
              <img src={hovered === 7?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="7" onMouseEnter={() => setHovered(7)} onMouseLeave={() => setHovered(0)}/>
              <img src={hovered === 8?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="8" onMouseEnter={() => setHovered(8)} onMouseLeave={() => setHovered(0)}/>
            </div>
            <div className="flex justify-evenly mb-4" >
              <img src={hovered === 9?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="9" onMouseEnter={() => setHovered(9)} onMouseLeave={() => setHovered(0)}/>
              <img src={hovered === 10?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="10" onMouseEnter={() => setHovered(10)} onMouseLeave={() => setHovered(0)}/>
            </div>
            <div className="flex justify-evenly mb-4" >
              <img src={hovered === 11?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="11" onMouseEnter={() => setHovered(11)} onMouseLeave={() => setHovered(0)}/>
              <img src={hovered === 12?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="12" onMouseEnter={() => setHovered(12)} onMouseLeave={() => setHovered(0)}/>
            </div>
            <div className="flex justify-evenly mb-4" >
              <img src={hovered === 13?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="13" onMouseEnter={() => setHovered(13)} onMouseLeave={() => setHovered(0)}/>
              <img src={hovered === 14?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="14" onMouseEnter={() => setHovered(14)} onMouseLeave={() => setHovered(0)}/>
            </div>
            
          </div>
        </div>
        <div className="bus-layout-line">
          <div className="bus-layout-line-left">
            <div className="flex justify-right mb-4">
              <img src={BusSteering} alt="logo" width="30px" className="ml-16 mt-2"/>
            </div>
            <div className="flex justify-evenly mb-4" >
              <img src={hovered === 15?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="15" onMouseEnter={() => setHovered(15)} onMouseLeave={() => setHovered(0)}/>
              <img src={hovered === 16?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="16" onMouseEnter={() => setHovered(16)} onMouseLeave={() => setHovered(0)}/>
            </div>
            <div className="flex justify-evenly mb-4" >
              <img src={hovered === 17?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="17" onMouseEnter={() => setHovered(17)} onMouseLeave={() => setHovered(0)}/>
              <img src={hovered === 18?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="18" onMouseEnter={() => setHovered(18)} onMouseLeave={() => setHovered(0)}/>
            </div>
            <div className="flex justify-evenly mb-4" >
              <img src={hovered === 19?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="19" onMouseEnter={() => setHovered(19)} onMouseLeave={() => setHovered(0)}/>
              <img src={hovered === 20?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="20" onMouseEnter={() => setHovered(20)} onMouseLeave={() => setHovered(0)}/>
            </div>
            <div className="flex justify-evenly mb-4" >
              <img src={hovered === 21?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="21" onMouseEnter={() => setHovered(21)} onMouseLeave={() => setHovered(0)}/>
              <img src={hovered === 22?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="22" onMouseEnter={() => setHovered(22)} onMouseLeave={() => setHovered(0)}/>
            </div>
            <div className="flex justify-evenly mb-4" >
              <img src={hovered === 23?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="23" onMouseEnter={() => setHovered(23)} onMouseLeave={() => setHovered(0)}/>
              <img src={hovered === 24?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="24" onMouseEnter={() => setHovered(24)} onMouseLeave={() => setHovered(0)}/>
            </div>
            <div className="flex justify-evenly mb-4" >
              <img src={hovered === 25?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="25" onMouseEnter={() => setHovered(25)} onMouseLeave={() => setHovered(0)}/>
              <img src={hovered === 26?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="26" onMouseEnter={() => setHovered(26)} onMouseLeave={() => setHovered(0)}/>
            </div>
            <div className="flex justify-evenly mb-4" >
              <img src={hovered === 27?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="27" onMouseEnter={() => setHovered(27)} onMouseLeave={() => setHovered(0)}/>
              <img src={hovered === 28?HoverSeat:Seat} alt="logo" width="40px" className="individual-bus-hovered === id?HoverSeat:Seat" id="28" onMouseEnter={() => setHovered(28)} onMouseLeave={() => setHovered(0)}/>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default SeatSelection;
