import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/lendsqr-logo.svg";
import loginImage from "../assets/login-image.svg";
import PasswordInput from "../components/PasswordInput";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
            <PasswordInput />
            <p>Forgot password?</p>

            <button type="submit" onClick={() => navigate("/dashboard")}>
              LOG IN
            </button>
          </form>
          <Link to="/dashboard">SEE DASHBOARD</Link>
        </div>
        
      </div>
    </>
  );
};

export default Login;
