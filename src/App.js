import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GenericButton from './GenericButton.js'
import DisplayAllUsers from './DisplayAllUsers.js'
import DisplaySingleUser from './DisplaySingleUser.js'


/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    test : 'nothing',
    users : [
      {
        firstName : 'Tom',
        lastName : '',
        username : 'toms',
        gamesPlayed : 0
      },
    ]
  };

  componentDidMount() {
    const { users } = this.state

    this.setState({
      users: [
        {
          ...users[0],
          firstName: 'hello'
        }
      ],
    })
  }

  addUserToState = event => {
    const { users } = this.state
    users.push({
      firstName : 'James',
      lastName : 'D',
      username : 'jd',
      gamesPlayed : 0
    })
    this.setState(prevState => ({users}))
  };

  testFunction = event => {
    this.setState(prevState => ({ test: 'new' }));
  };

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice - Test</h1>
        </header>
        
        {this.state.users[0]['firstName']}
        {this.state.test}
        
        <GenericButton 
          onClick={this.addUserToState}
        >
          Add user  
        </GenericButton>

        <DisplaySingleUser 
          username={this.state.users[0]['username']}
          gamesPlayed={this.state.users[0]['gamesPlayed']}
        >
        </DisplaySingleUser>

      </div>
    );
  }
}

export default App;
