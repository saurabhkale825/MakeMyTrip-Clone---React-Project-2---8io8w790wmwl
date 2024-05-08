import { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../Assest/Logo/mmtLogoWhite.png";
import TravelLogo from "../../Assest/Logo/My Travel logo.png";
import offerbg from "../../Assest/BackGround/%-bg.png";
import MyContext from "../../Context/MyContext";
import AuthContext from "../../Context/AuthContext";

function Navbar() {
  const { authenticate, setAuthenticate } = useContext(AuthContext);
  const { setMode, login, setLogin } = useContext(MyContext);
  const [userName, setUserName] = useState("Traveller");

  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);

  const handleLogOut = () => {
    setAuthenticate(false);
    localStorage.removeItem("user-info");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user-info"));
    console.log("user =>" , user);
    if (user) {
      setUserName(user?.data?.user.name); 
    }
  }, [authenticate]);

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
                      <div> Login or Create account</div>
                    </div>
                  ) : (
                    <div onClick={() => setLogin(!login)}>
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
