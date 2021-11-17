import React, { useState, useEffect } from 'react';
import Event from "./Event"
import Refresh from '../../components/RefreshButton/Refresh';
import "./Livee.scss"


export default function Liveevent() {
    const [eventData, setEventData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
            const { events } = await res.json()
            setEventData(events)
        }

        fetchEvents()
    }, [])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const flive = eventData.filter(eventData =>
        eventData.title.toString().toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="LiveApp">
            <div className="LiveSearch">
                <h1 className="LiveText">Search</h1>
                <form>
                    <input className="LiveInput" type="text" placeholder="Search Here"
                        onChange={handleChange}
                    />
                </form>
                <br />
                <Refresh></Refresh>
            </div>
            {flive.map(eventData => {
                return (
                    <Event key={eventData.id}
                        name={eventData.id}
                        title={eventData.title}
                    />
                )
            })}
        </div>
    )
}
