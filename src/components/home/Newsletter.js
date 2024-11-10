import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter" data-aos="zoom-in">
        <div className="container newsletter-box">
          <h1>Get Notified About New Products</h1>
          <input
            type="text"
            placeholder="Enter your email"
            // className="aos-init aos-animate"
            data-aos="fade-up"
          />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
