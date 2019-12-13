import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GenericButton from './GenericButton.js'
import DisplayAllUsers from './DisplayAllUsers.js'
import AddUserToState from './AddUserToState.js'


/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    newFirstName : '',
    newLastName : '',
    newUsername : '',
    showGamesPlayed : true,
    users : [
      {
        firstName : 'Tom',
        lastName : '',
        username : 'toms',
        gamesPlayed : 0
      },
    ],
  };

  addUser = event => {
    const { users } = this.state
    const usernameArray = this.state.users.map(
      entry => {return(entry.username)}
    ) 
    
    if (usernameArray.includes(this.state.newUsername)) {
      window.alert('That username is already in use')
    }

    else {
      users.push({
        firstName : this.state.newFirstName,
        lastName : this.state.newLastName,
        username : this.state.newUsername,
        gamesPlayed : 0
      })

      const gamesPlayedArray = this.state.users.map(
        entry => {return(entry.gamesPlayed)}
      )

      this.setState(prevState => ({users,
        gamesPlayedStore : gamesPlayedArray
      }))
    }
  };

  toggleShowGamesPlayed = () => {
    this.setState({
      showGamesPlayed: !this.state.showGamesPlayed
    })
  };

  handleFirstNameChange = event => {
    this.setState({ newFirstName: event.target.value });
  };
  
  handleLastNameChange = event => {
    this.setState({ newLastName: event.target.value });
  };
  
  handleUsernameChange = event => {
    this.setState({ newUsername: event.target.value });
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Exercise 1 - All Together</h1>
        </header>

        <AddUserToState
          newFirstName={this.state.newFirstName}
          newLastName={this.state.newLastName}
          newUsername={this.state.newUsername}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
          handleUsernameChange={this.handleUsernameChange}
        >
        </AddUserToState>

        <GenericButton 
          disabled={
            (this.state.newFirstName === ''
            || this.state.newLastName === ''
            || this.state.newUsername === ''
            )
          }
          onClick={this.addUser}
        >
          Add 
        </GenericButton>

        <DisplayAllUsers
          showGamesPlayed={this.state.showGamesPlayed}
          inputArray={this.state.users}
        >
        </DisplayAllUsers>
      
        <GenericButton
          onClick={this.toggleShowGamesPlayed}
        >
          {this.state.showGamesPlayed
            ? 'Hide the Number of Games Played'
            : 'Show the Number of Games Played'}
        </GenericButton>

      </div>
    );
  }
}

export default App;
