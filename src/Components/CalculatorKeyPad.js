import React from 'react'
import "../index.css";
import CalculatorTotal from './CalculatorTotal'

export default function CalculatorKeyPad({onClick, calculation}) {
    return (
        <div className='calculator'>
            <CalculatorTotal calculation={calculation}/>
            
            <button className="light-grey button-1" name='1' onClick={e=>onClick(e.target.name)}>1</button>
            <button className="light-grey button-2" name='2' onClick={e=>onClick(e.target.name)}>2</button>
            <button className="light-grey button-3" name='3' onClick={e=>onClick(e.target.name)}>3</button>
            <button className="light-grey button-4" name='4' onClick={e=>onClick(e.target.name)}>4</button>
            <button className="light-grey button-5" name='5' onClick={e=>onClick(e.target.name)}>5</button>
            <button className="light-grey button-6" name='6' onClick={e=>onClick(e.target.name)}>6</button>
            <button className="light-grey button-7" name='7' onClick={e=>onClick(e.target.name)}>7</button>
            <button className="light-grey button-8" name='8' onClick={e=>onClick(e.target.name)}>8</button>
            <button className="light-grey button-9" name='9' onClick={e=>onClick(e.target.name)}>9</button>
            <button className="light-grey button-0" name='0' onClick={e=>onClick(e.target.name)}>0</button>
            <button className="light-blue button-multiply" name='*' onClick={e=>onClick(e.target.name)}>*</button>
            <button className="light-blue button-minus" name='-' onClick={e=>onClick(e.target.name)}>-</button>
            <button className="light-grey button-equals" name='=' onClick={e=>onClick(e.target.name)}>=</button>
            <button className="light-blue button-plus" name='+' onClick={e=>onClick(e.target.name)}>+</button>
            <button className="light-blue button-clear" name='C' onClick={e=>onClick(e.target.name)}>C</button>
            <button className="light-blue button-divide" name='/' onClick={e=>onClick(e.target.name)}>/</button>            
            <button className="light-grey button-dot" name='.' onClick={e=>onClick(e.target.name)}>.</button>
        </div>
    )
}


