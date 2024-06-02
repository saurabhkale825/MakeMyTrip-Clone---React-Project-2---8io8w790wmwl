import { useState, useEffect, useContext } from "react";
import "./TrainHomePage.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import OfferSection from "../../OfferSection/OfferSection";
import Footer from "../../Footer/Footer";
import SourceTrainStationList from "./SourceTrainStationList";
import TrainContext from "../../Context/TrainContext";
import DestinationTrainStationList from "./DestinationTrainStation";
import { Link } from "react-router-dom";
import MyContext from "../../Context/MyContext";
import DownloadApp from "../../DownloadApp/DownloadApp";

function TrainHomePage() {
  const [showCalender, setShowCalender] = useState(false);
  const { mode, setMode } = useContext(MyContext);
  const {
    source,
    setSource,
    destination,
    setDestination,
    travelDate,
    setTravelDate,
    trainDay,
    setTrainDay,
  } = useContext(TrainContext);

  const [showSource, setShowSource] = useState(false);
  const [showDestination, setShowDestination] = useState(false);

  const FormatedDate = (date) => format(date, "dd MMM'' yy");

  const UpdateTrainDay = (date) => {
    setTrainDay(date.toLocaleDateString("en-US", { weekday: "long" }));
  };
  useEffect(() => {
    UpdateTrainDay(travelDate);
  }, [travelDate]);

  useEffect(() => {
    console.log(showSource);
  }, [showSource]);

  return (
    <>
      <Header />
      <Navbar />
      <div className="train-homepage">
        <div className="train-homepage-option-text">
          <div className="train-homepage-city border-radius-left">
            <div className="train-homepage-label">From</div>
            <div
              className="train-homepage-city-name"
              onClick={() => setShowSource(!showSource)}
            >
              {source}
            </div>
            {showSource === true ? <SourceTrainStationList /> : null}
          </div>

          <div className="train-homepage-city">
            <div className="train-homepage-label">To</div>
            <div
              className="train-homepage-city-name"
              onClick={() => setShowDestination(!showDestination)}
            >
              {destination}
            </div>
            {showDestination === true ? <DestinationTrainStationList /> : null}
          </div>
          <div
            className="train-homepage-travel border-radius-right"
            onClick={() => setShowCalender(!showCalender)}
          >
            <div className="train-homepage-label">Travel Date</div>
            <div className="train-homepage-date ">
              <DatePicker
                label="Depature"
                className="flights-section-calendar"
                value={FormatedDate(travelDate)}
                onChange={(date) => setTravelDate(date)}
                dateFormat="MMM/d/YY"
                minDate={new Date()}
              />
            </div>
            <div className="text-xs">{trainDay}</div>
          </div>
        </div>
        <Link to={"/trains/details"}>
          <div className="train-search-button">SEARCH</div>
        </Link>
      </div>
      <OfferSection />
      <DownloadApp />
      <Footer />
    </>
  );
}

export default TrainHomePage;
