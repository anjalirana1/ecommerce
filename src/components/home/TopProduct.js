import React from 'react';
import './TopProduct.css';
import { FaStar } from "react-icons/fa";
import product1 from "../../assets/new1.webp"
import product2 from "../../assets/new2.webp"
import product3 from "../../assets/new3.webp"
import product4 from "../../assets/new4.webp"
import product5 from "../../assets/new5.webp"
import { Button } from '@mui/material';

const TopProduct = () => {
    const TOP_PRODUCT = [
        {
          img: product1,
          title: "Product",
          rating: 4.5,
        },
        {
          img: product2,
          title: "Product",
          rating: 4.5,
        },
        {
          img: product3,
          rating: 4.5,
        },
        {
          img: product4,
          title: "Product",
          rating: 4.5,
        },
        {
          img: product5,
          title: "Product",
          rating: 4.5,
        },
      ];
    return (
        <>
        <div>
            <div className="container">
                <div className='product-text'>
                    <p className='title'>New Launches for you</p>
                    <h1 className='heading' data-aos="fade-up">Products</h1>
                    <p className='description' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>

                {/* product cards */}
                <div className='product-card'>
                {TOP_PRODUCT.map(({ img, title, rating }, idx) => (
                    <div className='card' data-aos="fade-up">
                    <div className='card-img'>
                        <img src={img} alt='' />
                    </div>
                    <div className='card-text'>
                        <h4>{title}</h4>
                        <div className='rating'>
                            <FaStar className='star' />
                            <span>{rating}</span>
                        </div>
                    </div>
                </div>
                ))}
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