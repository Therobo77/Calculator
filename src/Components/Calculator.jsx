import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "clear") {
      setExpression("");
      setResult("");
    } else if (value === "backspace") {
      setExpression(expression.slice(0, -1));
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(expression));
      } catch (error) {
        setResult("Error");
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div id="calculator">
      <p>Made By : Vikash !~!~ origination ? India</p>
      <div className="output">
        <div id="expression">{expression}</div>
        <div id="result">{result}</div>
      </div>
      <div className="keys">
        <button value="1" onClick={() => handleClick("1")}>
          1
        </button>
        <button value="2" onClick={() => handleClick("2")}>
          2
        </button>
        <button value="3" onClick={() => handleClick("3")}>
          3
        </button>
        <button value="+" className="operator" onClick={() => handleClick("+")}>
          +
        </button>
        <button value="4" onClick={() => handleClick("4")}>
          4
        </button>
        <button value="5" onClick={() => handleClick("5")}>
          5
        </button>
        <button value="6" onClick={() => handleClick("6")}>
          6
        </button>
        <button value="-" className="operator" onClick={() => handleClick("-")}>
          -
        </button>
        <button value="7" onClick={() => handleClick("7")}>
          7
        </button>
        <button value="8" onClick={() => handleClick("8")}>
          8
        </button>
        <button value="9" onClick={() => handleClick("9")}>
          9
        </button>
        <button value="*" className="operator" onClick={() => handleClick("*")}>
          &times;
        </button>
        <button value="clear" onClick={() => handleClick("clear")}>
          C
        </button>
        <button value="0" onClick={() => handleClick("0")}>
          0
        </button>
        <button value="=" className="eval" onClick={() => handleClick("=")}>
          =
        </button>
        <button value="/" className="operator" onClick={() => handleClick("/")}>
          &#247;
        </button>
      </div>
    </div>
  );
};

export default Calculator;
