import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Event from "./Event"


export default function Liveevent() {
    const [livee, setlivee] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
            .then(res => {
                console.log("We made it this far")
                setlivee(res.data);
                console.log(res.data);
                console.log("we didnt make it this far")
            }).catch(error => console.log(error))
    }, []);


    const handleChange = e => {
        setSearch(e.target.value)
    }

    const flive = livee.filter(livee =>
        livee.id.toString().includes(search)
    )

    return (
        <div className="liveeApp">
            <div className="liveeearch">
                <h1 className="liveeText">Search</h1>
                <form>
                    <input className="liveeInput" type="text" placeholder="Search Here"
                        onChange={handleChange}
                    />
                </form>
                <br />
            </div>
            {flive.map(livee => {
                return (
                    <Event key={livee.id}

                    />
                )
            })}
        </div>
    )
}
