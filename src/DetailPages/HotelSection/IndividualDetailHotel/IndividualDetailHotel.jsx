import React, { useState, useEffect, useContext } from "react";
import "./IndividualDetailHotel.css";
import NavbarDetails from "../../../Homepage/Navbar/NavbarDetails";
import PeopleIcon from "@mui/icons-material/People";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { red, grey } from "@mui/material/colors";
import Mapbg from "../../../Assest/Logo/map-bg.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CircleIcon from "@mui/icons-material/Circle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import HotelContext from "../../../Context/HotelContext";

function IndividualDetailHotel() {
  const [hotel, setHotel] = useState({});
  const { itemId } = useParams();
  const { setHotelPrice, setHotelTax } = useContext(HotelContext);

  const FetchIndiHotel = async () => {
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/bookingportals/hotel/${itemId}`,
      {
        headers: {
          projectID: "8io8w790wmwl",
        },
      }
    );
    // console.log(response.data);
    setHotel(response?.data);
  };

  useEffect(() => {
    FetchIndiHotel();
  }, []);

  const updateSetPrice = (price, tax) => {
    setHotelPrice(price);
    setHotelTax(tax);
  };

  return (
    <div className="individual-detail-hotel">
      <NavbarDetails />
      <div className="individual-detail-hotel-container">
        <div className="indi-hotel-header">
          <Link to={"/hotels"}>
            <span className="text-lg font-semibold text-blue-500 ">Home</span>
          </Link>
          <span> {`>`}</span>
          <Link to={"/hotels/details"}>
            <span className="text-lg font-semibold text-blue-500 ">Hotels</span>
          </Link>
          <span>{`>`}</span>
          <span className="text-lg font-semibold text-grey-400 ">
            {hotel?.data?.name}
          </span>
        </div>

        <div className="indi-hotel-display">
          <div className="w-full flex p-2 ">
            <div className="indi-hotel-carousel">
              <Slider
                dots={true}
                infinite={false}
                speed={1000}
                slidesToShow={1}
                slidesToScroll={1}
                lazyLoad={true}
              >
                {hotel?.data?.images?.map((item, index) => (
                  <div key={index}>
                    <img
                      src={item}
                      alt={`image-${index}`}
                      className="slider-images"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="indi-hotel-carousel-side">
              <div className="w-full text-left p-2 border border-black rounded mb-3">
                <h4 className="md:text-base text-sm font-semibold ">
                  Luxe TwinRoom
                </h4>
                <div className="ml-2 mt-2">
                  <p>
                    <span className="mr-3">
                      <PeopleIcon sx={{ fontSize: 15 }} />
                    </span>
                    <span className="lg:text-sm text-xs ">For 2 Adults</span>
                  </p>
                </div>
                <div className="ml-2  mt-2">
                  <span className="mr-2">
                    <CheckIcon sx={{ fontSize: 15 }} />
                  </span>
                  <span className="lg:text-base text-xs">Room Only</span>
                </div>

                <div className="ml-2 mt-1">
                  <span className="mr-2">
                    <CloseIcon sx={{ fontSize: 15, color: red[800] }} />
                  </span>
                  <span className="lg:text-base text-xs text-red-500 ">
                    Not Refundable
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="width-set border border-black rounded-lg ">
                  <img src={Mapbg} alt="logo" className="map-bg" />
                </div>
                <div className="width-set border border-black rounded p-2 text-left">
                  <div className="bg-blue-600 text-white font-semibold md:w-10 md:h-10 w-6 h-6 flex justify-center items-center lg:text-lg text-sm rounded-md">
                    4.0
                  </div>

                  <div className="md:text-lg sm:text-sm text-xs font-semibold text-blue-400 mt-1">
                    Very Good
                  </div>
                  <p className="text-ten">Based on 5258 Ratings</p>
                </div>
              </div>
            </div>
          </div>

          <div className="indi-hotel-heading">
            <div className="lg:text-3xl text-2xl font-bold text-black ml-1">
              {hotel?.data?.name}
            </div>
            <div>
              <span>
                {" "}
                <LocationOnIcon sx={{ fontSize: 20 }} />
              </span>
              <span> {hotel?.data?.location}</span>
            </div>
          </div>

          <div className="indi-hotel-amenities">
            <h3 className="ml-1 text-xl text-black font-semibold ">
              Popular Amenities
            </h3>
            <ul className="flex gap-x-20 mt-4 ml-4 text-sm ">
              {hotel?.data?.amenities.map((item, index) => (
                <li key={index} className="border border-grey-500 p-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="indi-hotel-sticky-header">
          <div>About</div>
          <div>Rooms</div>
          <div>Property Rules</div>
        </div>

        <div className="indi-hotel-about">
          <h3 className="text-lg font-semibold text-black">{`About ${
            hotel?.data?.name
          }, ${hotel?.data?.location.split(",")[0]}.`}</h3>
          <p className="ml-1">{`Offering the Best view,${hotel?.data?.name} is a beautiful property with plenty of recreational options and comfortable facilities enriched by a contemporary ambience.`}</p>

          <div className="mt-3 ml-4 ">
            <p className="flex gap-x-3 text-sm">
              <span>
                <CircleIcon sx={{ fontSize: 8 }} />
              </span>
              <span>
                Keep your little ones engages in the safe play area withhin the
                premises.
              </span>
            </p>

            <p className="flex gap-x-3 text-sm">
              <span>
                <CircleIcon sx={{ fontSize: 8 }} />
              </span>
              <span>
                Chillout at the lounge with a book or play foosball with loved
                ones.
              </span>
            </p>

            <p className="flex gap-x-3 text-sm">
              <span>
                <CircleIcon sx={{ fontSize: 8 }} />
              </span>
              <span>
                Enjoy a lively ambience at Cafe Et Cetera with your drink or
                relish global delicacies at The Square Meal Restaurant.
              </span>
            </p>
          </div>
        </div>

        <div className="indi-hotel-rooms">
          {hotel?.data?.rooms.map((room, index) => (
            <div className="indi-room" key={index}>
              <div className="w-full border border-black h-40 flex">
                <div className="w-3/5 border-r border-black p-3">
                  <h3 className="text-xl  font-semibold ">{room.roomType}</h3>
                  <div>
                    <p className="flex gap-x-5 ml-2 mt-1   lg:w-1/2 w-3/4">
                      <span className="w-1/8 mr-3">
                        <CircleIcon sx={{ fontSize: 8, color: grey[500] }} />
                      </span>
                      <span className="font-medium text-black  indi-hotel-rooms-hard-text">
                        No meals included
                      </span>
                    </p>

                    <p className="flex gap-x-5 ml-2 mt-1   lg:w-1/2 w-full">
                      <span className="w-1/8">
                        <img
                          src="https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/bed.png"
                          alt="logo"
                          width="20px"
                        />
                      </span>
                      <span className="lg:font-medium text-black indi-hotel-rooms-hard-text">
                        {room.bedDetail}
                      </span>
                    </p>

                    <p className="flex gap-x-5 ml-2 mt-1  lg:w-1/2 w-full">
                      <span className="w-1/8">
                        <img
                          src="https://promos.makemytrip.com/Hotels_product/Inclusions/Icons/Food&Beverage_WelcomeDrinkonArrival.png"
                          alt="logo"
                          width="20px"
                        />
                      </span>
                      <span className="font-medium text-black  indi-hotel-rooms-hard-text capitalize">
                        Free Welcome drink on Arrival
                      </span>
                    </p>
                  </div>

                  <p className="mt-4 ml-3 text-blue-400 lg:text-base text-xs">{`${room.cancellationPolicy}*`}</p>
                </div>
                <div className="w-2/5 border-r border-black p-2">
                  <h3 className="lg:text-xl text-sm bg-gray-100 font-semibold px-2">
                    Prices
                  </h3>
                  <div className="px-3 py-2">
                    <p className="text-xs text-gray-500">per Night</p>
                    <div className="lg:text-lg lg:font-semibold text-sm font-semibold ">{`₹ ${room.costDetails.baseCost}`}</div>
                    <div className="text-xs lg:font-semibold ">{`+ ₹ ${room.costDetails.taxesAndFees} taxes & fees`}</div>
                  </div>

                  <Link to={`/hotels/bookingpage/${hotel?.data?._id}`}>
                    <div
                      className="indi-hotel-select-room"
                      onClick={() =>
                        updateSetPrice(
                          room.costDetails.baseCost,
                          room.costDetails.taxesAndFees
                        )
                      }
                    >
                      Select room
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="indi-hotel-property-rules">
          <h3 className="text-xl font-semibold text-black ml-2">House Rules</h3>
          <div className="border border-black rounded p-2 w-fit mt-2">
            <div className="flex p-2  w-fit  ">
              <p className="text-sm font-semibold  ">Id Proof Accepted:</p>
              <div className="flex gap-x-8 items-center">
                {hotel?.data?.houseRules.restrictions.idProofsAccepted.map(
                  (item) => (
                    <p className="ml-1 text-sm border border-stone-800 rounded px-2 font-semibold">
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>

            <div className="text-base font-semibold mt-1 p-2 text-blue-400">
              {hotel?.data?.houseRules.guestProfile.unmarriedCouplesAllowed ===
              true
                ? "CoupleFriendly"
                : "Unmarries Couples are not allowed."}
            </div>

            <div className="text-base font-semibold mt-1 p-2 text-blue-400">
              {hotel?.data?.houseRules.idProofRelated.localIdsAllowed === true
                ? "Locals Allowed"
                : "Locals are not allowed."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualDetailHotel;
