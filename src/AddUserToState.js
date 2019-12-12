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