import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

export default function Footer() {
    return (
        <div>
            <p style={{ textAlign: "center" }} className="Foot">© 2021-2022,
                <Link to="/" style={{ textDecoration: "none", color: "#000" }} className="Foot"> PP Republic.</Link>All rights reserved</p>
        </div>
    )
}
