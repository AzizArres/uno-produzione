/* eslint-disable no-unused-vars */
import React, {useState} from "react"
import more from "/src/assets/more.png"
import img from "/src/assets/414975469_7416746245011270_7345777425799124077_n.png"

export default function Navbar(){
    const [phoneDisplay, setPhoneDisplay] = useState(true)
    function togglePhoneDisplay(){
        setPhoneDisplay(prevPhoneDisplay => !prevPhoneDisplay)
    }
    let classPhone = ""
    if(phoneDisplay){
        classPhone = "nav-list nav-list-phone"
    }else{
        classPhone = "hide-nav-list-phone"
    }
    return(
        <div className="navbar">
            <a href="#intro"><img src={img} className="nav-logo"/></a>
            <ul className="nav-list">
                <a href="#intro"><li>Home</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#testimonials"><li>Testimonials</li></a>
                <a href="#contacts"><li>Contacts</li></a>
            </ul>
            <img src={more} className="more" alt="" onClick={togglePhoneDisplay} />
            <ul className={classPhone}>
                <a href="#"><li>Home</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#testimonials"><li>Testimonials</li></a>
                <a href="#contacts"><li>Contacts</li></a>
            </ul>
        </div>
    )
}