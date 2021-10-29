import React from 'react'
import './Coin.css';

const Coin = (props) => {
    return (
        <div className="Container">
            <div className="coinRow">
                <div className="coin">
                    <img src={props.image} alt="cryptohere" />
                    <h1>{props.name}</h1>
                    <p className="coinSymbol">{props.symbol}</p>
                </div>
                <div className="coinData">
                    <p className="coinPrice">${props.price}/</p>
                    <p className="coinVolume"> ${props.volume.toLocaleString()}</p>
                    {props.priceChange < 0 ? (
                        <p className="coinPercent red">{props.priceChange.toFixed(2)}%</p>
                    ) : (<p className="coinPercent green">{props.priceChange.toFixed(2)}%</p>)
                    }
                    <p className="coinMarketcap">
                        Mkt Cap: ${props.marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin