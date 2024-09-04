import React, { useState } from "react"
import { CustomerReviewData } from "../data/customerReviewData"
import '../styles/review.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"

export default function CustomerReview() {
    const [customerReview, setCustomerReview] = useState(CustomerReviewData)

    const reviewMap = customerReview.map((item) => {
        return (
            

                    <div key={item.id} className="review-child"> 

                        <img src={item.image} className="straight-quotes" />

                        <div className="review-parag">
                            {item.feedback}
                        </div>

                        <img src={item.customerProfile} className="customer-image" />
                        <div className="reviewer-name">{item.customerName}</div>

                        <div className="star-rating">
                            <FontAwesomeIcon icon={faStar} className="fa-star" />
                            <FontAwesomeIcon icon={faStar} className="fa-star" />
                            <FontAwesomeIcon icon={faStar} className="fa-star" />
                            <FontAwesomeIcon icon={faStar} className="fa-star" />
                            <FontAwesomeIcon icon={faStarHalfStroke} className="fa-half-star" />
                        </div>
                        
                    </div>
        )
    })
    return (
            
            <div className="review-container">
                <div className="customer-review-title"> customer's <span className="customer-review-title1"> review </span> </div>
                <div className="review-grid">
                    {reviewMap}
                </div>              
            </div>
    )
}