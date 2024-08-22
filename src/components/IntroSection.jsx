/* eslint-disable no-unused-vars */
import React from "react"
import maskGroup1 from "/src/assets/Mask goup 1.png"
import maskGroup from "/src/assets/Mask group.png"

export default function IntroSection(){
    return(
        <div className="intro-section" id="intro">
            <div className="presentation">
                <div className="slogan">
                    <img src={maskGroup1} />
                    <p>Our goal is to make as easy as possible for you to walk away with the solution that suits your needs.</p>
                </div>
                <div  className="years">
                    <h1> <label>SIX</label> YEARS IN THE GAME</h1>
                </div>
            </div>
            <img src={maskGroup} className="intro-image"/> 
        </div>
    )
}