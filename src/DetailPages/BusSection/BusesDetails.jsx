import React, { useContext, useState, useEffect } from "react";
import "./BusesDetails.css";
import BusesDetailsNav from "./BusDetailsNav/BusesDetailsNav";
import NavbarDetails from "../../Homepage/Navbar/NavbarDetails";
import BusContext from "../../Context/BusContext";
import IndividualBus from "./IndividualBus/IndividualBus";
import axios from "axios";
import Morning from "../../Assest/Icons/Morning.png";
import Noon from "../../Assest/Icons/Noon.png";
import Evening from "../../Assest/Icons/Evening.png";
import Night from "../../Assest/Icons/Night.png";
import Ac from "../../Assest/Icons/ACIcon.png"
import NonAc from "../../Assest/Icons/NonAcIcon.png"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Link } from "react-router-dom";

function BusesDetails() {
  const { busSource, busDestination, busTravelDate } = useContext(BusContext);
  const day = busTravelDate.toLocaleDateString("en-US", { weekday: "short" });
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  const FetchBuses = async () => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/bus?search={"source":"${busSource}","destination":"${busDestination}"}&day=${day}&filter={${filter}}&sort={${sort}}`,
        {
          headers: {
            projectID: "8io8w790wmwl",
          },
        }
      );

      setData(response.data?.data?.buses);
      // console.log(response.data?.data);
    } catch (error) {
      console.error("Error fetching train data:", error);
    }
  };

  useEffect(() => {
    FetchBuses();
  }, [busSource, busDestination]);


  useEffect(() => {
    FetchBuses();
  }, [sort , filter]);

  const updateClearAll = () => {
    setFilter("");
    setSort("");
  }

  return (
    <>
      <NavbarDetails />
      <BusesDetailsNav />
      <div className="bus-details">
        <div className="bus-filter-container">
          <div className="bus-filter-container-heading">
            <div className="text-lg font-semibold text-black">Filters</div>
            <div className="text-sm text-blue-500 cursor-pointer" onClick={updateClearAll}>
              Clear All
            </div>
          </div>

          <div className="bus-filter-container-section">
            <h3 className="ml-3 text-base font-semibold mb-2">Sort</h3>
            <div className="py-1 w-full">
              <div className="flex justify-around py-1">
                <div onClick={() => setSort(`"fare":1`)}>
                  {sort === `"fare":1` ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </div>
                <div>Price (Low to High)</div>
              </div>
              <div className="flex justify-around py-1">
                <div onClick={() => setSort(`"fare":-1`)}>
                  {sort ===`"fare":-1` ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </div>
                <div>Price (High to Low)</div>
              </div>
              <div className="flex justify-around py-1">
                <div onClick={() => setSort(`"departureTime":1`)}>
                  {sort ===`"departureTime":1` ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </div>
                <div>Departure(Earliest)</div>
              </div>
              
            </div>
          </div>

          <div className="bus-filter-container-section">
            <h3 className="ml-3 text-base font-semibold mb-2">AC</h3>
            <div className="flex justify-around items-center gap-5 ml-2 mb-3">
              <div className={filter === `"type":"AC"`?"bus-individual-filter activeSlot":"bus-individual-filter"} onClick={() => setFilter(`"type":"AC"`)}>
                <div><img src={Ac} alt="logo" width="25px"/></div>
                <div className="ml-2">AC</div>
              </div>
              <div className={filter === `"type":"Non-AC"`?"bus-individual-filter activeSlot":"bus-individual-filter"}  onClick={() => setFilter(`"type":"Non-AC"`)}>
                <div><img src={NonAc} alt="logo" width="25px"/></div>
                <div className="ml-2">Non AC</div>
              </div>
            </div>
          </div>

          <div className="bus-filter-container-section">
            <h3 className="ml-3 text-base font-semibold mb-2">{`Pick up Time-${busSource}`}</h3>
            <div className="timeFilterOptionsContainer">
              <div className={filter === `"departureTime":{"$gte":"06:00","$lte":"11:00"}`?"time-filter-option activeSlot":"time-filter-option"} onClick={() => setFilter(`"departureTime":{"$gte":"06:00","$lte":"11:00"}` )}>
                <div >
                  <img src={Morning} alt="logo" width="30px" className="logo" />
                </div>
                <div>6 AM to 11 AM</div>
              </div>
              <div  className={filter === `"departureTime":{"$gte":"11:00","$lte":"18:00"}`?"time-filter-option activeSlot":"time-filter-option"} onClick={() => setFilter(`"departureTime":{"$gte":"11:00","$lte":"18:00"}` )}>
                <div>
                  <img src={Noon} alt="logo" width="30px" className="logo" />
                </div>
                <div>11 AM to 6 PM</div>
              </div>
              <div className={filter === `"departureTime":{"$gte":"18:00","$lte":"23:00"}`?"time-filter-option activeSlot":"time-filter-option"} onClick={() => setFilter(`"departureTime":{"$gte":"18:00","$lte":"23:00"}` )}>
                <div>
                  <img src={Evening} alt="logo" width="30px" className="logo" />
                </div>
                <div>6 PM to 11 PM</div>
              </div>
              <div className={filter === `"departureTime":{"$gte":"23:00","$lte":"06:00"}`?"time-filter-option activeSlot":"time-filter-option"} onClick={() => setFilter(`"departureTime":{"$gte":"23:00","$lte":"06:00"}` )}>
                <div>
                  <img src={Night} alt="logo" width="30px" className="logo" />
                </div>
                <div>11 PM to 6 AM</div>
              </div>
            </div>
          </div>

          <div className="bus-filter-container-section">
            <h3 className="ml-3 text-base font-semibold mb-2">{`Pick up Time-${busDestination}`}</h3>
            <div className="timeFilterOptionsContainer">
              <div  className={filter === `"arrivalTime":{"$gte":"06:00","$lte":"11:00"}`?"time-filter-option activeSlot":"time-filter-option"} onClick={() => setFilter(`"arrivalTime":{"$gte":"06:00","$lte":"11:00"}` )}>
                <div>
                  <img src={Morning} alt="logo" width="30px" className="logo" />
                </div>
                <div>6 AM to 11 AM</div>
              </div>
              <div  className={filter === `"arrivalTime":{"$gte":"11:00","$lte":"18:00"}`?"time-filter-option activeSlot":"time-filter-option"} onClick={() => setFilter(`"arrivalTime":{"$gte":"11:00","$lte":"18:00"}` )}>
                <div>
                  <img src={Noon} alt="logo" width="30px" className="logo" />
                </div>
                <div>11 AM to 6 PM</div>
              </div>
              <div  className={filter === `"arrivalTime":{"$gte":"18:00","$lte":"23:00"}`?"time-filter-option activeSlot":"time-filter-option"} onClick={() => setFilter(`"arrivalTime":{"$gte":"18:00","$lte":"23:00"}` )}>
                <div>
                  <img src={Evening} alt="logo" width="30px" className="logo" />
                </div>
                <div>6 PM to 11 PM</div>
              </div>
              <div  className={filter === `"arrivalTime":{"$gte":"23:00","$lte":"06:00"}`?"time-filter-option activeSlot":"time-filter-option"} onClick={() => setFilter(`"arrivalTime":{"$gte":"23:00","$lte":"06:00"}` )}>
                <div>
                  <img src={Night} alt="logo" width="30px" className="logo" />
                </div>
                <div>11 PM to 6 AM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bus-details-container">
          <h2 className="bus-details-container-heading">{`Buses from ${busSource} to ${busDestination}`}</h2>
          {data?.length ? (
            data?.map((item) => (
              <div key={item._id}>
                <IndividualBus bus={item} />
              </div>
            ))
          ) : (
            <p className="text-4xl font-bold text-black subpixel-antialiased relative border-2 border-black p-5 rounded-2xl">
              No Data Found
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default BusesDetails;
