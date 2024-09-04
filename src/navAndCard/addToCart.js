import React, { useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

import '../styles/menu.css'



export default function AddTodo({ cartItems, setCartItems }) {
    
    function saveTodoListToLocalStorage() {
        return (
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
        )
        
    }

    const handleDelete = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
        saveTodoListToLocalStorage();
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems]);

    
    const cartItemsMap = cartItems.map((item, index) => {
        return (
            <div key={index} className="js-main-container">
                <div>
                    <img src={item.img} className = "js-picture" />
                </div>
                <div className = "cardprice">
                    <div className = "js-card-item">{`${item.prc}`}</div>
                    <div className = "js-price"> {`${item.oldPrc}/- `}</div>
                </div>
                
                <div onClick={() => handleDelete(index)} className="delete-todo-button">
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
        )
    }) 

    return (
        <div>
            {
            cartItems.length > 0 
                ? 
                cartItemsMap 
                : 
                <div className="empty-card black-ops-one-regular">
                    <div>Your</div>
                    <div>cart</div>
                    <div>is</div>
                    <div>empty</div>
                </div>
            }
        </div>
    )
}




   