import React from 'react'
import TopProduct from '../home/TopProduct';
import Category from '../home/Category';
import OptionSection from '../home/OptionSection';
import ProductList from '../home/ProductList';
import Newsletter from '../home/Newsletter';
import Clients from '../home/Clients';
import HomeSlider from '../home/HomeSlider';

const Home = () => {
  return (
    <>
    <HomeSlider/>
     <TopProduct/>
     <Category/>
     <OptionSection/>
     <ProductList/>
     <Newsletter/>
     <Clients/>
    </>
  )
};

export default Home;