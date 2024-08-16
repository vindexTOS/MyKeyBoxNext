"use client";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "../../../../public/assets/css/chackbox.css";

const ForgotPassword = () => {
  const usernameRef = useRef(null);

  // useEffect(() => {
  //   usernameRef.current.focus();
  // }, []);

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
                id="email"
                name="email"
                placeholder="Email*"
                type="email"
                autoComplete="off"
                required
                ref={usernameRef}
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 pt-30">
            <button type="submit" name="submit" id="submit">
              <i className="fa fa-paper-plane"></i> Send
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

export default ForgotPassword;
