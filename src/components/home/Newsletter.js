import React, {useEffect} from "react";
import "./Newsletter.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Newsletter = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, []);
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
