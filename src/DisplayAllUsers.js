import React, { Component } from 'react';
import DisplaySingleUser from './DisplaySingleUser.js';


function DisplayAllUsers(props) {
    return (
        <ul>
            {props.inputArray.map(function(entry,index){
                return (
                    <li key = { index }> 
                        <DisplaySingleUser
                            username={entry['username']}
                            gamesPlayed={entry['gamesPlayed']}
                        >
                        </DisplaySingleUser> 
                    </li> 
                )
            })}
        </ul>
    )
}

export default DisplayAllUsers