import React, { Component } from 'react';
import GenericButton from "./GenericButton";

function AddUserToState(props) { 
    return (
        <form onSubmit={props.addItem}>
            <input
                type="text"
                placeholder="Enter New Item"
                value={props.value}
                onChange={props.handleChange}
            />
            <GenericButton
                disabled={props.value === ''}
                value = {props.value}
            >
                Add
            </GenericButton>
        </form>
    )
}

export default AddUserToState