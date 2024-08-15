"use client";
import React, { useRef, useEffect } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

    usernameRef.current.focus();
  }, []);

  const handleForm = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Thanks For Your Message");
  };

  return (
    <>
      <form className="contact-form contact-form" onSubmit={handleForm}>
        {/* <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div> */}
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
                ref={usernameRef}
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
          {/* <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" autoComplete='off' required />
                            <span className="alert-error"></span>
                        </div>
                    </div> */}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group comments">
              <textarea
                className="form-control"
                id="comments"
                name="comments"
                placeholder="Enter Your Text *"
                autoComplete="off"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
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

export default ContactForm;
