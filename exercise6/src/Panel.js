import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import "./calculator.css";

const Panel = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [prevResult, setPrevResult] = useState(null);

  const handleClick = (buttonLabel) => {
    if (buttonLabel === "=") {
      calculateResult();
    } else if (buttonLabel === "C") {
      resetInput();
    } else {
      if (result !== "") {
        setPrevResult(result);
        setResult("");
        setInput(buttonLabel);
      } else {
        setInput(input + buttonLabel);
      }
    }
  };

  const calculateResult = () => {
    try {
      const finalResult = eval(
        prevResult !== null ? prevResult + input : input
      ).toString();
      setResult(finalResult);
      setPrevResult(null);
      setInput("");
    } catch (error) {
      setResult("Error");
    }
  };

  const resetInput = () => {
    setInput("");
    setResult("");
    setPrevResult("");
  };

  return (
    <div className="calculator">
      <Display
        className="display"
        value={result || input}
        onClick={handleClick}
      />
      <div className="buttons">
        <div className="button-row">
          <Button className="number" label="7" onClick={handleClick} />
          <Button className="number" label="8" onClick={handleClick} />
          <Button className="number" label="9" onClick={handleClick} />
          <Button className="operator" label="+" onClick={handleClick} />
        </div>
        <div className="button-row">
          <Button className="number" label="4" onClick={handleClick} />
          <Button className="number" label="5" onClick={handleClick} />
          <Button className="number" label="6" onClick={handleClick} />
          <Button className="operator" label="-" onClick={handleClick} />
        </div>
        <div className="button-row">
          <Button className="number" label="1" onClick={handleClick} />
          <Button className="number" label="2" onClick={handleClick} />
          <Button className="number" label="3" onClick={handleClick} />
          <Button className="operator" label="*" onClick={handleClick} />
        </div>
        <div className="button-row">
          <Button className="clear" label="C" onClick={handleClick} />
          <Button className="number" label="0" onClick={handleClick} />
          <Button className="equals" label="=" onClick={handleClick} />
          <Button className="operator" label="/" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Panel;
