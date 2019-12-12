import React, { Component } from 'react';
import GenericButton from "./GenericButton";

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

          <GenericButton 
            disabled={props.test === ''}
            onClick={props.addFirstName}
          >
            Add new first name  
          </GenericButton>
        </div>
    )
}

export default AddUserToState