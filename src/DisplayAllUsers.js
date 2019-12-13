import React, { Component } from 'react';
import DisplaySingleUser from './DisplaySingleUser.js';


function DisplayAllUsers(props) {
    return (
        <ul>
            {props.inputArray.map((entry, index) => {
                const gamesPlayed = props.showGamesPlayed
                    ? entry.gamesPlayed
                    : '/*'
                return (
                    <li key={index}> 
                        <DisplaySingleUser
                            username={entry.username}
                            gamesPlayed={gamesPlayed}
                        >
                        </DisplaySingleUser> 
                    </li> 
                )
            })}
        </ul>
    )
}

export default DisplayAllUsers