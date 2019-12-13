import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GenericButton from './GenericButton.js'
import DisplayAllUsers from './DisplayAllUsers.js'
import DisplaySingleUser from './DisplaySingleUser.js'
import AddUserToState from './AddUserToState.js'


/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    test : '',
    value : '',
    test2 : [],
    ShowHideButtonText : 'Hide the Number of Games Played',
    newFirstName : '',
    newLastName : '',
    newUsername : '',
    users : [
      {
        firstName : 'Tom',
        lastName : '',
        username : 'toms',
        gamesPlayed : 0
      },
    ],
    gamesPlayedStore : [0]
  };

  // componentDidMount() {
  //   const { users } = this.state

  //   this.setState({
  //     users: [
  //       {
  //         ...users[0],
  //         firstName: 'hello'
  //       }
  //     ],
  //   })
  // }

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
    // if (this.state.showGamesPlayed) { 
    //   let { users } = this.state
    //   users = users.map((entry, index) => {return({
    //     ...entry,
    //     gamesPlayed : gamesPlayedStore[index] 
    //   })})
    //   this.setState({ 
    //     ShowHideButtonText: 'Hide the Number of Games Played',
    //     //gamesPlayedStore : gamesPlayedArray,
    //     users : users
    //   })
    // } else {
    //   let { users } = this.state
    //   users = users.map(entry => {return({
    //     ...entry,
    //     gamesPlayed : '/*' 
    //   })})

    //   this.setState({ 
    //     ShowHideButtonText: 'Show the Number of Games Played',
    //     //gamesPlayedStore : gamesPlayedArray,
    //     users : users
    //   })
    // }
  };

  addFirstName = event => {
    const { newUser } = this.state
    newUser['firstName'] = this.state.value
    this.setState(prevState => ({newUser}))
  };

  addLastName = event => {
    const { newUser } = this.state
    newUser['lastName'] = 'Browne'
    this.setState(() => ({ newUser }))
  };

  addUsername = event => {
    const { newUser } = this.state
    newUser['username'] = '__DB__'
    this.setState(() => ({ newUser }))
  };

  handleChange = event => {
    this.setState({ test: event.target.value });
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

  // addItem = event => {
  //   event.preventDefault();
  //   this.setState(oldState => ({
  //     test2: [...oldState.test2, this.state.test],
  //   }));
  // };

  // testFunction = event => {
  //   this.setState(prevState => ({ test: 'new' }));
  // };

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice - Test??!</h1>
        </header>

        <AddUserToState
          test={this.state.test}
          newFirstName={this.state.newFirstName}
          newLastName={this.state.newLastName}
          newUsername={this.state.newUsername}
          addFirstName={this.addFirstName}
          handleChange={this.handleChange}
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
