import React from "react";

interface propsSnake {
  snakeDots: number[][];
}

interface propsFood {
  dot: number[];
}

const Snake: React.FC<propsSnake> = (props) => {
  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return <div className="snake-dot" key={i} style={style}></div>;
      })}
    </div>
  );
};

const Food: React.FC<propsFood> = (props) => {
  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`,
  };

  return <div className="snake-food" style={style}></div>;
};

export { Snake, Food };
