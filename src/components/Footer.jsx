/* eslint-disable no-unused-vars */
import React from "react"
import img from "/src/assets/414975469_7416746245011270_7345777425799124077_n.png"

export default function Footer(){
    return(
        <div className="footer">
            <img src={img} alt="" />
            <div className="footer-services">
                <h3>Services</h3>
                <ul>
                    <li>Shooting</li>
                    <li>Design & Decoration</li>
                    <li>Video & Photo Editing</li>
                    <li>Events</li>
                </ul>
            </div>
            <div className="footer-contact">
                <h3>Address</h3>
                <p>Bd, Hedi Chaker Bizerte, Tunisia</p>
            </div>
        </div>
    )
}