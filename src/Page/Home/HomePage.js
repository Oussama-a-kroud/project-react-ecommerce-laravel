import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import DiscountSection from "../../Components/Home/DiscountSection";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ViewHomeProductsHook from "../../hooks/products/view-home-products-hook";


const HomePage = () => {
const [items]=ViewHomeProductsHook()


  return <div className="font" style={{minHeight:'670px'}}>
    <Slider/>
    <HomeCategory/>
    <CardProductsContainer products={items} title="Best-seller" btntitle="plus..." pathText="/products"/>
    <DiscountSection/>
    <CardProductsContainer products={items}title="new" btntitle="plus..." pathText="/products"/>
    </div>;
};

export default HomePage;
