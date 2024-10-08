/* eslint-disable no-unused-vars */
import React from "react"
import why from "/src/assets/Why img.png"
import about from "/src/assets/About img.png"

export default function WhyAboutSection(){
    return(
        <div className="why-about-section">
            <div className="why">
                <img src={why} alt="" />
                <div>
                    <h1>WHY</h1>
                    <h2>We help businesses and individuals growing up</h2>
                    <p>Personalization assumed up an excess of position in theShowcasing space and has made each and every one of your messages exhausting and without feelings.</p>
                </div>
            </div>
            <div className="about">
                <div>
                    <h1>ABOUT</h1>
                    <h2>Enrich your design workflow</h2>
                    <a href="tel: +216 23 423 674">
                        <button className="contact-us">Contact us</button>
                    </a>
                </div>
                <img src={about} alt="" />
            </div>
        </div>
    )
}