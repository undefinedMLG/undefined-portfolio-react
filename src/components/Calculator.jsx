import React, { useState } from "react";
import "./styles/Calculator.scss";
import Buttons from "./Button";
import Display from "./Display";

function Calculator() {
  const [input, setInput] = useState("")
  const [answer, setAnswer] = useState("")
  
  // input
  const inputHandler = (e) => {
    if(answer === "Invalid Input!") return
    let val = e.target.innerHTML

    let str = input + val
    if (str.length > 14) return

    if(answer !== "") {
      setInput(answer + val);
      setAnswer("")
    } else setInput(str);
  }

  return(
    <div className="container">
      <div className="main">
        <Display input={input} setInput={setInput} answer={setAnswer}/>
        <Buttons
        inputHandler={inputHandler}
        />
      </div>
    </div>
  )

}

export default Calculator