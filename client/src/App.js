import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './LoginView/Login';

class App extends Component {

  state = {
    loggedIn: false
  }

  login = () => {
    this.setState({loggedIn: true});
  }

  render() {

    if (this.state.loggedIn) {
      return (<h2>Welcome</h2>)
    } else {
      return (
        <div className="App">
          <Login login={() => this.login()}/>
        </div>
      )
    }

  }
}

export default App;
