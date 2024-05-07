import { useState, useEffect, useContext } from "react";
import "./SignUp.css";
import AuthContext from "../Context/AuthContext";
import MyContext from "../Context/MyContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [name, setName] = useState(""); // state  for Username
  const [email, setEmail] = useState(""); // state  for User mail address.
  const [password, setPassword] = useState(""); // state  for user set password
  const { setAuthenticate } = useContext(AuthContext);
  const { login, setLogin } = useContext(MyContext);

  //to signup user and also validates required input values.
  async function UserSingUp() {
    if (name === "undefined") {
      toast.warning("Name can't be undefined");
      return;
    } else if (password.length < 5) {
      toast.warning("Password must have 5 characters");
      return;
    } else {
      try {
        let item = {
          name: name,
          email: email,
          password: password,
          appType: "bookingportals",
        };
        const Header = {
          "Content-Type": "application/json",
          projectID: "8io8w790wmwl",
        };
        let getData = await fetch(
          `https://academics.newtonschool.co/api/v1/bookingportals/signup`,
          {
            method: "POST",
            headers: Header,
            body: JSON.stringify(item),
          }
        );

        let response = await getData.json();
        console.log(response);
        if (response.status === "success") {
          toast.success("Signed In.");
          setAuthenticate(true);
          setLogin(false);
          setName("");
          setEmail("");
          setPassword("");
          localStorage.setItem("user-info", JSON.stringify(response));
        } else {
          toast.warning(response.message);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <div className="singup-page">
      <form>
        <div className="signup-page-input">
          <div className="w-min ml-6 px-1 bg-white text-xs font-medium text-left tracking-wider">
            Username
          </div>
          <input
            type="name"
            className="signup-page-input-values"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>

          <div className="w-fit ml-6 px-1 bg-white text-xs font-medium text-left tracking-wider">
            E-mail
          </div>
          <input
            type="email"
            className="signup-page-input-values"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>

          <div className=" w-min ml-6 px-1 bg-white text-xs font-medium text-left tracking-wider">
            Password
          </div>
          <input
            type="password"
            className="signup-page-input-values"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)} //set required password with min 5 character
            value={password}
            minLength="5"
          ></input>
        </div>

        <div className="signup-page-submit-button" onClick={UserSingUp}>
          SignUp
        </div>
      </form>
    </div>
  );
}

export default SignUp;
