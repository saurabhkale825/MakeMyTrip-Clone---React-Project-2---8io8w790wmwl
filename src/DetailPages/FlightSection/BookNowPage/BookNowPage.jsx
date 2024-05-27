import { useState, useEffect, useContext } from "react";
import "./BookNowPage.css";
import { useParams } from "react-router-dom";
import NavbarDetails from "../../../Homepage/Navbar/NavbarDetails";
import axios from "axios";
import BookNowPageheader from "./BookNowPageheader";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FlightContext from "../../../Context/FlightsContext";
import { format } from "date-fns";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import UserDetails from "../../UserDetails/UserDetails";

function BookNowPage() {
  const { itemId } = useParams();
  const [data, setData] = useState({});
  const { startDate } = useContext(FlightContext);

  useEffect(() => {
    localStorage.setItem('value',"flight")
}, []);


  const FormatAirlineName = (airline) => {
    if (airline === "65144a1b664a43628887c45e") {
      return "Indigo";
    } else if (airline === "65144a1b664a43628887c460") {
      return "AirIndia";
    } else if (airline === "65144a1b664a43628887c45d") {
      return "Vistara";
    } else if (airline === "65144a1b664a43628887c45f") {
      return "SpiceJet";
    } else if (airline === "65144a1b664a43628887c461") {
      return "Akasa";
    }
  };

  const FormatAirlineImage = (airline) => {
    if (airline === "65144a1b664a43628887c45e") {
      return "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=18";
    } else if (airline === "65144a1b664a43628887c460") {
      return "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18";
    } else if (airline === "65144a1b664a43628887c45d") {
      return "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?v=18";
    } else if (airline === "65144a1b664a43628887c45f") {
      return "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=18";
    } else if (airline === "65144a1b664a43628887c461") {
      return "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/QP.png?v=18";
    }
  };

  const day = startDate.toLocaleDateString("en-US", { weekday: "long" });

  const FormatedDate = (travelDate) => format(travelDate, "MMM dd");

  const FetchData = async () => {
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/bookingportals/flight/${itemId}`,
      {
        headers: {
          projectID: "8io8w790wmwl",
        },
      }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    FetchData();
    console.log(data);
  }, [itemId]);

  const updateTax = (fare) => {
    const result = Math.floor((fare * 25) / 100);
    return result;
  };

  return (
    <>
      <NavbarDetails />
      <BookNowPageheader />
      <div className="book-now-page">
        <div className="book-now-flight-content">
          <div className="book-now-flight-heading">
            <div className="book-now-flight-heading-sub mb">
              <div className="text-left ">
                <span className="font-semibold lg:text-lg md:text-base text-sm mr-2">
                  {data.source}
                </span>
                <span>
                  <ArrowRightAltIcon />
                </span>
                <span className="font-semibold lg:text-lg md:text-base text-sm mr-2">
                  {data.destination}
                </span>
              </div>
              <div className="flex items-center">
                <div className="book-now-date-section lg:text-base text-xs lg:font-semibold font-medium">{`${day} , ${FormatedDate(
                  startDate
                )}`}</div>
                <div className="flex gap-1 lg:text-sm text-xs">
                  <p>{data.stops} stop</p>
                  <p>-</p>
                  <p>{`${data.duration}hr`}</p>
                </div>
              </div>
            </div>

            <div className="book-now-flight-sub-right">
              <div className="book-now-flight-sub-right-top">
                Cancellation fees apply
              </div>
              <div className="book-now-flight-sub-right-bottom">
                View Fare Rules
              </div>
            </div>
          </div>

          <div className="flex  justify-between mx-4 py-1">
            <div className="flex w-fit gap-3 items-center">
              <img
                src={FormatAirlineImage(data.airline)}
                alt="logo"
                width="25px"
              />
              <div className="font-bold lg:text-lg text-xs">{FormatAirlineName(data.airline)}</div>
              <div className="text-s">{data.flightID}</div>
              <div className="text-s font-semibold text-gray-500 p-1 border border-black rounded-2xl">
                Airbus A321
              </div>
            </div>
            <div>
              <span className="text-s mr-2">{`Economy >`}</span>
              <span className="color-249995 font-semibold lg:text-base text-xs">SAVER</span>
            </div>
          </div>

          <div className="book-now-flight-timing">
            <div className="md:flex items-center justify-around  w-1/5  hidden ">
              <div>{data.departureTime}</div>
              <div>
                <RadioButtonUncheckedIcon sx={{ fontSize: 14 }} />
              </div>
              <div>{data.source}</div>
            </div>

            <div className="border-l-2 border-dashed border-gray-500 w-1/4 h-10 relative flex items-center book-now-filght-duration md:block hidden">
              <div className="ml-7 text-gray-500 font-thin">
                {data.duration} hr
              </div>
            </div>

            <div className="md:flex items-center justify-around  w-1/5  hidden ">
              <div>{data.arrivalTime}</div>
              <div>
                <RadioButtonUncheckedIcon sx={{ fontSize: 14 }} />
              </div>
              <div>{data.destination}</div>
            </div>

            <div className="book-now-flight-extra">
              <div className="flex justify-between w-full px-2">
                <div className="flex w-fit">
                  <span>
                    <img
                      src="https://imgak.mmtcdn.com/flights/assets/media/dt/review/cabin_baggage_icon.png?v=2"
                      alt="logo"
                      width="25px"
                    />
                  </span>
                  <span className="ml-1">
                    <span className="lg:text-base text-xs">Cabin Baggage:</span>
                    <span className=" lg:text-xs text-s font-thin ml-1">
                      7 Kgs (1 piece only) / Adult
                    </span>
                  </span>
                </div>

                <div className="flex w-fit lg:ml-1 ml-2">
                  <span>
                    <img
                      src="https://imgak.mmtcdn.com/flights/assets/media/dt/review/checkin_baggage_icon.png"
                      alt="logo"
                      width="25px"
                    />
                  </span>
                  <span className="ml-1">
                    <span className="lg:text-base text-xs">Check-in Baggage:</span>
                    <span className="lg:text-xs text-s font-thin ml-1">
                      15 Kgs (1 piece only) / Adult
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="book-now-fare">
          <h3 className="font-semibold text-heading text-left  ">Fare Summary</h3>
          <div className="border-t border-gray-300 flex justify-between mt-2 pt-2 font-semibold">
            <div>
              <span>
                <AddCircleOutlineIcon sx={{ fontSize: 20 }}  className='toggle-visibility' />
              </span>
              <span className="lg:ml-1 font-gray-300 text-s">Base Fare</span>
            </div>
            <span className="font-thin lg:text-sm text-xs lg:ml-0 ml-1">{`₹ ${data.ticketPrice}`}</span>
          </div>
          <div className="border-t border-gray-300 flex justify-between mt-2 pt-2 font-semibold">
          <div>
              <span>
                <AddCircleOutlineIcon sx={{ fontSize: 20 }}  className='toggle-visibility'/>
              </span>
              <span className="ml-1 font-gray-300 text-s">Taxes</span>
            </div>
            <span className="font-thin lg:text-sm text-xs">{`₹ ${updateTax(data.ticketPrice)}`}</span>
          </div>

          <div className="border-t border-black flex justify-between  pt-2 font-semibold mt-5">
            <span className="lg:ml-1 font-gray-300 text-s">Total Amount </span>
            <span className="font-thin lg:text-sm text-xs ">
              {`₹${data.ticketPrice + updateTax(data.ticketPrice)}`}
            </span>
          </div>
        </div>
      </div>

      <UserDetails />
    </>
  );
}

export default BookNowPage;
