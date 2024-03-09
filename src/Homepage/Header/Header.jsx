import { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../Assest/Logo/mmtLogoWhite.png";
import TravelLogo from "../../Assest/Logo/My Travel logo.png";
import India from "../../Assest/Logo/india.png";
import { ExpandMore } from "@mui/icons-material";
import offerbg from "../../Assest/BackGround/%-bg.png";
import MyContext from "../../Context/MyContext";

function Navbar() {
  const {
    setMode,
    setShowLogin,
    showLogin,
    login,
    setLogin,
    authenticate,
    setAuthenticate,
  } = useContext(MyContext);
  const [showLogout, setShowLogout] = useState(false);

  const handleLogOut = () => {
    setAuthenticate(false);
    localStorage.removeItem("user-info");
  };

  const user = localStorage.getItem("user-info");
  const userData = user ? JSON.parse(user) : null;
  const userName = userData && userData.data ? userData.data.name : null;



  return (
    <>
      <div className="header">
        <div className="header-heading">
          <Link to={"/"}>
            <div className="logo" onClick={() => setMode("Flights")}>
              <img src={Logo} alt="logo" width="113px" height="36px" />
            </div>
          </Link>

          <ul className="header-content flex justify-end">
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

            <li className="my-trips flex">
              <Link to={"/mytrips"}>
                <div className="w-full flex ">
                  <img
                    src={TravelLogo}
                    alt="travel-logo"
                    width="25px"
                    height="25px"
                    style={{ marginTop: "5px" }}
                  />
                

                <div className="super-offer-content">
                  <div className="content-1">My trips</div>
                  <div className="content-2">Manage your bookings</div>
                </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/"}>
                <div
                  className="login-create-account"
                  onClick={() => setLogin(!login)}
                >
                  {authenticate === false ? (
                    <div>
                      <p> Login or Create account</p>
                    </div>
                  ) : (
                    <div onClick={() => setShowLogout(!showLogout)}>
                      <div className="flex gap-x-2 text-base">
                        <div> {`Hi ${userName}`}</div>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </li>

            <li className="language-selector">
              {authenticate === true ? (
                <div className="logout" onClick={handleLogOut}>
                  Logout
                </div>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
