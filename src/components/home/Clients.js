import React, { useEffect } from 'react';
import './Newsletter.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Clients = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, []);
  return (
    <>
    <div className='clients' data-aos="zoom-in">
      
    </div>
   </>
  )
};

export default Clients;