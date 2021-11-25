import React from 'react'
import "./Livee.scss"


interface props {
    name: number,
    title: string,
}

const Event: React.FC<props> = ({name, title}) => {
    return (
        <div className="Container">
            <div className="LiveRow">
                <div className="Live">

                    <h1 >{title}</h1>
                    <h1 className="idkSomeMargin">Event Id: {name}</h1>
                </div>
            </div>
        </div >
    )
}

export default Event;