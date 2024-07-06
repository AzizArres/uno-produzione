import React, {useState} from "react"
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
            <a href="#intro"><img src="./src/assets/414975469_7416746245011270_7345777425799124077_n.png" className="nav-logo"/></a>
            <ul className="nav-list">
                <a href="#intro"><li>Home</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#testimonials"><li>Testimonials</li></a>
                <a href="#contacts"><li>Contacts</li></a>
            </ul>
            <img src="src/assets/more.png" className="more" alt="" onClick={togglePhoneDisplay} />
            <ul className={classPhone}>
                <a href="#"><li>Home</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#testimonials"><li>Testimonials</li></a>
                <a href="#contacts"><li>Contacts</li></a>
            </ul>
        </div>
    )
}