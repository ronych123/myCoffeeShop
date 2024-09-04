import React from "react"
import '../styles/contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons"

export default function ContactUs() {
    return (

                <div className="contact-us-container">
                            <div className="contact-us"> <span className="contact-us-child">contact </span> us</div>
                    <div className="contact-us-container-child">
                        <div> 
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52918450.40025156!2d-161.85240697328845!3d35.949761324666035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2slb!4v1702310863547!5m2!1sen!2slb"
                                className="contact-us-img"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>

                        <div className="contact-us-form">
                            <div className="form-title"> get in touch </div>
                                <div className="input-container">         
                                    <FontAwesomeIcon icon={faUser} style={{color: '#ffffff', marginLeft: '13px'}} size="lg" /> 
                                    <input type="text" placeholder="Name" className="text-input" /> 
                                </div>

                                <div className="input-container">
                                    <FontAwesomeIcon icon={faEnvelope} style={{color: '#ffffff', marginLeft: '13px'}} size="lg" /> 
                                    <input type="email" placeholder="Email" className="text-input" /> 
                                </div>

                                <div className="input-container"> 
                                    <FontAwesomeIcon icon={faPhoneFlip} style={{color: '#ffffff', marginLeft: '13px'}} size="lg" />
                                    <input type="text" placeholder="Number" className="text-input" /> 
                                </div>
                                              
                            <button className="contact-now-button">Contact Now</button>      
                        </div> 
                    </div>
                    
                </div>

    )
}