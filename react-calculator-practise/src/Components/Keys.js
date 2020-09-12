import React from 'react'

function Keys(props) {
    return (
        <div className="calculator__keys">
            <button className="special-keys" onClick={()=>{props.onKeyPress('clear') }}>AC</button>
            <button className="special-keys" onClick={()=>{props.onKeyPress('+-') }}>±</button>
            <button className="special-keys" onClick={()=>{props.onKeyPress('%') }}>%</button>
            <button className="operators" onClick={()=>{props.onKeyPress('/') }}>÷</button>
            <button className="numbers" onClick={()=>{props.onKeyPress('7') }}>7</button>
            <button className="numbers" onClick={()=>{props.onKeyPress('8') }}>8</button>
            <button className="numbers" onClick={()=>{props.onKeyPress('9') }}>9</button>
            <button className="operators" onClick={()=>{props.onKeyPress('*') }}>x</button>
            <button className="numbers" onClick={()=>{props.onKeyPress('4') }}>4</button>
            <button className="numbers" onClick={()=>{props.onKeyPress('5') }}>5</button>
            <button className="numbers" onClick={()=>{props.onKeyPress('6') }}>6</button>
            <button className="operators" onClick={()=>{props.onKeyPress('-') }}>-</button>
            <button className="numbers" onClick={()=>{props.onKeyPress('1') }}>1</button>
            <button className="numbers" onClick={()=>{props.onKeyPress('2') }}>2</button>
            <button className="numbers" onClick={()=>{props.onKeyPress('3') }}>3</button>
            <button className="operators" onClick={()=>{props.onKeyPress('+') }}>+</button>
            <button className="numbers null" onClick={()=>{props.onKeyPress('0') }}>0</button>
            <button className="numbers" onClick={()=>{props.onKeyPress('.') }}>.</button>
            <button className="operators" onClick={()=>{props.onKeyPress('=') }}>=</button>
        </div>
    )
}

export default Keys
