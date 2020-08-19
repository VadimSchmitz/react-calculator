import React, { useState } from 'react'

export default function Calculator() {
    let [calculation, setCalulation] = useState('')

    
    function sum() {
        setCalulation(eval(calculation))
   
    }

    return (
        <div>
            <div className="calculator">
                <input className="calculator-input" value={calculation}></input>
                <button className="light-grey b7" onClick={() => setCalulation(calculation + '7')}>7</button>
                <button className="light-grey b8" onClick={() => setCalulation(calculation + '8')}>8</button>
                <button className="light-grey b9" onClick={() => setCalulation(calculation + '9')}>9</button>
                <button className="light-blue bdiv" onClick={() => setCalulation(calculation + '/')}>/</button>
                <button className="light-grey b4" onClick={() => setCalulation(calculation + '1')}>4</button>
                <button className="light-grey b5" onClick={() => setCalulation(calculation + '4')}>5</button>
                <button className="light-grey b6" onClick={() => setCalulation(calculation + '6')}>6</button>
                <button className="light-blue bx" onClick={() => setCalulation(calculation + '*')}>*</button>
                <button className="light-grey b1" onClick={() => setCalulation(calculation + '1')}>1</button>
                <button className="light-grey b2" onClick={() => setCalulation(calculation + '2')}>2</button>
                <button className="light-grey b3" onClick={() => setCalulation(calculation + '3')}>3</button>
                <button className="light-blue b-" onClick={() => setCalulation(calculation + '-')}>-</button>
                <button className="light-grey b0" onClick={() => setCalulation(calculation + '0')}>0</button>
                <button className="light-grey bdot" onClick={() => setCalulation(calculation + '.')}>.</button>
                <button className="light-grey beq" onClick={() => sum()}>=</button>
                <button className="light-blue bpl" onClick={() => setCalulation(calculation + '.')}>+</button>
                <button className="light-blue bc" onClick={() => setCalulation(calculation = '')}>C</button>

            </div>

        </div>
    )
}
