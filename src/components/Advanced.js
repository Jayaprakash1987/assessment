import React, { useState } from "react";

const Advanced = () => {
  const [inputString, setInputString] = useState("");
  const [outputValue, setOutputValue] = useState(null);

  const transitionFunction = (state, symbol) => {
    if (state === "S0") {
      if (symbol === "0") return "S0";
      if (symbol === "1") return "S1";
    } else if (state === "S1") {
      if (symbol === "0") return "S2";
      if (symbol === "1") return "S0";
    } else if (state === "S2") {
      if (symbol === "0") return "S1";
      if (symbol === "1") return "S2";
    }
    throw new Error(`Invalid transition: ${state} --${symbol}--> ?`);
  };

  const calculateModuloThree = () => {
    let currentState = "S0";
    try {
      for (let i = 0; i < inputString.length; i++) {
        const currentInput = inputString[i];
        if (currentInput !== "0" && currentInput !== "1") {
          throw new Error(`Invalid symbol: ${currentInput}`);
        }
        currentState = transitionFunction(currentState, currentInput);
      }
      if (currentState === "S0") {
        setOutputValue(0);
      } else if (currentState === "S1") {
        setOutputValue(1);
      } else if (currentState === "S2") {
        setOutputValue(2);
      }
    } catch (error) {
      setOutputValue(null);
      console.error(error.message);
    }
  };

  const handleInputChange = (e) => {
    setInputString(e.target.value);
  };

  return (
    <div>
      <h3>Advanced</h3>
      <label style={{ display: "none" }} htmlFor="inputString">
        Input string
      </label>
      <input
        type="text"
        id="inputString"
        value={inputString}
        onChange={handleInputChange}
      />
      <button onClick={calculateModuloThree}>Calculate</button>
      {outputValue !== null && <p>Output value: {outputValue}</p>}
    </div>
  );
};

export default Advanced;
