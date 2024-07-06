import React, {useState} from "react"
import DialogWindow from "/src/components/subComponents/DialogWindow.jsx"
import Data from "/src/data/Data.js" 
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
                        <img src="src/assets/priscilla-du-preez-v0kQglce46E-unsplash.jpg" className="service-image" />
                        <label>Events</label>
                        {
                            openEvents && <DialogWindow title="Events" images={Data.Events}/>
                        }
                    </div>
                    <div className="service" onClick={toggleOpenWedding}>
                        <img src="src/assets/samantha-gades-2TdhwS6Y3pU-unsplash.jpg" className="service-image"/>
                        <label>Wedding</label>
                        {
                            openWedding && <DialogWindow title="Wedding" images={Data.Wedding} />
                        }
                    </div>
                    <div className="service" onClick={toggleOpenVideoEditing}>
                        <img src="src/assets/oguz-yagiz-kara-OhC9aDrGsHU-unsplash.jpg" className="service-image" />
                        <label>Video Editing</label>
                        {
                            openVideoEditing && <DialogWindow title="Video Editing" images={Data.VideoEditing} />
                        }
                    </div>
                    <div className="service" onClick={toggleOpenShooting}>
                        <img src="src/assets/jan-kopriva-TFT_Y2O2-1k-unsplash.jpg" className="service-image" />
                        <label>Shooting</label>
                        {
                            openShooting && <DialogWindow title="Shooting" images={Data.Shooting} />
                        }
                    </div>
                    <div className="service" onClick={toggleOpenDesignAndDecoration}>
                        <img src="src/assets/minh-pham-MBsReSZ2WNM-unsplash.jpg" className="service-image"/>
                        <label>Design & Decoration</label>
                        {
                            openDesignAndDecoration && <DialogWindow title="Design & Decoration" images={Data.DesignAndDecoration} />
                        }
                    </div>
                </div>
            </fieldset>
        </div>
    )
}