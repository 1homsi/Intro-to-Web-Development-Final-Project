// eslint-disable
import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";
import "./Covid.scss";
import Refresh from "../../components/RefreshButton/Refresh";

interface CountriesData {
  id: number;
  country: string;
  todayCases: number;
  cases: number;
  deaths: number;
  recovered: number;
}

export default function Covidtracker() {
  const [countries, setcountries] = useState<CountriesData[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        setcountries(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
  };

  const filteredcountries = countries.filter((countries) =>
    countries.country.toString().toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="countriesApp">
      <div className="countrieSearch">
        <h1 className="countriesText">Search</h1>
        <form>
          <input
            className="countriesInput"
            type="text"
            placeholder="Search Here"
            onChange={handleChange}
          />
        </form>
        <br />
        <div id="move">
          <Refresh></Refresh>
        </div>
        <br />
        <br />
        <br />
      </div>
      {filteredcountries.map((countries) => {
        return (
          <Country
            key={countries.id}
            name={countries.country}
            text={countries.cases}
            Death={countries.deaths}
            Recovered={countries.recovered}
          />
        );
      })}
    </div>
  );
}
