import React, { useState } from "react";
import "./FunCalculator.css";
import { toast } from "react-toastify";
import ButtonLoader from "../ButtonLoader/ButtonLoader";

function FunCalculator() {
  const [input, setInput] = useState("");
  const [apiResult, setApiResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //generate random number for meme object ❎
  const randomIndex = Math.floor(Math.random() * 10);
  const handleButtonClick = (value) => {
   
    if (value === "=") {
      setIsLoading(true);
      switch (input) {
        // Make API call for Joke api (😎)
        case "112":
          fetch(import.meta.env.VITE_API_URL_Jokes)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setApiResult(data.setup);
              if (data.setup) {
                setInput(data.setup);
              }
            })
            .catch((error) => {
              setApiResult("API Error");
              setInput("API Error");
            })
            .finally(() => {
              setIsLoading(false);
            });
          break;

        // Make API call for meme api (😎)
        case "172":
          fetch(import.meta.env.VITE_API_URL_Memes)
            .then((response) => response.json())
            .then((data) => {
              setApiResult(data.data.memes[randomIndex].name);
              console.log(data);
              if (data.data.memes[randomIndex].name) {
                setInput(data.data.memes[randomIndex].name);
              }
            })
            .catch((error) => {
              setApiResult("API Error");
              toast.error("Something went wrong 😥");
            })
            .finally(() => {
              setIsLoading(false);
            });
          break;

        // Make API call for Movies api (📹)
        case "753":
          fetch(import.meta.env.VITE_API_URL_Movie)
            .then((response) => response.json())
            .then((data) => {
              setApiResult(data.Title);
              if (data.Title) {
                setInput(data.Title);
              }
            })
            .catch((error) => {
              setApiResult("API Error");
              toast.error("Something went wrong 😥");
            })
            .finally(() => {
              setIsLoading(false);
            });
          break;
        default:
          setApiResult(null);
      }
    } else if (value === "C") {
      setInput("");
      setIsLoading(false);
      setApiResult(null);
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

          <span
            className={`num equal ${isLoading ? "loading" : ""}`}
            onClick={() => handleButtonClick("=")}
          >
            {/* set loading when busy and disable button (🚦) */}
            {isLoading ? <ButtonLoader /> : "Send"}
          </span>
        </form>
      </div>
    </>
  );
}

export default FunCalculator;
