import React from 'react'
import "./LoginInput.css"
import Google from "../Assest/Logo/Google logo.png"

function LoginInput() {
  return (
    <div className="login-page-input-section">
          <div className="login-page-input-text">Email</div>
          <div className="login-page-input">
            <input className='mx-1'></input>
          </div>

          <div className="login-page-input-text">Password</div>
          <div className="login-page-input">
            <input className='mx-1'></input>
          </div>

          <div className="login-page-continue-button">Continue</div>

          <div className='login-page-google-text'>
            <span className='login-page-line'>---------------</span>
            <span className='mx-6'>or Login/Signup with</span>
            <span className='login-page-line'>---------------</span>
          </div>

          <div className='google-logo'>
            <img src={Google} alt='google logo' width="40px" height="40px"/>
          </div>
        </div>
  )
}

export default LoginInput