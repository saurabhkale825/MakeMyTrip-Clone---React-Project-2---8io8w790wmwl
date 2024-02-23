import { useContext, useEffect, useState } from "react";
import "./TrainDetails.css";
import NavbarDetails from "../../Homepage/Navbar/NavbarDetails";
import TrainSearchNav from "./TrainSearchNav/TrainSearchNav";
import TrainIndividualCard from "./TrainIndividualCard/TrainIndividualCard";
import TrainContext from "../../Context/TrainContext";
import axios from "axios";
import Slider from "@mui/material/Slider";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function TrainDetails() {
  const {
    source,
    setSource,
    destination,
    setDesitination,
    travelDate,
    setTravelDate,
  } = useContext(TrainContext);
  const day = travelDate.toLocaleDateString("en-US", { weekday: "short" });
  const [data, setData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [sort, setSort] = useState("Default");
  const [showSortOption, setShowSortOption] = useState(true);
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [price, setPrice] = useState([minPrice, maxPrice]);
  const FetchTrains = async () => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/train?search={"source":"${source}","destination":"${destination}"}&day=${day}&filter={${selectedFilter}}&sort={${selectedSort}}`,
        {
          headers: {
            projectID: "8io8w790wmwl",
          },
        }
      );

      setData(response.data?.data?.trains);
    } catch (error) {
      console.error("Error fetching train data:", error);
    }
  };

  const updateSort = (sort, selectedSort) => {
    setSort(sort);
    setSelectedSort(selectedSort);
  };

  useEffect(() => {
    updateSort(sort, selectedSort);
  }, []);

  const updateClearAll = () => {
    setSelectedSort("");
    setSelectedFilter("");
  };

  useEffect(() => {
    updateClearAll();
  }, []);

  useEffect(() => {
    FetchTrains();
  }, [data]);

  useEffect(() => {
    FetchTrains();
  }, [selectedFilter, selectedSort]);

  return (
    <>
      <NavbarDetails />
      <TrainSearchNav />
      <div className="train-details">
        <div className="train-details-sorting">
          <div
            className="flex items-center  h-full"
            onClick={() => setShowSortOption(!showSortOption)}
          >
            <div className="ml-8">Sorted By :</div>
            <div className="ml-2 text-blue-500">{sort}</div>
          </div>
          {showSortOption === false ? (
            <div className="sort-option">
              <div
                onClick={() => updateSort("Default", "")}
                className={
                  sort === "Default"
                    ? "bg-red-300 text-sm transition-colors duration-150 ease-linear"
                    : "sort-option-div"
                }
              >
                Default
              </div>
              <div
                onClick={() => updateSort("Price(Low to High)", `"fare":1`)}
                className={
                  sort === "Price(Low to High)"
                    ? "bg-red-300 text-sm transition-colors duration-150 ease-linear"
                    : "sort-option-div"
                }
              >
                Price(Low to High)
              </div>
              <div
                onClick={() => updateSort("Price(High to Low)", `"fare":-1`)}
                className={
                  sort === "Price(High to Low)"
                    ? "bg-red-300 text-sm transition-colors duration-150 ease-linear"
                    : "sort-option-div"
                }
              >
                Price(High to Low)
              </div>
              <div
                onClick={() =>
                  updateSort("Seat Availibility", `"availableSeats":-1`)
                }
                className={
                  sort === "Seat Availibility"
                    ? "bg-red-300 text-sm transition-colors duration-150 ease-linear"
                    : "sort-option-div"
                }
              >
                {" "}
                Seat Availibility
              </div>
              <div
                onClick={() => updateSort("Travel Time", `"travelDuration":1`)}
                className={
                  sort === "Travel Time"
                    ? "bg-red-300 text-sm transition-colors duration-150 ease-linear"
                    : "sort-option-div"
                }
              >
                Travel Time
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex gap-1">
          <div className="train-details-functionality">
            <div className="flex justify-between items-center mx-3 mt-4 ">
              <div className="text-xl font-bold">Filters</div>
              <div
                className="text-sm text-center text-blue-700 font-semibold cursor-pointer"
                onClick={updateClearAll}
              >
                Clear All
              </div>
            </div>

            <div className="trains-details-functionality-container">
              <h3 className="text-left text-xl font-semibold text-black ml-3 mt-3">
                Journey Class Filters
              </h3>
              <div className="text-base font-normal w-full">
                <div className="flex mt-2">
                  <div
                    className="w-1/4"
                    onClick={() =>
                      setSelectedFilter(`"coaches.coachType":"CC"`)
                    }
                  >
                    {selectedFilter === `"coaches.coachType":"CC"` ? (
                      <CheckBoxIcon />
                    ) : (
                      <CheckBoxOutlineBlankIcon />
                    )}
                  </div>
                  <div className="w-3/4 text-left">AC Chair car- CC</div>
                </div>

                <div className="flex mt-2">
                  <div
                    className="w-1/4"
                    onClick={() =>
                      setSelectedFilter(`"coaches.coachType":"EC"`)
                    }
                  >
                    {selectedFilter === `"coaches.coachType":EC"` ? (
                      <CheckBoxIcon />
                    ) : (
                      <CheckBoxOutlineBlankIcon />
                    )}
                  </div>
                  <div className="w-3/4 text-left">Executive Chair car- EC</div>
                </div>

                <div className="flex mt-2">
                  <div
                    className="w-1/4"
                    onClick={() =>
                      setSelectedFilter(`"coaches.coachType":"1A"`)
                    }
                  >
                    {selectedFilter === `"coaches.coachType":"1A"` ? (
                      <CheckBoxIcon />
                    ) : (
                      <CheckBoxOutlineBlankIcon />
                    )}
                  </div>
                  <div className="w-3/4 text-left">1st Class AC - 1A</div>
                </div>

                <div className="flex mt-2">
                  <div
                    className="w-1/4"
                    onClick={() =>
                      setSelectedFilter(`"coaches.coachType":"2A"`)
                    }
                  >
                    {selectedFilter === `"coaches.coachType":"2A"` ? (
                      <CheckBoxIcon />
                    ) : (
                      <CheckBoxOutlineBlankIcon />
                    )}
                  </div>
                  <div className="w-3/4 text-left">2nd Tier AC 2A</div>
                </div>

                <div className="flex mt-2">
                  <div
                    className="w-1/4"
                    onClick={() =>
                      setSelectedFilter(`"coaches.coachType":"3A"`)
                    }
                  >
                    {selectedFilter === `"coaches.coachType":"3A"` ? (
                      <CheckBoxIcon />
                    ) : (
                      <CheckBoxOutlineBlankIcon />
                    )}
                  </div>
                  <div className="w-3/4 text-left">3 Tier Ac-3A</div>
                </div>

                <div className="flex mt-2">
                  <div
                    className="w-1/4"
                    onClick={() =>
                      setSelectedFilter(`"coaches.coachType":"3E"`)
                    }
                  >
                    {selectedFilter === `"coaches.coachType":"3E"` ? (
                      <CheckBoxIcon />
                    ) : (
                      <CheckBoxOutlineBlankIcon />
                    )}
                  </div>
                  <div className="w-3/4 text-left">
                    AC three tier(economy)-3E
                  </div>
                </div>

                <div className="flex mt-2">
                  <div
                    className="w-1/4"
                    onClick={() =>
                      setSelectedFilter(`"coaches.coachType":"SL"`)
                    }
                  >
                    {selectedFilter === `"coaches.coachType":"SL"` ? (
                      <CheckBoxIcon />
                    ) : (
                      <CheckBoxOutlineBlankIcon />
                    )}
                  </div>
                  <div className="w-3/4 text-left">Sleeper-SL</div>
                </div>

                <div className="flex mt-2">
                  <div
                    className="w-1/4"
                    onClick={() =>
                      setSelectedFilter(`"coaches.coachType":"2S"`)
                    }
                  >
                    {selectedFilter === `"coaches.coachType":"2S"` ? (
                      <CheckBoxIcon />
                    ) : (
                      <CheckBoxOutlineBlankIcon />
                    )}
                  </div>
                  <div className="w-3/4 text-left">Second Sitting- 2S</div>
                </div>

                <div className="flex mt-2">
                  <div
                    className="w-1/4"
                    onClick={() =>
                      setSelectedFilter(`"coaches.coachType":"EA"`)
                    }
                  >
                    {selectedFilter === `"coaches.coachType":"EA"` ? (
                      <CheckBoxIcon />
                    ) : (
                      <CheckBoxOutlineBlankIcon />
                    )}
                  </div>
                  <div className="w-3/4 text-left">Executive Anubhuti- EA</div>
                </div>
              </div>
            </div>

            <div className="trains-details-functionality-container">
              <h3 className="text-left text-xl font-semibold text-black ml-3 mt-3">
                {`Departure from ${source}`}
              </h3>
              <div className="text-base font-normal w-full flex mt-2">
                <div
                  className="w-1/4 "
                  onClick={() =>
                    setSelectedFilter(`"departureTime":{"$lte":"06:00"}`)
                  }
                >
                  {selectedFilter === `"departureTime":{"$lte":"06:00"}` ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </div>
                <div className="w-3/4 text-left">Night - 12AM to 6AM</div>
              </div>

              <div className="text-base font-normal w-full flex mt-2">
                <div
                  className="w-1/4 "
                  onClick={() =>
                    setSelectedFilter(
                      `"departureTime":{"$gte":"06:00","$lte":"12:00"}`
                    )
                  }
                >
                  {selectedFilter ===
                  `"departureTime":{"$gte":"06:00","$lte":"12:00"}` ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </div>
                <div className="w-3/4 text-left">Morning - 6AM to 12PM</div>
              </div>

              <div className="text-base font-normal w-full flex mt-2">
                <div
                  className="w-1/4 "
                  onClick={() =>
                    setSelectedFilter(
                      `"departureTime":{"$lte":"18:00", "$gte":"12:00"}`
                    )
                  }
                >
                  {selectedFilter ===
                  `"departureTime":{"$lte":"18:00", "$gte":"12:00"}` ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </div>
                <div className="w-3/4 text-left">Afternoon - 12PM to 6PM</div>
              </div>

              <div className="text-base font-normal w-full flex mt-2">
                <div
                  className="w-1/4 "
                  onClick={() =>
                    setSelectedFilter(`"departureTime":{"$gte":"18:00"}`)
                  }
                >
                  {selectedFilter === `"departureTime":{"$gte":"18:00"}` ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </div>
                <div className="w-3/4 text-left">Evening - 6PM to 12AM</div>
              </div>
            </div>

            <div className="trains-details-functionality-container">
              <h3 className="text-left text-xl font-semibold text-black ml-3 mt-3">
                {`Arrival from ${destination}`}
              </h3>
              <div className="text-base font-normal w-full flex mt-2">
                <div
                  className="w-1/4 "
                  onClick={() =>
                    setSelectedFilter(`"arrivalTime":{"$lte":"06:00"}`)
                  }
                >
                  {selectedFilter === `"arrivalTime":{"$lte":"06:00"}` ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </div>
                <div className="w-3/4 text-left">Night - 12AM to 6AM</div>
              </div>

              <div className="text-base font-normal w-full flex mt-2">
                <div
                  className="w-1/4 "
                  onClick={() =>
                    setSelectedFilter(
                      `"arrivalTime":{"$gte":"06:00","$lte":"12:00"}`
                    )
                  }
                >
                  {selectedFilter ===
                  `"arrivalTime":{"$gte":"06:00","$lte":"12:00"}` ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </div>
                <div className="w-3/4 text-left">Morning - 6AM to 12PM</div>
              </div>

              <div className="text-base font-normal w-full flex mt-2">
                <div
                  className="w-1/4 "
                  onClick={() =>
                    setSelectedFilter(
                      `"arrivalTime":{"$lte":"18:00", "$gte":"12:00"}`
                    )
                  }
                >
                  {selectedFilter ===
                  `"arrivalTime":{"$lte":"18:00", "$gte":"12:00"}` ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </div>
                <div className="w-3/4 text-left">Afternoon - 12PM to 6PM</div>
              </div>

              <div className="text-base font-normal w-full flex mt-2">
                <div
                  className="w-1/4 "
                  onClick={() =>
                    setSelectedFilter(`"arrivalTime":{"$gte":"18:00"}`)
                  }
                >
                  {selectedFilter === `"arrivalTime":{"$gte":"18:00"}` ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </div>
                <div className="w-3/4 text-left">Evening - 6PM to 12AM</div>
              </div>
            </div>

          </div>
          

          <div className="train-details-content">
            {/* <div className="rb-container-main">
              <div className="rb-container">
              <img src="https://jsak.mmtcdn.com/rails_cdn_rnw/images/82c7e64d_railofy_banner_icon.webp" alt="promo-icon" class="rb-icon"></img>

              <div className="rb-content-container">
                <div className="rb-header-text">Introducing Trip Guarantee</div>
                <div className="text-xs ml-15">
                  <span style={{color:"rgb(245,239,255)"}}>Get </span>
                  <span style={{color:"rgb(255,225,64)"}}>3X refund  </span>
                  <span style={{color:"rgb(245,239,255)"}} >{`if your waitlisted ticket doesnt get confirmed. Use this amount to upgrade your ticket to :`} </span>
                  </div>
                </div>
              </div>
              </div> */}

            <div>
            <h3 className="text-left my-4 text-2xl font-bold text-slate-950">{`Trains From ${source} To ${destination}`}</h3>
            {data?.length ? (
              data?.map((item) => (
                <div key={item._id}>
                  <TrainIndividualCard Trains={item} />
                </div>
              ))
            ) : (
              <p className="text-4xl font-bold text-black subpixel-antialiased relative border-2 border-black p-5 rounded-2xl">
                No Data Found
              </p>
            )} 
            </div>
            </div>
          </div>
          </div>
        
    </>
  );
}

export default TrainDetails;
