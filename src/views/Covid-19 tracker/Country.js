import React from 'react'
import "./Covid.css"

const Coin = (props) => {
    return (
        <div className="Container">
            <div className="countriesRow">
                <div className="countries">
                    <h1>{props.name}</h1>
                    <h1 className="idkSomeMargin"> Cases: {props.text}</h1>
                    <h1 className="idkSomeMargin"> Today's Cases: {props.TCases}</h1>
                    <h1 style={{ color: "red" }} className="idkSomeMargin"> Total Death's: {props.Death}</h1>
                    <h1 style={{ color: "green" }} className="idkSomeMargin"> Recovered: {props.Recovered}</h1>
                </div>
            </div>
        </div >
    )
}

export default Coin