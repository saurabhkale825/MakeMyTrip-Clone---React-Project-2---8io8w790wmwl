import React from "react";
import "./IndividualHotel.css";
import ImageGallery from "react-image-gallery";

function IndividualHotel() {
  const hotel = {
    childAndExtraBedPolicy: {
      extraBedProvidedForChild: false,
      extraBedForAdditionalGuest: false,
      extraBedCharge: 1579,
      additionalInfo: "Additional charges may apply",
    },
    _id: "6527dc50de44dd75f5271d99",
    name: "Radisson Blu",
    location: "Mumbai, Maharashtra",
    rating: 3.5,
    amenities: [
      "Swimming Pool",
      "Free WiFi",
      "Gym",
      "Spa",
      "Bar",
      "Restaurant"
    ],
    images: [
      "https://unsplash.com/photos/Cj7a21nHLyo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NjZ8fGhvdGVsfGVufDB8fHx8MTY5NzA4ODA4NXww",
      "https://unsplash.com/photos/UPv0s6izv2Y/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjUxfHxob3RlbHxlbnwwfHx8fDE2OTcwODExODV8MA",
      "https://unsplash.com/photos/ej52Nm_-RUA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTE5fHxob3RlbHxlbnwwfHx8fDE2OTcwOTE0OTJ8MA",
      "https://unsplash.com/photos/w1gguH6xRUc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjQwfHxob3RlbHxlbnwwfHx8fDE2OTcxMDMzMTN8MA",
    ],
    rooms: [
      {
        costDetails: {
          baseCost: 3836,
          taxesAndFees: 409,
          discount: 0,
        },
        roomNumber: 1,
        roomType: "Suite",
        costPerNight: 5156,
        roomSize: 350,
        bedDetail: "2 Twin Beds",
        price: 2734,
        cancellationPolicy: "Free Cancellation till 24 hrs before check in",
        meals: [],
        offers: [],
        _id: "6527dc50de44dd75f5271d9a",
      },
      {
        costDetails: {
          baseCost: 2143,
          taxesAndFees: 211,
          discount: 0,
        },
        roomNumber: 2,
        roomType: "Deluxe",
        costPerNight: 3474,
        roomSize: 300,
        bedDetail: "2 Twin Beds",
        price: 3112,
        cancellationPolicy: "Free Cancellation till 24 hrs before check in",
        meals: [],
        offers: [],
        _id: "6527dc50de44dd75f5271d9b",
      },
      {
        costDetails: {
          baseCost: 2226,
          taxesAndFees: 129,
          discount: 0,
        },
        roomNumber: 3,
        roomType: "Double",
        costPerNight: 2082,
        roomSize: 300,
        bedDetail: "1 Queen Bed",
        price: 7647,
        cancellationPolicy: "Free Cancellation till 24 hrs before check in",
        meals: [],
        offers: [],
        _id: "6527dc50de44dd75f5271d9c",
      },
      {
        costDetails: {
          baseCost: 3324,
          taxesAndFees: 116,
          discount: 0,
        },
        roomNumber: 4,
        roomType: "Single",
        costPerNight: 4450,
        roomSize: 300,
        bedDetail: "1 Queen Bed",
        price: 6629,
        cancellationPolicy: "Free Cancellation till 24 hrs before check in",
        meals: [],
        offers: [],
        _id: "6527dc50de44dd75f5271d9d",
      },
      {
        costDetails: {
          baseCost: 1972,
          taxesAndFees: 396,
          discount: 0,
        },
        roomNumber: 5,
        roomType: "Suite",
        costPerNight: 5542,
        roomSize: 300,
        bedDetail: "1 Queen Bed",
        price: 5208,
        cancellationPolicy: "Free Cancellation till 24 hrs before check in",
        meals: [],
        offers: [],
        _id: "6527dc50de44dd75f5271d9e",
      },
      {
        costDetails: {
          baseCost: 7771,
          taxesAndFees: 336,
          discount: 0,
        },
        roomNumber: 6,
        roomType: "Suite",
        costPerNight: 9819,
        roomSize: 250,
        bedDetail: "1 Queen Bed",
        price: 7846,
        cancellationPolicy: "Free Cancellation till 24 hrs before check in",
        meals: [],
        offers: [],
        _id: "6527dc50de44dd75f5271d9f",
      },
      {
        costDetails: {
          baseCost: 7009,
          taxesAndFees: 237,
          discount: 0,
        },
        roomNumber: 7,
        roomType: "Double",
        costPerNight: 3427,
        roomSize: 250,
        bedDetail: "2 Twin Beds",
        price: 5074,
        cancellationPolicy: "Free Cancellation till 24 hrs before check in",
        meals: [],
        offers: [],
        _id: "6527dc50de44dd75f5271da0",
      },
      {
        costDetails: {
          baseCost: 3640,
          taxesAndFees: 246,
          discount: 0,
        },
        roomNumber: 8,
        roomType: "Deluxe",
        costPerNight: 7878,
        roomSize: 250,
        bedDetail: "1 Queen Bed",
        price: 4199,
        cancellationPolicy: "Free Cancellation till 24 hrs before check in",
        meals: [],
        offers: [],
        _id: "6527dc50de44dd75f5271da1",
      },
      {
        costDetails: {
          baseCost: 1644,
          taxesAndFees: 291,
          discount: 0,
        },
        roomNumber: 9,
        roomType: "Single",
        costPerNight: 9878,
        roomSize: 350,
        bedDetail: "2 Twin Beds",
        price: 5295,
        cancellationPolicy: "Free Cancellation till 24 hrs before check in",
        meals: [],
        offers: [],
        _id: "6527dc50de44dd75f5271da2",
      },
    ],
    houseRules: {
      restrictions: {
        idProofsAccepted: ["Passport", "Aadhar"],
        petsAllowed: false,
        smokingAllowed: true,
      },
      guestProfile: {
        unmarriedCouplesAllowed: true,
      },
      idProofRelated: {
        idProofsAccepted: ["Passport"],
        localIdsAllowed: false,
      },
      _id: "6527dc50de44dd75f5271da3",
    },
    __v: 0,
    avgCostPerNight: 5745.111111111111,
  };

  const FormatRating = (rating) => {
    if (rating >= 4.5) {
      return "Exceptional";
    } else if (rating < 4.5 && rating >= 4) {
      return "Excellent";
    } else if (rating < 4 && rating >= 3.5) {
      return "Very Good";
    } else if (rating < 3.5 && rating >= 3) {
      return "Good";
    } else {
      return "Pleasant";
    }
  };

  return (
    <div className="individual-hotel-card">
      <div className="individual-hotel-content">
        <div>
          {/* <ImageGallery>
            {hotel.images?.map((image) => (
              <img src={image} alt="logo" />
            ))}
            </ImageGallery> */}
        </div>
        <div className="individual-hotel-content-Left">
          <div className="individual-hotel-content-name">{hotel.name}</div>
          <div className="individual-hotel-content-location">
            {hotel.location}
          </div>
          
          <div className="individual-hotel-content-ammenities">
            <ul className="grid grid-cols-2 grid-rows-3 gap-4" >
              {hotel.amenities.map((item) => (
                <li className="aeminities-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="individual-hotel-content-right">
      <div className="individual-hotel-content-rating">
      <span className="mx-2 font-bold">{FormatRating(hotel.rating)}</span>
            <span className="bg-blue-500 py-0.5 px-1 rounded-md text-white">
              {hotel.rating}
            </span>
          </div>

          <div className="individual-hotel-content-price">
            <div className="hotel-base-cost">₹{hotel.rooms[0].costDetails.baseCost}</div>
            <div>{`+ ₹ ${hotel.rooms[0].costDetails.taxesAndFees} taxes & fees `}</div>
            <div>Per Night for 2 Rooms</div>
          </div>
      </div>
    </div>
  );
}

export default IndividualHotel;