import React from "react";

const Counter = (props) => {
  let { number, setNumber } = props;

  return (
    <div className="counter">
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Counter;
