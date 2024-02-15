import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../Assest/Logo/mmtLogoWhite.png";
import TravelLogo from "../../Assest/Logo/My Travel logo.png";
import India from "../../Assest/Logo/india.png";
import { ExpandMore } from "@mui/icons-material";
import offerbg from "../../Assest/BackGround/%-bg.png";
import MyContext from "../../Context/MyContext";

function Navbar() {

  const{setMode} = useContext(MyContext);

  return (
    <>
      <div className="header">
        <div className="header-heading">
          <Link to={"/"}>
          <div className="logo" onClick={() => setMode("Flights")}>
            <img src={Logo} alt="logo" width="113px" height="36px" />
          </div>
          </Link>

          <ul className="header-content">
            <li className="super-offer">
              <div>
                <div
                  className="super-offer-icon-bg"
                  style={{
                    backgroundImage: `url(${offerbg})`,
                    width: "25px",
                    height: "25px",
                  }}
                >
                  <div>%</div>
                </div>
              </div>
              <div className="super-offer-content">
                <div className="content-1">Super Offers</div>
                <div className="content-2">Explore great deals & offers</div>
              </div>
            </li>

            <li className="myBiz-introduction">
              <div className="myBiz-logo"></div>
              <div className="super-offer-content">
                <div className="content-1">Introducing myBiz</div>
                <div className="content-2">Business Travel Solution</div>
              </div>
            </li>

            <li className="my-trips">
              <div className="my-trip-logo">
                <img
                  src={TravelLogo}
                  alt="travel-logo"
                  width="25px"
                  height="25px"
                  style={{ marginTop: "5px" }}
                />
              </div>
              <div className="super-offer-content">
                <div className="content-1">My trips</div>
                <div className="content-2">Manage your bookings</div>
              </div>
            </li>

            <li>
              <Link to={"/login"}>
              <div className="login-create-account">
                <div style={{ fontSize: "12px" }}>Login or Create account</div>

                <div>
                  <ExpandMore />
                </div>
              </div>
              </Link>
            </li>

            <li className="language-selector">
              <div>
                <img src={India} alt="india-logo" width="20px" height="20px" />
              </div>

              <div style={{ marginLeft: "2px" }}>IN | ENG | INR</div>
              <div>
                <ExpandMore />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
