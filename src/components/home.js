import React from "react"
import '../styles/index.css'

export default function Home() {
    return (
            <div className="home-sweet">
                <img src="../images/coffee-background.png" className="home-background" />
                <div className="home-body">
                    <div className="sentence-1">fresh coffee in the morning</div>
                    <div className="sentence-2">Discover the perfect blend of warmth and flavor in every cup, making your moments extraordinary, one sip at a time.</div>
                    <button className="get-button">Get It Now</button>
                </div>
            </div>
    )
}