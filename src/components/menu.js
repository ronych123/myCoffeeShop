import React, { useState, useEffect } from "react"
import { MenuData } from "../data/menuData"
import '../styles/menu.css'

export default function Menu({ handleAddToCart }) {

    const [menu, setMenu] = useState(MenuData);
    
    const menuMap = menu.map((item, index) => {
        return (
            <div key={item.id} className="menu-grid">
                <img src={item.image} className="menu-images" />
                <div className="coffee-cup-title">{item.title}</div>
                <div className="coffee-cup-price">{item.price} <span className="old-price"> {item.oldPrice}</span></div>
                <button className="add-to-cart-button" onClick={() => handleAddToCart(index)}>add to cart</button>
            </div>
        )
    })
    return (

            <div className="menu-container">
                <div className="our-menu"> our <span className="our-menu-child"> menu </span> </div>
                <div className="grid-menu-container">
                    {menuMap}
                </div>
            </div>
    )
}