"use client";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "../../../../public/assets/css/chackbox.css";

const Login = () => {
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

    usernameRef.current.focus();
  }, []);

  const handleForm = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Login successful");
  };

  return (
    <>
      <form className="login-form" onSubmit={handleForm}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="username"
                name="username"
                placeholder="Username*"
                type="text"
                autoComplete="off"
                required
                ref={usernameRef}
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="password"
                name="password"
                placeholder="Password*"
                type="password"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="form-check">
                <input
                  className="inputChkekbox"
                  type="checkbox"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <a href="/forgotPassword" className="forgot-password">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button type="submit" name="submit" id="submit">
              <i className="fa fa-paper-plane"></i> Login
            </button>
          </div>
        </div>
        <div className="col-lg-12 alert-notification">
          <div id="message" className="alert-msg"></div>
        </div>
      </form>
    </>
  );
};

export default Login;
