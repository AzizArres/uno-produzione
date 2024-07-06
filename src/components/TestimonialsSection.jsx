import React from "react"
import Client from "/src/components/subComponents/Client.jsx"
export default function TestimonialsSection(){
    return(
        <div className="testimonials-section" id="testimonials">
            <div className="legend">
                <h1>-Testimonials.</h1>
                <p>We're more than just an agency</p>
            </div>
            <div className="testimonials">
                <Client />
            </div>
        </div>
    )
}