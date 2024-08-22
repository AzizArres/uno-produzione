/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from "react"
import Modal from "react-modal"


export default function DialogWindow(props){
    

    function renderImages(images){
        let myArr = []
        for(let i=0; i<images.length;i++){
                myArr.push(<div key={images.id}> <img src={images[i].url} /> </div>)
        }
        return(myArr)
    }
    return(
        <Modal isOpen={props.open && open} className="dialog">
            <h2>{props.title}</h2>
                <div className="dialog-gallery">
                    {
                        renderImages(props.images)
                    }
                </div>
        </Modal>
    )
}