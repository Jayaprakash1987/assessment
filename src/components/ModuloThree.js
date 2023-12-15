import React, { useState } from "react";

const ModuloThree = () => {
  const [inputString, setInputString] = useState("");
  const [outputValue, setOutputValue] = useState(null);

  const handleInputChange = (e) => {
    setInputString(e.target.value);
  };

  const calculateModuloThree = () => {
    let currentState = "S0";

    for (let i = 0; i < inputString.length; i++) {
      const currentInput = inputString[i];

      if (currentState === "S0") {
        if (currentInput === "0") {
          currentState = "S0";
        } else if (currentInput === "1") {
          currentState = "S1";
        }
      } else if (currentState === "S1") {
        if (currentInput === "0") {
          currentState = "S2";
        } else if (currentInput === "1") {
          currentState = "S0";
        }
      } else if (currentState === "S2") {
        if (currentInput === "0") {
          currentState = "S1";
        } else if (currentInput === "1") {
          currentState = "S2";
        }
      }
    }

    if (currentState === "S0") {
      setOutputValue(0);
    } else if (currentState === "S1") {
      setOutputValue(1);
    } else if (currentState === "S2") {
      setOutputValue(2);
    }
  };

  return (
    <center>
      <div>
        {" "}
        <h3>Standard</h3>
        <input type="text" value={inputString} onChange={handleInputChange} />
        <button onClick={calculateModuloThree}>Calculate</button>
        {outputValue !== null && <p>Output value: {outputValue}</p>}
      </div>
    </center>
  );
};

export default ModuloThree;
