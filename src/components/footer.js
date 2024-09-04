import React from "react"
import '../styles/footer.css'
import { HomeScroll, AboutScroll, MenuScroll, ProductsScroll, ReviewScroll, ContactScroll, BlogsScroll } from './scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faPinterestP } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="brands-child">
                
                <div className="brand-border">
                    <FontAwesomeIcon icon={faFacebookF} className="brands" size="xl" />
                </div>
                <div className="brand-border">
                    <FontAwesomeIcon icon={faTwitter} className="brands" size="xl" />
                </div>
                <div className="brand-border">
                    <FontAwesomeIcon icon={faInstagram} className="brands" size="xl" />
                </div>
                <div className="brand-border">
                    <FontAwesomeIcon icon={faLinkedinIn} className="brands" size="xl" />
                </div>
                <div className="brand-border">
                    <FontAwesomeIcon icon={faPinterestP} className="brands" size="xl" />
                </div>
                
            </div>
            <div className="button-wrap">
                <button className="button-ref" onClick={HomeScroll}> Home </button>
                <button className="button-ref" onClick={AboutScroll}> About </button>
                <button className="button-ref" onClick={MenuScroll}> Menu </button>
                <button className="button-ref" onClick={ProductsScroll}> Products </button>
                <button className="button-ref" onClick={ReviewScroll}> Review </button>
                <button className="button-ref" onClick={ContactScroll}> Contact </button>
                <button className="button-ref" onClick={BlogsScroll}> Blogs </button>
            </div>
        </div>
    )
}