import { useState , useEffect, useContext } from "react";
import "./SignUp.css";
import AuthContext from "../Context/AuthContext";
import MyContext from "../Context/MyContext";

function SignUp (){

  const[name , setName] = useState("");
  const[email, setEmail] = useState("");
  const[password , setPassword] = useState("");
  const{authenticate , setAuthenticate} = useContext(AuthContext);
  const {login , setLogin} = useContext(MyContext);


   async function UserSingUp() {
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
      let getData = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/signup`, {
        method: "POST",
        headers: Header,
        body: JSON.stringify(item),
      });

      let response = await getData.json();
      console.log(response);
      if (response.status === "success") {
        alert("You SingUp in Successfully");
        setAuthenticate(true)
        setLogin(false);
        setName("");
        setEmail("");
        setPassword("");
        
      } else {
        alert(response.message);
      }

      localStorage.setItem("user-info", JSON.stringify(response));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="singup-page">
      <form>
      <div className="signup-page-input">
        <div className="w-min ml-6 px-1 bg-white text-xs font-medium text-left tracking-wider">Username</div>
        <input
          type="name"
          className="signup-page-input-values"
           autoComplete="off"
           onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>

        <div className="w-fit ml-6 px-1 bg-white text-xs font-medium text-left tracking-wider">E-mail</div>
        <input
          type="email"
          className="signup-page-input-values"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
           value={email}
        ></input>

        <div className=" w-min ml-6 px-1 bg-white text-xs font-medium text-left tracking-wider">Password</div>
        <input
          type="password"
          className="signup-page-input-values"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
