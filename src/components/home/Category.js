import React from 'react';
import './Category.css';
import { FaStar } from "react-icons/fa";
import best1 from "../../assets/best1.webp";
import best2 from "../../assets/best2.webp";
import best3 from "../../assets/best3.webp";
import { Button } from '@mui/material';

const Category = () => {
   

    return (
        <>
            <div className="container Category-main">
                <div className='Category-text'>
                    <p className='title' data-aos="fade-up">Top Rated Products for you</p>
                    <h1 className='heading' data-aos="fade-up">Best Products</h1>
                    <p className='Category-description' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>

                {/* product cards */}
                <div className='Category-list'>

                    <div className='Category-card' data-aos="zoom-in">
                        <div className='Category-img'>
                            <img src={best1} alt='' />
                        </div>

                        <div className='Category-card-text'>
                        <div className='Category-rating'>
                                <FaStar className='star' />
                                <FaStar className='star' />
                                <FaStar className='star' />
                                <FaStar className='star' />
                            </div>
                            <h4>Products</h4>
                            <p>lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor...</p>
                           
                                <div className='product-box'>
                    <Button variant="contained" className='product-btn'>Order Now</Button>
                </div>
                        </div>
                    </div>

                    <div className='Category-card' data-aos="zoom-in">
                        <div className='Category-img'>
                            <img src={best2} alt='' />
                        </div>

                        <div className='Category-card-text'>
                        <div className='Category-rating'>
                                <FaStar className='star' />
                                <FaStar className='star' />
                                <FaStar className='star' />
                                <FaStar className='star' />
                            </div>
                            <h4>Products</h4>
                            <p>lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor...</p>
                           
                                <div className='product-box'>
                    <Button variant="contained" className='product-btn'>Order Now</Button>
                </div>
                        </div>
                    </div>

                    <div className='Category-card' data-aos="zoom-in">
                        <div className='Category-img'>
                            <img src={best3} alt='' />
                        </div>

                        <div className='Category-card-text'>
                        <div className='Category-rating'>
                                <FaStar className='star' />
                                <FaStar className='star' />
                                <FaStar className='star' />
                                <FaStar className='star' />
                            </div>
                            <h4>Products</h4>
                            <p>lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor...</p>
                           
                                <div className='product-box'>
                    <Button variant="contained" className='product-btn'>Order Now</Button>
                </div>
                        </div>
                    </div>



                </div>

            </div>
        </>
    )
};

export default Category;