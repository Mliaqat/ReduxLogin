import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";

function Login() {
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));
  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.trim() !== "");

  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header mt-3">
            <h3>Login</h3>
          </div>
          <div className="card-body">
            <form>
              <div
                className={emailHasError ? "invalid form-group" : "form-group"}
              >
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                />
                {emailHasError && (
                  <p className="error-text"> Please enter your email</p>
                )}
              </div>
              <div
                className={
                  passwordHasError
                    ? "invalid form-group my-3"
                    : "form-group my-3"
                }
              >
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                />
                {passwordHasError && (
                  <p className="error-text">Please enter your password </p>
                )}
              </div>

              <div className="form-group">
                <button type="submit" className="btn float-right login_btn">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?<Link to="signup">Sign Up</Link>
            </div>
            <div className="d-flex justify-content-center mb-3">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
