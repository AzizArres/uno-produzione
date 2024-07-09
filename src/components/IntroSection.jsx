import React from "react"
import Image1 from "src/assets/Mask goup 1.png"
import Image2 from "src/assets/Mask group.png"
export default function IntroSection(){
    return(
        <div className="intro-section" id="intro">
            <div className="presentation">
                <div className="slogan">
                    <img src={Image1} />
                    <p>Our goal is to make as easy as possible for you to walk away with the solution that suits your needs.</p>
                </div>
                <div  className="years">
                    <h1> <label>SIX</label> YEARS IN THE GAME</h1>
                </div>
            </div>
            <img src={Image2} className="intro-image"/> 
        </div>
    )
}
