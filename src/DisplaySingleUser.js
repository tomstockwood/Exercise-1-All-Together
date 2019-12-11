import React from 'react';

function DisplaySingleUser(props) {
    return (
        <div>
            {props.username} played {props.gamesPlayed} games.
        </div>
    )
}

export default DisplaySingleUser