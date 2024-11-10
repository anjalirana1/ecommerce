import React from "react";
import "./OptionSection.css";
import { FaRegIdCard } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { IoShirtSharp } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";
import option from "../../assets/option1.webp";

const OptionSection = () => {
  return (
    <>
      <div className="container">
        <div className="option">
          <div className="option-left" data-aos="zoom-in">
            <img src={option} alt="offering-img" width="500px" height="300px" />
          </div>

          <div className="option-right">
            <h1 data-aos="fade-up">All-In-One Printing Services</h1>
            <p data-aos="fade-up">
              We offer high-quality custom calendars, diaries, apparel,
              innovative packaging, and eye-catching signage. Benefit from our
              same day delivery service for urgent needs. Trust us for
              comprehensive and reliable printing solutions.
            </p>
            <div className="option-list" data-aos="fade-up">
              <span className="option-list-icon ">
                <FaCalendarAlt />
              </span>
              <span className="option-text">Calender & Diaries</span>
            </div>
            <div className="option-list" data-aos="fade-up">
              <span className="option-list-icon">
                <TbTruckDelivery />
              </span>
              <span className="option-text">Same Day Delivery</span>
            </div>
            <div className="option-list" data-aos="fade-up">
              <span className="option-list-icon">
                <IoShirtSharp />
              </span>
              <span className="option-text">Apparel</span>
            </div>
            <div className="option-list" data-aos="fade-up">
              <span className="option-list-icon">
                <FaBoxOpen />
              </span>
              <span className="option-text">Packaging Solutions</span>
            </div>
            <div className="option-list" data-aos="fade-up">
              <span className="option-list-icon">
                <FaRegIdCard />
              </span>
              <span className="option-text">Signages</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionSection;
