import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header mt-3">
            <h3>Register Now</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="input-group form-group my-3">
                <label>Last Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="input-group form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="input-group form-group mt-3">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <div className="input-group form-group my-3">
                <label>Conforim Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your conforim password"
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  value="Sign up"
                  className="btn float-right login_btn"
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?<Link to="signup">Sign Up</Link>
            </div>
            <div className="d-flex justify-content-center">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
