import React, {useEffect} from 'react';
import './TopProduct.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";
import product1 from "../../assets/new1.webp"
import product2 from "../../assets/new2.webp"
import product3 from "../../assets/new3.webp"
import product4 from "../../assets/new4.webp"
import product5 from "../../assets/new5.webp"
import { Button } from '@mui/material';

const TopProduct = () => {
    useEffect(() => {
        Aos.init({
          duration: 2000 
        });
      }, []);
    return (
        <>
        <div>
            <div class="container">
                <div className='product-text'>
                    <p className='title' data-aos="fade-up">New Launches for you</p>
                    <h1 className='heading' data-aos="fade-up">Products</h1>
                    <p className='description' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>

                {/* product cards */}
                <div className='product-card'>

                    <div className='card' data-aos="fade-up">
                        <div className='card-img'>
                            <img src={product1} alt='' />
                        </div>
                        <div className='card-text'>
                            <h4>Products</h4>
                            {/* <p>Red</p> */}
                            <div className='rating'>
                                <FaStar className='star' />
                                <span>4.5</span>
                            </div>
                        </div>
                    </div>

                    <div className='card' data-aos="fade-up">
                        <div className='card-img'>
                            <img src={product2} alt='' />
                        </div>
                        <div className='card-text'>
                            <h4>Products</h4>
                            {/* <p>Red</p> */}
                            <div className='rating'>
                                <FaStar className='star' />
                                <span>4.5</span>
                            </div>
                        </div>
                    </div>

                    <div className='card' data-aos="fade-up">
                        <div className='card-img'>
                            <img src={product3} alt='' />
                        </div>
                        <div className='card-text'>
                            <h4>Products</h4>
                            {/* <p>Red</p> */}
                            <div className='rating'>
                                <FaStar className='star' />
                                <span>4.5</span>
                            </div>
                        </div>
                    </div>

                    <div className='card' data-aos="fade-up">
                        <div className='card-img'>
                            <img src={product4} alt='' />
                        </div>
                        <div className='card-text'>
                            <h4>Products</h4>
                            {/* <p>Red</p> */}
                            <div className='rating'>
                                <FaStar className='star' />
                                <span>4.5</span>
                            </div>
                        </div>
                    </div>

                    <div className='card' data-aos="fade-up">
                        <div className='card-img'>
                            <img src={product5} alt='' />
                        </div>
                        <div className='card-text'>
                            <h4>Products</h4>
                            {/* <p>Red</p> */}
                            <div className='rating'>
                                <FaStar className='star' />
                                <span>4.5</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='product-box'>
                    <Button variant="contained" className='product-btn'>View All</Button>
                </div>
            </div>
            </div>

        </>
    )
};

export default TopProduct;