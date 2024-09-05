"use client";
import React, { useRef, useEffect } from "react";
import { toast } from "react-toastify";
import "../../../../public/assets/css/chackbox.css";
import CustomSelect from "../../../components/select/CustomSelect";

const Register = () => {
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

    usernameRef.current.focus();
  }, []);

  const handleForm = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Registered successful");
  };
  const options = [
    { value: "Select Job", label: "Select Job" },
    { value: "Job 1", label: "Job 1" },
    { value: "Job 2", label: "Job 2" },
    { value: "Job 3", label: "Job 3" },
    { value: "Other", label: "Other" },
  ];
  return (
    <>
      <form className="login-form" onSubmit={handleForm}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="carrierName"
                name="carrierName"
                placeholder="CarrierName*"
                type="text"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Name*"
                type="text"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="LastName*"
                type="text"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="MCNumber"
                name="MCNumber"
                placeholder="MC Number*"
                type="number"
                autoComplete="off"
                required
              />
              <span ref={usernameRef} className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="DotNumber"
                name="DotNumber"
                placeholder="Dot Number*"
                type="number"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="einNumber"
                name="einNumber"
                placeholder="Ein Number*"
                type="number"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number*"
                type="number"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
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
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="re-enterEmail"
                name="re-enterEmail"
                placeholder="Re-Enter Email*"
                type="email"
                autoComplete="off"
                required
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
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="ConfirmPassword"
                name="ConfirmPassword"
                placeholder="Confirm Password*"
                type="password"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <CustomSelect options={options} selectValue="0" />
          <div className="col-lg-12">
            <div className="form-group" style={{ marginTop: 20 }}>
              <h5 htmlFor="pdfFile">Upload Certificate</h5>
              <input
                className="form-control"
                id="pdfFile"
                name="pdfFile"
                type="file"
                accept=".pdf"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button type="submit" name="submit" id="submit">
              <i className="fa fa-paper-plane"></i> Register
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

export default Register;
