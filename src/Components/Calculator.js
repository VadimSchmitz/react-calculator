import React, { useState } from "react";
import CalculatorKeyPad from "./CalculatorKeyPad";

export default function Calculator() {
  const [calculation, setCalulation] = useState("");
  
  const onClick = (button) => {
    if (button === "=") {
      setCalulation(eval(calculation));
    } else if (button === "C") {
      setCalulation("");
    } else {
      setCalulation(calculation + button);
    }
  };

  return (
    <div>
      <CalculatorKeyPad onClick={onClick} calculation={calculation} />
    </div>
  );
}
