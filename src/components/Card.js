import React from 'react'
import '../styles/card.css'



const Card = (props) => {
    

    

    return (
    <div className='card'>
        <img className = 'heartImg' src={props.card.logo} alt=""/>
        <img style = {imgStyle} src={props.card.img} alt=""/>
        <hr style = {hrStyle}></hr>
        <h3 style = {h3Styling}>{props.card.precio}</h3>
        <p style = {pStyling}>{props.card.envio}</p>
        <p id = "noDisplay">{props.card.detalle}</p>
    </div>
    )
}

export default Card



let imgStyle = {
    height: "10rem",
    width: "100%",
    objectFit: "contain",
}

let hrStyle = {
    backgroundColor: "#ebebeb",
    border: "none",
    height: "1px"
}

let h3Styling = {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "1.5rem",
    color: "#2e2d2d",
    margin: "1rem 1rem .1rem",
}

let pStyling = {
    margin: "0.2rem 0 0 1rem",
    color: "#41BD7D",
    fontWeigth: "lighter",
    fontFamily: "Roboto",
    fontSize: ".8rem",
    fontWeight: "bolder"
}





