import React, { useState } from 'react'

export default function Calculator() {
    let [showCalculation, setShowCalulation] = useState('')
    let [calculation, setCalulation] = useState(0)
    

    

    function addPlus(){
        setShowCalulation(showCalculation+'+')
        Number(showCalculation)

 
        console.log(calculation)
        console.log(showCalculation)
    }

    function sum() {

        let test = Number(showCalculation)
        console.log(test)


        setCalulation(calculation = parseInt(showCalculation))
        console.log(calculation)
        console.log(showCalculation)
    }

    return (
        <div>
            <div className="calculator">
                <input className="calculator-input" value={showCalculation}></input>
                <button className="light-grey b7">7</button>
                <button className="light-grey b8">8</button>
                <button className="light-grey b9">9</button>
                <button className="light-blue bdiv">÷</button>
                <button className="light-grey b4">4</button>
                <button className="light-grey b5">5</button>
                <button className="light-grey b6">6</button>
                <button className="light-blue bx">×</button>
                <button className="light-grey b1" onClick={() => setShowCalulation(showCalculation + '1')}>1</button>
                <button className="light-grey b2">2</button>
                <button className="light-grey b3">3</button>
                <button className="light-blue b-">-</button>
                <button className="light-grey b0">0</button>
                <button className="light-grey bdot">.</button>
                <button className="light-grey beq" onClick={() => sum()}>=</button>
                <button className="light-blue bpl" onClick={() => addPlus()}>+</button>
                <button className="light-blue bc">C</button>

            </div>

        </div>
    )
}
