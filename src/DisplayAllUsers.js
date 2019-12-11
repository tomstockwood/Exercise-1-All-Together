import React, { Component } from 'react';

function DisplayAllUsers(props) {
    return (
        <ul>
              {props.inputArray.map(function(entry,index){
                return <li key = { index }> {entry} </li> //Returns a list of all the entries in a given array
            }
            )}
        </ul>
    )
}

export default DisplayAllUsers