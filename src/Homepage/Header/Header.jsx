import { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link, useNavigate  } from "react-router-dom";
import Logo from "../../Assest/Logo/mmtLogoWhite.png";
import TravelLogo from "../../Assest/Logo/My Travel logo.png";
import offerbg from "../../Assest/BackGround/%-bg.png";
import MyContext from "../../Context/MyContext";
import AuthContext from "../../Context/AuthContext";
import Login from "../../Login/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const { authenticate, setAuthenticate } = useContext(AuthContext);
  const { setMode, login, setLogin } = useContext(MyContext);
  const [userName, setUserName] = useState("Traveller");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user-info"));
    // console.log("user =>", user);
    if (user) {
      setUserName(user?.data?.user.name);
    }
  }, [authenticate]);

  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);

  const handleLogOut = () => {
    setAuthenticate(false);
    toast.success("Logged Out Successfully.");
    localStorage.removeItem("user-info");
  };

  const Trip = () => {
    authenticate ? navigate('/mytrips') : toast.warning("You are not logged in!")
  }

  return (
    <>
      {login ? <Login /> : null}
      <div className="header">
        <div className="header-container">
          <div className="header-heading">
            <Link to={"/"}>
              <div className="logo" onClick={() => setMode("Flights")}>
                <img src={Logo} alt="logo" width="113px" height="36px" />
              </div>
            </Link>
          </div>

          <div className="header-content">
            <ul className=" w-full flex justify-end">
              <Link to={"/all-offer"}>
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
              </Link>

              <li className="my-trips flex" onClick={Trip}>
                
                  <div className="w-full flex ">
                    <img
                      src={TravelLogo}
                      alt="travel-logo"
                      width="25px"
                      height="25px"
                      // style={{ marginTop: "5px" }}
                    />

                    <div className="super-offer-content">
                      <div className="content-1">My trips</div>
                      <div className="content-2">Manage your bookings</div>
                    </div>
                  </div>

              </li>

              <li>
                <div
                  className="login-create-account"
                   
                >
                  {!authenticate ? (
                    <div onClick={() => setLogin(!login)} className=" w-full h-4/5 flex justify-center items-center">
                      <Link to={"/"}>
                        <div > Login or Create account</div>
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <div className="flex gap-x-2 text-base">
                        <div className="capitalize"> {`Hi ${userName}`}</div>
                      </div>
                    </div>
                  )}
                </div>
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
      </div>
    </>
  );
}

export default Navbar;
