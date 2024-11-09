import React, { useEffect } from "react";
import "./Footer.css";
import Logo from "../../assets/logo.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 320
    });
  }, []);

  return (
    <>
      <footer>
        <div className="footer-row">
          <div className="footer-col" data-aos="zoom-in">
            <img src={Logo} alt="" className="footer-logo" />
            <p>
              WordPress Themes Jun 21, 2024 Jordana A. & Nadia 12min Read 15
              Best Free WooCommerce Themes to Enhance Your Online Store
              WooCommerce is an excellent eCommerce plugin for starting an
              online business on WordPress. 
            </p>
          </div>
          <div className="footer-col" data-aos="zoom-in">
            <h3>Office 
              <div className="underline"><span></span></div></h3>
            <p>Noida</p>
            <p>Utter Pradesh, 201301, India</p>
            <p className="email-id">care@printo.in</p>
            <h4>+91 9513734374</h4>
          </div>
          <div className="footer-col" data-aos="zoom-in">
            <h3>Links
            <div className="underline"><span></span></div>
            </h3>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="footer-col" data-aos="zoom-in">
          <h3>Social Links
            <div className="underline"><span></span></div>
            </h3>
          <div className="social-icon">
             <FaFacebookF className="footer-icon"/>
             <FaInstagram className="footer-icon"/>
             <FaLinkedin className="footer-icon"/>
             <FaTwitter className="footer-icon"/>
          </div>
          </div>
        </div>
        <hr/>
        <p className="copyright">©2024 Printo Document Services Pvt. Ltd.. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
