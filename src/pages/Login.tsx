import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/lendsqr-logo.svg";
import loginImage from "../assets/login-image.svg";
import PasswordInput from "../components/PasswordInput";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [errorState, setErrorState] = useState({ email: "", password: "" });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formState is", formState);
    console.log("errorState is before manipulations", errorState);
    if (formState.email === "") {
      setErrorState((errorState) => {
        return { ...errorState, email: "Email is required" };
      });
    } else {
      setErrorState((errorState) => {
        return { ...errorState, email: "" };
      });
    }
    if (formState.password === "") {
      setErrorState((errorState) => {
        return { ...errorState, password: "Password is required" };
      });
    } else {
      setErrorState((errorState) => {
        return { ...errorState, password: "" };
      });
    }
    if (Object.values(formState).some((data) => data === "")) {
      console.log("ONe of the form input is likely empty");
      return;
    }

    navigate("/dashboard");
  };

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
          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
              />
              <small>{errorState.email}</small>
            </div>
            <div>
              <PasswordInput
                value={formState.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormState({ ...formState, password: e.target.value })
                }
              />
              <small>{errorState.password}</small>
            </div>
            <p>Forgot password?</p>

            <button type="submit">LOG IN</button>
          </form>
          <Link to="/dashboard">SEE DASHBOARD</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
