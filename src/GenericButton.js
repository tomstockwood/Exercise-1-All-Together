import React, { Component} from 'react'

function GenericButton(props) {
    return (
        <button 
            onClick={props.onClick}
            disabled={props.disabled}>
            {props.children}
        </button>
    )
    
}

export default GenericButton

