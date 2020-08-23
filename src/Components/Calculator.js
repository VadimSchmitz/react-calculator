import React, { useState } from "react";
import CalculatorTotal from "./CalculatorTotal";
import CalculatorKeyPad from "./CalculatorKeyPad";

export default function Calculator() {
  const [calculation, setCalulation] = useState("");

  const onClick = (button) => {
    
    if(button === "="){
        setCalulation(eval(calculation))
    }

    else if(button === "C"){
        setCalulation('')}

    else {
    setCalulation(calculation + button);
    }
  };

  console.log(calculation)

  return (
    <div>
      <CalculatorTotal total={calculation}/>
      <CalculatorKeyPad onClick={onClick} />
    </div>
  );
}
