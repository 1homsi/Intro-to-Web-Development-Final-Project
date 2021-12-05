import React from "react";
import "./Covid.scss";

interface props {
  name: string;
  text: number;
  Death: number;
  Recovered: number;
}

const Country: React.FC<props> = (props) => {
  return (
    <div className="Container">
      <div className="countriesRow">
        <div className="countries">
          <h1 style={{ fontSize: "17px" }}>{props.name}</h1>
          <h1 className="idkSomeMargin"> Cases: {props.text}</h1>
          <h1 className="idkSomeMargin red">Death's: {props.Death}</h1>
          <h1 className="idkSomeMargin green">Recovered: {props.Recovered}</h1>
        </div>
      </div>
    </div>
  );
};

export default Country;
