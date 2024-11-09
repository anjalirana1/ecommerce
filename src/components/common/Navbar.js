import React from 'react';
import './Navbar.css'
import Logo from '../../assets/logo.webp';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
    <div className='nav'>
        {/* Upper navbar */}
        <div className='nav-main container'>
        <div className='nav-upper'>
                <div>
                        <img src={Logo} alt='logo' className='logo'/>
                </div>
            {/* search bar and cart */}
            <div className='search'>
                <div className='search-box'>
                    <input type='text' placeholder='search' 
                    className='search-input'/>
                    <IoMdSearch className='search-icon'/>
                </div>
           

        {/* order button */}
        <button className='btn'>
                <FaCartShopping className='cart'/>
        </button>
        <button className='btn'>
                <FaRegUser className='cart'/>
        </button>
            </div>
            </div>
        </div>
           {/* lower navbar */}
        <div className='lower-navbar'>
        <div className='container'>
            <ul className='menu-list'>
                <li>Stationery</li>
                <li>Corporate Gifts</li>
                <li>Labels & Packaging</li>
                <li>Apparel</li>
                <li>Signages</li>
                <li>Marketing & Promo</li>
            </ul>
        </div>
        </div>
    </div>
    </>
  )
};

export default Navbar;