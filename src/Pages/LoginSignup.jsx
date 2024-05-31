import React from "react";
import "./Css/LoginSinup.css"
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginSinup-container">
        <h1>Sign Up</h1>
        <div className="loginSinup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginSinup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginSinup-agree">
        <input type="checkbox" name="" id=""/>
        <p>By continue, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
