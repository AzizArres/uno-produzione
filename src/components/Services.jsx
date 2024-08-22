/* eslint-disable no-unused-vars */
import React, {useState} from "react"
import DialogWindow from "/src/components/subComponents/DialogWindow.jsx"
import Data from "/src/data/Data.js" 
import priscilla from "/src/assets/priscilla-du-preez-v0kQglce46E-unsplash.jpg"
import samantha from "/src/assets/samantha-gades-2TdhwS6Y3pU-unsplash.jpg"
import oguz from "/src/assets/oguz-yagiz-kara-OhC9aDrGsHU-unsplash.jpg"
import jan from "/src/assets/jan-kopriva-TFT_Y2O2-1k-unsplash.jpg"
import minh from "/src/assets/minh-pham-MBsReSZ2WNM-unsplash.jpg"

export default function Services(){
    const [openEvents, setOpenEvents] = useState(false)

    function toggleOpenEvents(){
        setOpenEvents(prevOpenEvents => !prevOpenEvents)
    }

    const [openWedding, setOpenWedding] = useState(false)
    function toggleOpenWedding(){
        setOpenWedding(prevOpenWedding => !prevOpenWedding)
    }

    const [openVideoEditing, setOpenVideoEditing] = useState(false)
    function toggleOpenVideoEditing(){
        setOpenVideoEditing(prevOpenVideoEditing => !prevOpenVideoEditing)
    }

    const [openShooting, setOpenShooting] = useState(false)
    function toggleOpenShooting(){
        setOpenShooting(prevOpenShooting => !prevOpenShooting)
    }
    const [openDesignAndDecoration, setOpenDesignAndDecoration] = useState(false)
    function toggleOpenDesignAndDecoration(){
        setOpenDesignAndDecoration(prevOpenDesignAndDecoration => !prevOpenDesignAndDecoration)
    }

    return(
        <div className="services-section" id="projects">
            <fieldset>
                <legend>Services</legend>
                <div className="services">
                    <div className="service" onClick={toggleOpenEvents}>
                        <img src={priscilla} className="service-image" />
                        <label>Events</label>
                        <DialogWindow open={openEvents} title="Events" images={Data.Events}/>
                    </div>
                    <div className="service" onClick={toggleOpenWedding}>
                        <img src={samantha} className="service-image"/>
                        <label>Wedding</label>
                        <DialogWindow open={openWedding} title="Wedding" images={Data.Wedding} />
                    </div>
                    <div className="service" onClick={toggleOpenVideoEditing}>
                        <img src={oguz} className="service-image" />
                        <label>Video Editing</label>
                        <DialogWindow open={openVideoEditing} title="Video Editing" images={Data.VideoEditing} />
                    </div>
                    <div className="service" onClick={toggleOpenShooting}>
                        <img src={jan} className="service-image" />
                        <label>Shooting</label>
                        <DialogWindow open={openShooting} title="Shooting" images={Data.Shooting} />
                        
                    </div>
                    <div className="service" onClick={toggleOpenDesignAndDecoration}>
                        <img src={minh} className="service-image"/>
                        <label>Design & Decoration</label>
                        <DialogWindow open={openDesignAndDecoration} title="Design & Decoration" images={Data.DesignAndDecoration} />
                    </div>
                </div>
            </fieldset>
        </div>
    )
}