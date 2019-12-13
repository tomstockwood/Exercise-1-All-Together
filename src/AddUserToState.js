import React, { Component } from 'react';

function AddUserToState(props) { 
    return (
        <div>
          <form>
            <input 
              type="text" 
              placeholder="Enter first name"
              value={props.newFirstName}
              onChange={props.handleFirstNameChange}
            />
            <input 
              type="text" 
              placeholder="Enter last name"
              value={props.newLastName}
              onChange={props.handleLastNameChange}
            />
            <input 
              type="text" 
              placeholder="Enter username"
              value={props.newUsername}
              onChange={props.handleUsernameChange}
            />
          </form>
        </div>
    )
}

export default AddUserToState