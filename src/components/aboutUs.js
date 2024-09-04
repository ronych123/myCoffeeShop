import React from "react"
import '../styles/about-us.css'

export default function AboutUs() {
    return (      
            <div className="about-us-container">
                <div className="about-us-title"> <span className="about-us-title-child">about </span> us</div>
                <div className="about-us-child">
                    <div className="about-us-img"> <img src="../images/about-us-img.jpg" className="about-us-img" />  </div> 
                    <div className="about-us-paragraph">
                        <div className="about-us-paragraph-title">what makes our coffee special?</div> 
                        <br/>
                        <div className="about-us-paragraph-description">
                            Celebrate the essence of our coffee, meticulously crafted from the world's finest beans, 
                            roasted to perfection, and brewed with passion.
                            With each sip, you're not just tasting coffee; you're experiencing a commitment to quality,
                            a celebration of culture, and a sip of the extraordinary. <br/> <br/> 
                            Indulge in the special blend that transforms a simple moment into a memorable experience.
                        </div>              
                        <button className="learn-more-button">Learn More</button>      
                    </div>
                </div>        
            </div>
    )
}