import React from "react";

export default function CalculatorTotal({ total }) {
  return (
      <input className='calculator-input' value={total} readOnly></input>
  );
}
