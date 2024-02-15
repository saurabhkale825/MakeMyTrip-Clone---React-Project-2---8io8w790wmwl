import { useState } from "react";
import "./TrainHomePage.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import OfferSection from "../../OfferSection/OfferSection";



function TrainHomePage() {
  const [selectedOption, setSelectedOption] = useState("booktrain");

  return (
    <>
      <Header />
      <Navbar />
      <div className="train-homepage">
        <div className="train-homepage-option">
          <div className="train-homepage-option-left">
            <div onClick={() => setSelectedOption("booktrain")}>
              <span>
                {selectedOption === "booktrain" ? (
                  <CheckBoxTwoToneIcon />
                ) : (
                  <CircleOutlinedIcon />
                )}
              </span>
              <span
                className={
                  selectedOption === "booktrain" ? "option-selected" : "option"
                }
              >
                Book Train Tickets
              </span>
            </div>

            <div onClick={() => setSelectedOption("PNRstatus")}>
              <span>
                {selectedOption === "PNRstatus" ? (
                  <CheckBoxTwoToneIcon />
                ) : (
                  <CircleOutlinedIcon />
                )}
              </span>
              <span
                className={
                  selectedOption === "PNRstatus" ? "option-selected" : "option"
                }
              >
                Check PNR Status
              </span>
            </div>

            <div onClick={() => setSelectedOption("Livestatus")}>
              <span>
                {selectedOption === "Livestatus" ? (
                  <CheckBoxTwoToneIcon />
                ) : (
                  <CircleOutlinedIcon />
                )}
              </span>
              <span
                className={
                  selectedOption === "Livestatus" ? "option-selected" : "option"
                }
              >
                Live Train Status
              </span>
            </div>
          </div>

          <div>
            <p style={{ fontSize: "14px", fontWeight: "700", color: "4A4A4A" }}>
              Train Ticket Booking
            </p>
            <p>IRCTC Authorized e-ticketing</p>
          </div>
          </div>

          <div className="train-homepage-option-text">
            <div className="train-homepage-start-city">
              <div>From</div>
              <div style={{fontSize:"32px",fontWeight:"700",color:"black"}}>New Delhi</div>
              {/* <div>NDLS, New Delhi Railway Station</div> */}
            </div>

            <div className="train-homepage-destination-city">
              <div>To</div>
              <div style={{fontSize:"32px",fontWeight:"700",color:"black"}}>Kanpur</div>
              {/* <div>CNB, Kanpur Central</div> */}
            </div>
            <div className="train-homepage-travel-date">
              <div>Travel Date</div>
              <div>4 Jan' 24</div>
              <div>Thursday</div>
            </div>
            <div className="train-homepage-travel-class">
              <div>Class</div>
              <div>ALL</div>
              <div>All Class</div>
            </div>
        </div>
      </div>
      <OfferSection />
    </>
  );
}

export default TrainHomePage;
