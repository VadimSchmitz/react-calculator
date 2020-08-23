import React from 'react'

export default function CalculatorKeyPad({onClick}) {
    return (
        <div>
        <button className="light-grey b7" name='7' onClick={e=>onClick(e.target.name)}>7</button>
        <button className="light-grey b8" name='8' onClick={e=>onClick(e.target.name)}>8</button>
        <button className="light-grey b9" name='9' onClick={e=>onClick(e.target.name)}>9</button>
        <button className="light-grey b4" name='4' onClick={e=>onClick(e.target.name)}>4</button>
        <button className="light-grey b5" name='5' onClick={e=>onClick(e.target.name)}>5</button>
        <button className="light-grey b6" name='6' onClick={e=>onClick(e.target.name)}>6</button>
        <button className="light-blue bx" name='*' onClick={e=>onClick(e.target.name)}>*</button>
        <button className="light-grey b1" name='1' onClick={e=>onClick(e.target.name)}>1</button>
        <button className="light-grey b2" name='2' onClick={e=>onClick(e.target.name)}>2</button>
        <button className="light-grey b3" name='3' onClick={e=>onClick(e.target.name)}>3</button>
        <button className="light-blue b-" name='-' onClick={e=>onClick(e.target.name)}>-</button>
        <button className="light-grey b0" name='0' onClick={e=>onClick(e.target.name)}>0</button>
        <button className="light-grey bdot" name='.' onClick={e=>onClick(e.target.name)}>.</button>
        <button className="light-grey beq" name='=' onClick={e=>onClick(e.target.name)}>=</button>
        <button className="light-blue bpl" name='+' onClick={e=>onClick(e.target.name)}>+</button>
        <button className="light-blue bc" name='C' onClick={e=>onClick(e.target.name)}>C</button>
        <button className="light-blue bdiv" name='/' onClick={e=>onClick(e.target.name)}>/</button>
        </div>
    )
}


