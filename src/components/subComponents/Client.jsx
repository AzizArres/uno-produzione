/* eslint-disable no-unused-vars */
import React from "react"
import ClientsData from "/src/data/ClientsData.js"
import star from "/src/assets/star.png"

export default function Client(){
    function starCount(n){
        let myArray = []
        for(let i=0; i<n; i++){
            myArray.push(
                <img src={star} alt="star image"/>
            )
        }
        return(myArray)
    }
    let myArray = []
        for(let i=0; i<ClientsData.length; i++){
            myArray.push(
                <div className="testimonial">
                    <p>{ClientsData[i].description}</p>
                    <div className="grading">
                        {starCount(ClientsData[i].starCount)}
                    </div>
                    <img src={ClientsData[i].image}  className="client" alt="" />
                    <label>{ClientsData[i].fullName}</label>
                </div>
            )
        }
    return(myArray)
}