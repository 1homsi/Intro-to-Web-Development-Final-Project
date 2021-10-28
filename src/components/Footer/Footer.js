import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <div>
            <p style={{ textAlign: "center" }} className="Foot">© 2020-2021,
                <Link to="/" style={{ textDecoration: "none", color: "#000" }} className="Foot"> PP Republic.</Link>All rights reserved</p>
        </div>
    )
}
