import React, {useEffect} from 'react';
import './ProductList.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";
import product1 from "../../assets/product2.webp"
import product2 from "../../assets/product3.webp"
import product3 from "../../assets/product4.webp"
import product4 from "../../assets/product5.webp"
import product5 from "../../assets/product6.webp"
import product6 from "../../assets/product7.webp"
import product7 from "../../assets/product8.webp"
import product8 from "../../assets/product9.webp"
import product9 from "../../assets/product10.webp"
import product10 from "../../assets/product11.webp"
import { Button } from '@mui/material';

const ProductList = () => {
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
                    <p className='title' data-aos="fade-up">Popular Products for you</p>
                    <h1 className='heading' data-aos="fade-up">Popular Products</h1>
                    <p className='description' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>

                {/* product cards */}
                <div className='product-card' data-aos="fade-up">

                    <div className='card'>
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

                    <div className='card'>
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

                    <div className='card'>
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

                    <div className='card'>
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

                    <div className='card'>
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
                    <div className='card'>
                        <div className='card-img'>
                            <img src={product6} alt='' />
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

                    <div className='card'>
                        <div className='card-img'>
                            <img src={product7} alt='' />
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

                    <div className='card'>
                        <div className='card-img'>
                            <img src={product8} alt='' />
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

                    <div className='card'>
                        <div className='card-img'>
                            <img src={product9} alt='' />
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

                    <div className='card'>
                        <div className='card-img'>
                            <img src={product10} alt='' />
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

export default ProductList;