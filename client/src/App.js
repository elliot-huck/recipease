import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './LoginView/Login';
import { Route, Redirect } from "react-router-dom";
import RegisterForm from './LoginView/RegisterForm';

class App extends Component {

  state = {
    loggedIn: false
  }

  login = () => {
    this.setState({loggedIn: true});
  }

  render() {

return (
  <React.Fragment>

        <Route exact path="/"
          render={() => {if(this.state.loggedIn) {return <h2>Welcome</h2>} else {return <Login login={() => {this.login()}} /> }} } />
        <Route path="/register"
          render={() => { if(this.state.loggedIn) {return <Redirect to="/" />} else return <RegisterForm login={() => {this.login()}} /> }} />
        <Route path="/list"
          render={() => { return <h2>Shopping List</h2> }} />
        <Route path="/add"
          render={() => { return <h2>New Recipe</h2> }} />

  </React.Fragment>
)

    // if (this.state.loggedIn) {
    //   return (<h2>Welcome</h2>)
    // } else {
    //   return (
    //     <div className="App">
    //       <Login login={() => this.login()}/>
    //     </div>
    //   )
    // }

  }
}

export default App;
