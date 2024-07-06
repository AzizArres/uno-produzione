import React from "react"
export default function DialogWindow(props){
    function renderImages(images){
        let myArr = []
        for(let i=0; i<images.length;i++){
                myArr.push(<div> <img src={images[i].url} /> </div>)
        }
        return(myArr)
    }
    return(
        <div>
            <div className="overlay"></div>
                <dialog open className="dialog">
                    <h2>{props.title}</h2>
                    <div className="dialog-gallery">
                        {
                            renderImages(props.images)
                        }
                    </div>
                </dialog>
        </div>
    )
}