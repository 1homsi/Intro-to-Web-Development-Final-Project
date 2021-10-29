import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';


export default function CryptoT() {
    const [coins, setCoins] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            }).catch(error => console.log(error))
    }, []);


    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toString().toLowerCase().includes(search.toLowerCase())
    )


    return (
        <div className="coinApp">
            <div className="coinSearch">
                <h1 className="coinText">Search</h1>
                <form>
                    <input className="coinInput" type="text" placeholder="Search Here"
                        onChange={handleChange}
                    />
                </form>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <Coin key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        price={coin.current_price}
                        priceChange={coin.price_change_percentage_24h}
                        volume={coin.total_volume}
                    />
                )
            })}
        </div>
    );
}
