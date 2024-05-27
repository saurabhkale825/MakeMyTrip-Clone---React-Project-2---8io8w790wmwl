import { useContext, useEffect } from "react";
import "./NavbarDetails.css";
import MyContext from "../../Context/MyContext";
import FlightsSelected from "../../Assest/Logo/Fights-selected.png";
import Flights from "../../Assest/Logo/Flight.png";
import Hotel from "../../Assest/Logo/Hotels.png";
import HotelSelected from "../../Assest/Logo/Hotels-selected.png";
import HomeStay from "../../Assest/Logo/Homevillas.png";
import HomeStaySelected from "../../Assest/Logo/HomeVillas-selected.png";
import HolidaySelected from "../../Assest/Logo/Holiday-package-selected.png";
import Holiday from "../../Assest/Logo/Holiday-package.png";
import TrainsSelected from "../../Assest/Logo/Trains-selected.png";
import Trains from "../../Assest/Logo/Trains.png";
import BusesSelected from "../../Assest/Logo/Buses-selected.png";
import Buses from "../../Assest/Logo/Buses.png";
import CabsSelected from "../../Assest/Logo/Cabs-selected.png";
import Cabs from "../../Assest/Logo/Cabs.png";
import ForexSelected from "../../Assest/Logo/Forex-card-selected.png";
import Forex from "../../Assest/Logo/Forex-card.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

function NavbarDetails() {
  const{ authenticate, setAuthenticate} = useContext(AuthContext);
  const { mode, setMode ,login, setLogin } =
    useContext(MyContext);

  const data = localStorage.getItem("user-info");
  const userData = data ? JSON.parse(data) : null;
  const userName = userData && userData.data ? userData.data.user.name : null;

  useEffect(() => {
    if (data) {
      setAuthenticate(true);
    }
  }, []);

  return (
    <div className="navbar-details">
      <div className="navbar-details-left">
        <div className="navbar-details-logo">
          <Link to={"/"}>
         <img
            src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
            alt="logo"
            width="113px"
            height="36px"
          />
          </Link>
        </div>
        <div className="navbar-details-options">
          <Link to={"/"}>
            <div
              className="navbar-details-options-tab"
              onClick={() => setMode("Flights")}
            >
              <div className="navbar-details-options-tab-image">
                {mode === "Flights" ? (
                  <img
                    src={FlightsSelected}
                    alt="logo"
                    width="30px"
                    height="20px"
                  />
                ) : (
                  <img src={Flights} alt="logo" width="30px" height="20px" />
                )}
              </div>
              <div className="navbar-details-options-tab-text">Flights</div>
            </div>
          </Link>

          <Link to={"/hotels"}>
            <div
              className="navbar-details-options-tab"
              onClick={() => setMode("Hotels")}
            >
              <div className="navbar-details-options-tab-image">
                {mode === "Hotels" ? (
                  <img
                    src={HotelSelected}
                    alt="logo"
                    width="30px"
                    height="20px"
                  />
                ) : (
                  <img src={Hotel} alt="logo" width="30px" height="20px" />
                )}
              </div>
              <div className="navbar-details-options-tab-text">Hotels</div>
            </div>
          </Link>

          <Link to={"/"}>
            <div
              className="navbar-details-options-tab"
              onClick={() => setMode("HomeVillas")}
            >
              <div className="navbar-details-options-tab-image">
                {mode === "HomeStay" ? (
                  <img
                    src={HomeStaySelected}
                    alt="logo"
                    width="30px"
                    height="20px"
                  />
                ) : (
                  <img src={HomeStay} alt="logo" width="30px" height="20px" />
                )}
              </div>
              <div className="navbar-details-options-tab-text">HomeStays</div>
            </div>
          </Link>

          <Link to={"/"}>
            <div
              className="navbar-details-options-tab"
              onClick={() => setMode("Holiday")}
            >
              <div className="navbar-details-options-tab-image">
                {mode === "Holiday" ? (
                  <img
                    src={HolidaySelected}
                    alt="logo"
                    width="30px"
                    height="20px"
                  />
                ) : (
                  <img src={Holiday} alt="logo" width="30px" height="20px" />
                )}
              </div>
              <div className="navbar-details-options-tab-text">Holiday</div>
            </div>
          </Link>

          <Link to={"/trains"}>
            <div
              className="navbar-details-options-tab"
              onClick={() => setMode("Trains")}
            >
              <div className="navbar-details-options-tab-image">
                {mode === "Trains" ? (
                  <img
                    src={TrainsSelected}
                    alt="logo"
                    width="30px"
                    height="20px"
                  />
                ) : (
                  <img src={Trains} alt="logo" width="30px" height="20px" />
                )}
              </div>
              <div className="navbar-details-options-tab-text">Trains</div>
            </div>
          </Link>

          <Link to={"/buses"}>
            <div
              className="navbar-details-options-tab"
              onClick={() => setMode("Buses")}
            >
              <div className="navbar-details-options-tab-image">
                {mode === "Buses" ? (
                  <img
                    src={BusesSelected}
                    alt="logo"
                    width="30px"
                    height="20px"
                  />
                ) : (
                  <img src={Buses} alt="logo" width="30px" height="20px" />
                )}
              </div>
              <div className="navbar-details-options-tab-text">Buses</div>
            </div>
          </Link>

          <Link to={"/"}>
            <div
              className="navbar-details-options-tab"
              onClick={() => setMode("Cabs")}
            >
              <div className="navbar-details-options-tab-image">
                {mode === "Cabs" ? (
                  <img
                    src={CabsSelected}
                    alt="logo"
                    width="30px"
                    height="20px"
                  />
                ) : (
                  <img src={Cabs} alt="logo" width="30px" height="20px" />
                )}
              </div>
              <div className="navbar-details-options-tab-text">Cabs</div>
            </div>
          </Link>

          <Link to={"/"}>
            <div
              className="navbar-details-options-tab"
              onClick={() => setMode("Forex")}
            >
              <div className="navbar-details-options-tab-image">
                {mode === "Forex" ? (
                  <img
                    src={ForexSelected}
                    alt="logo"
                    width="30px"
                    height="20px"
                  />
                ) : (
                  <img src={Forex} alt="logo" width="30px" height="20px" />
                )}
              </div>
              <div className="navbar-details-options-tab-text">Forex</div>
            </div>
          </Link>

          <Link to={"/"}>
            <div className="navbar-details-options-tab">
              <div className="navbar-details-options-tab-image">
                <MoreHorizIcon />
              </div>
              <div className="navbar-details-options-tab-text">More</div>
            </div>
          </Link>
        </div>
      </div>

      <div>
        {authenticate === false ? (
          null
        ) : (
          <div className="w-fit h-3/4 py-2 px-5 border border text-sky-600  font-medium text-lg rounded-lg bg-transprant flex items-center justify-center  navbar-details-user-text">
            <span className="font-serif">Hi</span>
            <span className="font-serif ml-2 capitalize">{`${userName}`}</span>
            </div>
        )}
      </div>
    </div>
  );
}

export default NavbarDetails;


