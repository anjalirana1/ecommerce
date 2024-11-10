import { Button } from "@mui/material";
import React from "react";
import { FaStar } from "react-icons/fa";
import product9 from "../../assets/product10.webp";
import product10 from "../../assets/product11.webp";
import product1 from "../../assets/product2.webp";
import product2 from "../../assets/product3.webp";
import product3 from "../../assets/product4.webp";
import product4 from "../../assets/product5.webp";
import product5 from "../../assets/product6.webp";
import product6 from "../../assets/product7.webp";
import product7 from "../../assets/product8.webp";
import product8 from "../../assets/product9.webp";
import "./ProductList.css";

const PRODUCT_LIST = [
  {
    img: product1,
    rating: 4.5,
  },
  {
    img: product2,
    rating: 4.5,
  },
  {
    img: product3,
    rating: 4.5,
  },
  {
    img: product4,
    rating: 4.5,
  },
  {
    img: product5,
    rating: 4.5,
  },
  {
    img: product6,
    rating: 4.5,
  },
  {
    img: product7,
    rating: 4.5,
  },
  {
    img: product8,
    rating: 4.5,
  },
  {
    img: product9,
    rating: 4.5,
  },
  {
    img: product10,
    rating: 4.5,
  },
];

const ProductList = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="product-text">
            <p className="title" data-aos="fade-up">
              Popular Products for you
            </p>
            <h1 className="heading" data-aos="fade-up">
              Popular Products
            </h1>
            <p className="description" data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              asperiores modi Sit asperiores modi
            </p>
          </div>

          {/* product cards */}
          <div className="product-card" data-aos="fade-up">
            {PRODUCT_LIST.map(({ img, rating }, idx) => (
              <div className="card">
                <div className="card-img">
                  <img src={img} alt="" />
                </div>
                <div className="card-text">
                  <h4>Products</h4>
                  {/* <p>Red</p> */}
                  <div className="rating">
                    <FaStar className="star" />
                    <span>{rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="product-box">
            <Button variant="contained" className="product-btn">
              View All
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;