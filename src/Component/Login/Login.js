import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header mt-3">
            <h3>Login</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <label>User Email:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="input-group form-group my-3">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn float-right login_btn"
                />
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
