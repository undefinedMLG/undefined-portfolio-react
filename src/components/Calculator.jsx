import React, { useState } from "react";
import { round, evaluate } from "mathjs";
import "./styles/Calculator.scss";
import Buttons from "./Button";
import Display from "./Display";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
import Navbar from "./Navbar";


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

  // Clear screen
  const clearInput = () => {
    setInput("")
    setAnswer("")
  }

  // remove last character
  const backspace = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
  };

  // Change plus minus
  const changePlusMinus = () => {
    //need to change for answer
    if (answer === "Invalid Input!!") return;
    else if (answer !== "") {
      let ans = answer.toString();
      if (ans.charAt(0) === "-") {
        let plus = "+";
        setInput(plus.concat(ans.slice(1, ans.length)));
      } else if (ans.charAt(0) === "+") {
        let minus = "-";
        setInput(minus.concat(ans.slice(1, ans.length)));
      } else {
        let minus = "-";
        setInput(minus.concat(ans));
      }
      setAnswer("");
    } else {
      if (input.charAt(0) === "-") {
        let plus = "+";
        setInput((prev) => plus.concat(prev.slice(1, prev.length)));
      } else if (input.charAt(0) === "+") {
        let minus = "-";
        setInput((prev) => minus.concat(prev.slice(1, prev.length)));
      } else {
        let minus = "-";
        setInput((prev) => minus.concat(prev));
      }
    }
  };

  const calculateAns = () => {
    if (input === "") return;
    let result = 0;
    let finalexpression = input;
    //  finalexpression = input.replaceAll("^", "**");  //for eval()
    finalexpression = finalexpression.replaceAll("x", "*");
    finalexpression = finalexpression.replaceAll("÷", "/");

    try {
      result = evaluate(finalexpression); //mathjs
    } catch (error) {
      result =
        "Invalid Input!"
    }
    isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
  }


  // THEME
  const [isToggled, setIsToggled] = useState(false)
  const [theme, setTheme] = useState('light');
  
  const onToggle = () => {
    setIsToggled(!isToggled);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };




  return(
  <> 
  <Navbar/>
    <div className={"container-calc " + theme} >
      <div className="switch" >
        <SunIcon/>
        <label className="toggle-switch">
          <input type="checkbox" checked={isToggled} onChange={onToggle} />
          <span className="switch" />
        </label>
        <MoonIcon/>  
      </div>
      <div className="main">
        <Display input={input} setInput={setInput} answer={answer}/>
        <Buttons
        inputHandler={inputHandler}
        clearInput={clearInput}
        backspace={backspace}
        changePlusMinus={changePlusMinus}
        calculateAns={calculateAns}
        />
      </div>
    </div>
    </>
   
  )

}

export default Calculator