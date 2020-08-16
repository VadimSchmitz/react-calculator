import React from "react";
import "./index.css";



function App() {
  return (
    <div className='body'>
      <div className="calculator">
        <input className="calculator-input" type="number"></input>
        <button className="light-grey b7">7</button>
        <button className="light-grey b8">8</button>
        <button className="light-grey b9">9</button>
        <button className="light-blue bdiv">÷</button>
        <button className="light-grey b4">4</button>
        <button className="light-grey b5">5</button>
        <button className="light-grey b6">6</button>
        <button className="light-blue bx">×</button>
        <button className="light-grey b1">1</button>
        <button className="light-grey b2">2</button>
        <button className="light-grey b3">3</button>
        <button className="light-blue b-">-</button>
        <button className="light-grey b0">0</button>
        <button className="light-grey bdot">.</button>
        <button className="light-grey beq">=</button>
        <button className="light-blue bpl">+</button>
        <button className="light-blue bc">C</button>
      </div>
    </div>
  );
}

export default App;
