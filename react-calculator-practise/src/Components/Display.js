import React from 'react'

function Display(props) {
    return ( 
        <div className="calculator__display">{props.onDisplay}</div>
    )
}

export default Display
