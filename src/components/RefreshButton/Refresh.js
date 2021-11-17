import React from 'react'
import { refreshPage } from '../../Functions'
import "./RefreshButton.scss"

export default function Refresh() {
    return (
        <div>
            <button id="RefreshButton" onClick={refreshPage}>Refresh</button>
        </div>
    )
}
