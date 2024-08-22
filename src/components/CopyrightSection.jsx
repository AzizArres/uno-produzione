/* eslint-disable no-unused-vars */
import React from "react"
import solar from "/src/assets/solar_copyright-outline.png"
export default function CopyrightSection(){
    return(
        <div className="copyright-section">
            <div>
                <img src={solar} alt="" />
                <p>Copyright 2024 Marouen Sahbeni. All Rights Reserved</p>
            </div>
        </div>
    )
}