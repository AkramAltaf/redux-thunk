import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    let res = eval(input);
    console.log(res);
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={calculate}>
        =
      </button>
      <div>{result}</div>
    </div>
  );
};

export default Calculator;
