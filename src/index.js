import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

import Navbar from "./components/navbar"
import Home from "./components/home"
import AboutUs from "./components/aboutUs"
import Menu from "./components/menu"
import LatestProduct from "./components/latestProduct"
import CustomerReview from "./components/customerReview"
import ContactUs from "./components/contactUs"
import OurBlogs from "./components/ourBlogs"
import Footer from "./components/footer"

import './styles/app.css'

import { MenuData } from "./data/menuData"
import { ProductsData } from "./data/productsData"

export default function App() {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);


    const handleAddToCart = (index) => {
        const img = MenuData[index].image;
        const ttl = MenuData[index].title;
        const prc = MenuData[index].price;
        const oldPrc = MenuData[index].oldPrice;
        const object = { img, ttl, prc, oldPrc };
        
        // Update cartItems state
        
        setCartItems(cartItems => {
            const updatedCart = [...cartItems, object];
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            return updatedCart;   
        });
        console.log(cartItems)
    };

    const handleAddToCartLatestProducts = (index) => {
        const img = ProductsData[index].image;
        const ttl = ProductsData[index].name;
        const prc = ProductsData[index].price;
        const oldPrc = ProductsData[index].oldPrice;
        const object = { img, ttl, prc, oldPrc };
        
        // Update cartItems state
        
        setCartItems(cartItems => {
            const updatedCart = [...cartItems, object];
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            return updatedCart;   
        });
        console.log(cartItems)
    };

   
    return (
      <div className="main--container">
          <Navbar cartItems={cartItems} setCartItems={setCartItems}/>
          <Home />
          <AboutUs />
          <Menu handleAddToCart={handleAddToCart} />
          <LatestProduct handleAddToCartLatestProducts={handleAddToCartLatestProducts}/>
          <CustomerReview />
          <ContactUs />
          <OurBlogs />
          <Footer />
      </div>
      
    )
}

ReactDOM.render(
    <div>
        <App />
    </div>
    
    , document.getElementById("root"))