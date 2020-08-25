import React from "react";

export default function CalculatorTotal({calculation}) {
  return (
      <input className='calculator-input' value={calculation} readOnly></input>
  );
}
