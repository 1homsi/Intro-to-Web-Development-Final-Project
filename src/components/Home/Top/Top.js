import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import CovidSvg from "../../../Images/covid.svg";
import CryptoT from '../../../Images/cyrptoT.svg';
import WorldY from "../../../Images/WorldYay.svg"


export default function Top() {
    return (
        <div>
            <div className="main">
                <br /><br /><br />
                <h1 style={{ textAlign: "center" }} className="TextAtTheTop">World Wide Covid Tracker</h1>
                <div className="main__container">
                    <div className="main__content">
                        <h1>Did you know that Covid-19's scientific name is &#x21a7;</h1>
                        <h2>SARS-CoV-2</h2>
                        <p>Check out its latest movements</p>
                        <Link to="/ctracker"><button className="main__btn">Govid-19 Tracker</button></Link>
                    </div>
                    <div className="main__img--container">
                        <img id="main__img" src={CovidSvg} alt="" />
                    </div>
                </div>
                <br />
                <h1 style={{ textAlign: "center" }} className="TextAtTheTop">Crypto Tracker</h1>
                <div className="main__container">
                    <div className="main__img--container">
                        <img id="main__img" src={CryptoT} alt="" />
                    </div>
                    <div className="main__content">
                        <h1>Check Out our Crypto Tracking Service </h1>
                        <br />
                        <p> Easy and simple to understand </p>
                        <br /><br />
                        <Link to="/cryptot"><button className="main__btn">Crypto Tracker</button></Link>
                    </div>
                </div>
                <br />
                <h1 style={{ textAlign: "center" }} className="TextAtTheTop">Daily Event Tracker</h1>
                <div className="main__container">
                    <div className="main__content">
                        <h1>Do you know what happened in the world today? </h1>
                        <h2>You don't?</h2>
                        <p>Then check out the events</p>
                        <Link to="/liveE"><button className="main__btn">Event Tracker</button></Link>
                    </div>
                    <div className="main__img--container">
                        <img id="main__img" src={WorldY} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
