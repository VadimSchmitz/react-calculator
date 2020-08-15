import React from "react";
import "./index.css";
import "./FlexBox.css";

function App() {
  return (


    <div className='body'>
    
   
    <div className="wrapper">
      <div className="flex-row">
        <input className="calculator-input " type="number"></input>
      </div>

      <div className="number-wrapper">
        <div className="flex-row ">
          <button className="light-grey">7</button>
          <button className="light-grey">8</button>
          <button className="light-grey">9</button>
          <button className="light-blue">÷</button>
        </div>
        <div className="flex-row">
          <button className="light-grey">4</button>
          <button className="light-grey">5</button>
          <button className="light-grey">6</button>
          <button className="light-blue">×</button>
        </div>
        <div className="flex-row">
          <button className="light-grey">1</button>
          <button className="light-grey">2</button>
          <button className="light-grey">3</button>
          <button className="light-blue">-</button>
        </div>
        <div className="flex-row">
          <button className="light-grey">0</button>
          <button className="light-grey">.</button>
          <button className="light-grey">=</button>
          <button className="light-blue">+</button>
        </div>
        <div className="flex-row">
          <button className="caculator-button clear-button light-blue">
            C
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
