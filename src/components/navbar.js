import React from "react"
import '../styles/index.css'
import { HamburgerMenu } from "../navAndCard/hamMenu"

import AddTodo from "../navAndCard/addToCart"
import { HomeScroll, AboutScroll, MenuScroll, ProductsScroll, ReviewScroll, ContactScroll, BlogsScroll } from './scroll'
import { cardItem } from "../navAndCard/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

export default function Navbar({cartItems, setCartItems}) {

    return (
        <div className="head">
                
                <img src="../images/coffee-logo1.png" className="coffee-logo" />
               
                <div className="nav nav-js">
                    
                        <div className="closeMenu"> <FontAwesomeIcon icon={faXmark} onClick={HamburgerMenu}  /> </div>
                        
                        <ul className="ul-navbar">
                            <li className="home nav-all" onClick={HomeScroll}>Home</li>
                            <li className="about nav-all" onClick={AboutScroll}>About</li>
                            <li className="menu nav-all" onClick={MenuScroll}>Menu</li>
                            <li className="products nav-all" onClick={ProductsScroll}>Products</li>
                            <li className="review nav-all" onClick={ReviewScroll}>Review</li>
                            <li className="contact nav-all" onClick={ContactScroll}>Contact</li>
                            <li className="blogs nav-all" onClick={BlogsScroll}>Blogs</li> 
                        </ul> 
                                                 
                </div> 


                <div className="head-right">
          
                    <div className="cart-shopping js-card" > <FontAwesomeIcon icon={faCartShopping} onClick={() => cardItem()} /> </div>
                    <div className="openMenu"> <FontAwesomeIcon icon={faBars} onClick={HamburgerMenu} /> </div>
                </div>
                
                <div className="add-to-card js-add-to-card">
                    <AddTodo cartItems={cartItems} setCartItems={setCartItems}/>
                </div>
            </div>
                               
    )
}