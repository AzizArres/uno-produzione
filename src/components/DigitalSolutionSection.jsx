/* eslint-disable no-unused-vars */
import React from "react"
import maskGroup3 from "/src/assets/mask group 3.png"
import maskGroup2 from "/src/assets/Mask group 2.png"

export default function DigitalSolutionSection(){
    return(
        <div className="digital-solution-section">
            <div className="digital-solution-text-box">
                <div className="digital-solutions">
                    <img src={maskGroup3} alt="" />
                    <h1>DIGITAL</h1>
                    <h1>SOLUTIONS</h1>
                </div>
                <div className="digital-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia accusantium accusamus reprehenderit laboriosam placeat, voluptatem veniam dignissimos distinctio consequuntur. 
                        - Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="experience-projects">
                    <div className="experience">
                        <h1>6</h1>
                        <p>Years of Experience</p>
                    </div>
                    <div className="projects">
                        <h1>100s</h1>
                        <p>Projects Worldwide</p>
                    </div>
                </div>
            </div>
            <img src={maskGroup2} alt="" className="digital-image"/>
        </div>
    )
}