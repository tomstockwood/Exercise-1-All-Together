import React, { Component } from 'react';
import GenericButton from "./GenericButton";

function AddUserToState(props) { 
    return (
        <form onSubmit={props.addItem}>
            <input
                type="text"
                placeholder="Enter New Item"
                value={props.test}
                onChange={props.handleChange}
            />
            <GenericButton
                disabled={props.test === ''}
                value = {props.test}
            >
                Add
            </GenericButton>
        </form>
    )
}

export default AddUserToState