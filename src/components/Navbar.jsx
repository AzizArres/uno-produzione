/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react"
import more from "/src/assets/more.png"
import img from "/src/assets/414975469_7416746245011270_7345777425799124077_n.png"

export default function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    console.log(windowWidth);

    const [showPhoneDisplay, setShowPhoneDisplay] = useState(false)

    function togglePhoneDisplay(){
        setShowPhoneDisplay(prevShowPhoneDisplay =>!prevShowPhoneDisplay)
    }

    return (
        windowWidth >= 600 ? (
            <div className="navbar">
                <a href="#intro"><img src={img} className="nav-logo"/></a>
                <ul className="nav-list">
                    <a href="#intro"><li>Home</li></a>
                    <a href="#projects"><li>Projects</li></a>
                    <a href="#testimonials"><li>Testimonials</li></a>
                    <a href="#contacts"><li>Contacts</li></a>
                </ul>
            </div>
        ) : (
            <div className="navbar-phone">
                <a href="#intro"><img src={img} className="nav-logo"/></a>
                <img src={more} alt="" className="more" onClick={togglePhoneDisplay}/>
                {
                    showPhoneDisplay ? (
                        <ul className="nav-list-phone">
                            <a href="#intro"><li>Home</li></a>
                            <a href="#projects"><li>Projects</li></a>
                            <a href="#testimonials"><li>Testimonials</li></a>
                            <a href="#contacts"><li>Contacts</li></a>
                        </ul>
                    ) : null
                }
            </div>
        )
    );
}