import React from 'react'
import "./Livee.css"


const Event = (props) => {
    return (
        <div className="Container">
            <div className="LiveRow">
                <div className="Live">

                    <h1 >{props.title}</h1>
                    <h1 class="idkSomeMargin">Event Id: {props.name}</h1>
                </div>
            </div>
        </div >
    )
}

export default Event