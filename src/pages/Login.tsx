import React from "react";
import { ReactComponent as Logo } from "../assets/lendsqr-logo.svg";
import loginImage from "../assets/login-image.svg";
import PasswordInput from "../components/PasswordInput";

const Login = () => {
  return (
    <>
      <Logo className="logo" />
      <div className="login-page-container">
        <div>
          <img src={loginImage} alt="" />
        </div>

        <div className="login-form-container">
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
          <form>
            <input type="email" placeholder="Email" />
            <PasswordInput/>
            <p>Forgot password?</p>

            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
