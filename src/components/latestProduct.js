import React, { useState } from "react"
import { ProductsData } from "../data/productsData"
import '../styles/products.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"

export default function LatestProduct({handleAddToCartLatestProducts}) {

    const [products, setProducts] = useState(ProductsData)

    const productsMap = products.map((item, index) => {
        let i
        if(index === 0){
            i = 1
        } else if(index === 1) {
            i = 2
        } else if(index === 2) {
            i = 3
        }
        return (
            <div key={item.id} className={`latest-product-child child-${i}`}>
                        <div className="latest-product-icons">
                            <div className="icon-1"  onClick={() => handleAddToCartLatestProducts(index)} > <FontAwesomeIcon icon={faCartShopping} /> </div> 
                            <div className="icon-2"> <FontAwesomeIcon icon={faHeart} /> </div>
                            <div className="icon-3"> <FontAwesomeIcon icon={faEye} /> </div> 
                        </div>

                        <img src={item.image} className="lastest-product-images" />

                        <div className="fresh-coffee">{item.name}</div>

                        <div className="star-rating">
                            <FontAwesomeIcon icon={faStar} className="fa-star" />
                            <FontAwesomeIcon icon={faStar} className="fa-star" />
                            <FontAwesomeIcon icon={faStar} className="fa-star" />
                            <FontAwesomeIcon icon={faStar} className="fa-star" />
                            <FontAwesomeIcon icon={faStarHalfStroke} className="fa-half-star" />
                        </div>

                        <div className="coffee-price">{item.price} <span className="old-price"> {item.oldPrice}</span></div>
                          
                    </div>
        )
    })
    return (         
            <div className="latest-product-container">
                <div className="latest-product-title"> latest <span className="latest-product-title1"> products </span> </div>
                <div className="latest-product-grid">
                    {productsMap}
                </div>
            </div> 
    )
}