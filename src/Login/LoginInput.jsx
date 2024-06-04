import React, {useState, useContext } from 'react'
import "./LoginInput.css"
import Google from "../Assest/Logo/Google logo.png"
import MyContext from '../Context/MyContext'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../Context/AuthContext';
import { Link } from 'react-router-dom';



function LoginInput() {

  const{authenticate,
    setAuthenticate} = useContext(AuthContext);
  const {setLogin } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    //To login the user 
  async function Login() {
    try {
      let item = { "email": email, "password": password, "appType": "bookingportals" };
      const Header = {
        'Content-Type': "application/json",
        "projectID": "8io8w790wmwl"
      };
      let getData = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/login`, {
        method: "POST",
        headers: Header,
        body: JSON.stringify(item),
      });

      let response = await getData.json();

      

      if (response.status === "success") {
        localStorage.setItem("user-info", JSON.stringify(response));
        toast.success("Logging Successfully.");
        setLogin(false);
        setEmail("");
        setPassword("");
        setAuthenticate(true);
        
      } else {
        toast.warning(response.message);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login-page-input-section">
          <div className="w-min mb-1 px-1 bg-white text-xs font-medium text-left tracking-wider">Email</div>
          <div className="login-page-input">
            <input 
            type='email'
            autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}>   
            </input>
          </div>

          <div className="w-min mb-1 px-1 bg-white text-xs font-medium text-left tracking-wider">Password</div>
          <div className="login-page-input">
            <input 
            type='password'
            autoComplete='off'
            value={password}
            onChange={(e) => setPassword(e.target.value)}></input>
          </div>

          

          <div className="login-page-continue-button" onClick={Login}>Continue</div>

          <div className='login-page-google-text'>
            <span className='login-page-line'>---------------</span>
            <span className='mx-6'>or Login/Signup with</span>
            <span className='login-page-line'>---------------</span>
          </div>

          <div className='google-logo' >
            <Link to={"/error"}>
            <img src={Google} alt='google logo' width="40px" height="40px"/>
            </Link>
          </div>
        </div>
  )
}

export default LoginInput