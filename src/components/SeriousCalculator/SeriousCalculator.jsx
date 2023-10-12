import React, { useState } from "react";
import './seriousCal.css'

function SeriousCalculator() {
 const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };
  return (
    <>
      <div className="container">
        <form action="" name="calc" className="calculator">
          <input
            type="text"
            className="value"
            readOnly
            name="txt"
            value={input}
          />
          <span className="num " onClick={() => handleButtonClick("C")}>
            <i>del</i>
          </span>
          <span className="num " onClick={() => handleButtonClick("C")}>
            <i>0</i>
          </span>

          <span className="num" onClick={() => handleButtonClick("/")}>
            <i>/</i>
          </span>
          <span className="num" onClick={() => handleButtonClick("*")}>
            <i>*</i>
          </span>
          <span className="num" onClick={() => handleButtonClick("7")}>
            <i>7</i>
          </span>
          <span className="num" onClick={() => handleButtonClick("8")}>
            <i>8</i>
          </span>
          <span className="num" onClick={() => handleButtonClick("9")}>
            <i>9</i>
          </span>
          <span className="num" onClick={() => handleButtonClick("-")}>
            <i>-</i>
          </span>
          <span className="num" onClick={() => handleButtonClick("4")}>
            <i>4</i>
          </span>
          <span className="num" onClick={() => handleButtonClick("5")}>
            <i>5</i>
          </span>
          <span className="num" onClick={() => handleButtonClick("6")}>
            <i>6</i>
          </span>
          <span className="num " onClick={() => handleButtonClick("+")}>
            <i>+</i>
          </span>
          <span className="num " onClick={() => handleButtonClick("+")}>
            <i>.</i>
          </span>
          <span className="num" onClick={() => handleButtonClick("1")}>
            <i>1</i>
          </span>
          <span className="num" onClick={() => handleButtonClick("2")}>
            <i>2</i>
          </span>
          <span className="num" onClick={() => handleButtonClick("3")}>
            <i>3</i>
          </span>
          {/* <span className="num" onClick={() => handleButtonClick("0")}>
            <i>0</i>
          </span> */}
          <span className="num clear" onClick={() => handleButtonClick("C")}>
            <i>Reset</i>
          </span>

          <span className="num equal" onClick={() => handleButtonClick("=")}>
            <i>=</i>
          </span>
        </form>
      </div>
    </>
  );
}

export default SeriousCalculator

