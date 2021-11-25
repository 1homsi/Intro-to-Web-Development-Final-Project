import React from 'react'
import './Coin.scss';

interface props {
    imagen: string | undefined,
    namec: string | undefined,
    symbol: string,
    price: number,
    volume: number,
    priceChange: number,
    marketcap: number,
}

const Coin: React.FC<props> = (props) => {
    return (
        <div className="CContainer">
            <div className="CRow">
                <div className="C">
                    <img src={props.imagen} alt="cryptohere" />
                    <h1>{props.namec}</h1>
                    <p className="CSymbol">{props.symbol}</p>
                </div>
                <div className="CData">
                    <p className="CPrice">${props.price}/</p>
                    <p className="CVolume"> ${props.volume.toLocaleString()}</p>
                    {props.priceChange < 0 ? (
                        <p className="CPercent red">{props.priceChange.toFixed(2)}%</p>
                    ) : (<p className="CPercent green">{props.priceChange.toFixed(2)}%</p>)
                    }
                    <p className="CMarketcap">
                        Mkt Cap: ${props.marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin;