import React, { useState, useEffect } from "react";
import "./MyTrips.css";
import NavbarDetails from "../Homepage/Navbar/NavbarDetails";
import axios from "axios";
import Coming from "../Assest/Logo/Upcoming.png";
import Planned from "../Assest/Logo/Planned.png";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import TripContainer from "./TripContainer";

function MyTrips() {
  const [data, setData] = useState([]);
  const [displayData , setDisplayData] = useState([]);
  const [showUpcoming, setShowUpcoming] = useState(true);
  const [displayingSection, setDisplayingSection] = useState([]);

  const user = localStorage.getItem("user-info");
  const userData = user ? JSON.parse(user) : null;
  const token = userData && userData.data ? userData.token : null;


  
  

  // To fetch trips from the database.
  const FetchMyTrips = async () => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/booking/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            projectID: "8io8w790wmwl",
          },
        }
      );

      console.log("data",response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  useEffect(() => {
    FetchMyTrips();
  }, [token]); // Fetch data whenever token changes

  
  const isPresent = (target) => {
    return (displayingSection.includes(target) ? true : false);
  } 

  const ToggleDisplaySection = (target) => {
    setDisplayingSection(displayingSection.includes(target) ? displayingSection.filter(x => x !== target) : [...displayingSection , target]);  
  }

  useEffect(() => {
    const updateDisplayData = () => {
      setDisplayData(
        data.filter((trip) => displayingSection.includes(trip.booking_type))
      );
    };

    updateDisplayData();
  }, [displayingSection, data]);

  return (
    <div className="mytrips">
      <NavbarDetails />
      <div className="mytrips-heading">
        <div className="text-left ml-5">
          <span className="text-lg font-semibold font-black">My Account</span>
          <span> - </span>
          <span className="text-lg font-semibold font-black">My Trips</span>
        </div>

        <div className="my-trips-container">
          <div className="trips-option">
            <div
              className="w-40 flex items-center ml-3 gap-x-2 cursor-pointer"
              onClick={() => setShowUpcoming(true)}
            >
              <span>
                <img src={Coming} alt="logo" width="40px" />
              </span>
              <span className="text-base font-semibold ">Upcoming</span>
            </div>

            <div
              className="w-40 flex items-center ml-3 gap-x-2 cursor-pointer "
              onClick={() => setShowUpcoming(false)}
            >
              <span>
                <img src={Planned} alt="logo" width="40px" />
              </span>
              <span className="text-base font-semibold ">Completed</span>
            </div>
          </div>

          {showUpcoming === true ? (
            <div className="upcoming-container">
              <div className="flex items-center">
                <img
                  src="https://imgak.mmtcdn.com/mima/images/Desktop/upcoming-empty.png"
                  alt="logo"
                  width="50px"
                  height="50px"
                  className="upcoming-images"
                />
                <div>
                  <div className="text-lg font-semibold text-black">
                    Looks empty, you've no upcoming bookings.
                  </div>
                  <p>When you book a trip, you will see your itinerary here.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="planned-container">
              <div className="trip-sorter rounded">
                <h3 className="font-semibold text-base">Sort Trips:</h3>
                <div className="flex justify-evenly items-center " onClick={() => ToggleDisplaySection("flight")}>
                  <span>{isPresent("flight") ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}</span>
                  <span>Flight</span>
                </div>

                <div className="flex justify-evenly items-center " onClick={() => ToggleDisplaySection("hotel")}>
                  <span>{isPresent("hotel") ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}</span>
                  <span>Hotel</span>
                </div>

                <div className="flex justify-evenly items-center " onClick={() => ToggleDisplaySection("train")}>
                  <span>{isPresent("train") ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}</span>
                  <span>Train</span>
                </div>

                <div className="flex justify-evenly items-center " onClick={() => ToggleDisplaySection("bus")}>
                  <span>{isPresent("bus") ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}</span>
                  <span>Bus</span>
                </div>
                </div>

              { data.length ? (displayData.length > 0 ? (
                <ul>
                  {displayData.map((item) => (
                    <li key={item._id} className="mt-2 w-full">
                      <TripContainer trip={item} />
                     
                    </li>
                  ))}
                </ul>) : (
                <ul>
                  {data.map((item) => (
                    <li key={item._id} className="mt-2 w-full">
                      <TripContainer trip={item} />
                     
                    </li>
                  ))}
                </ul>)
              ) : (
                <div className="flex justify-center items-center m-auto font-bold text-3xl antialiasedtext-zinc-800">
                  No Trips Not Planned Yet!
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
