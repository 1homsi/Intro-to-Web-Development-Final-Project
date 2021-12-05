import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import Refresh from "../../components/RefreshButton/Refresh";

interface CoinData {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

export default function CryptoT() {
  const [coins, setCoins] = useState<CoinData[]>([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toString().toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="CApp">
      <div className="CSearch">
        <h1 className="CText">Search</h1>
        <form>
          <input
            className="CInput"
            type="text"
            placeholder="Search Here"
            onChange={handleChange}
          />
        </form>
        <br />
        <Refresh></Refresh>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            namec={coin.name}
            imagen={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}
