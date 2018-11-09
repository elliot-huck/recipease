import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './LoginView/Login';
import { Route } from "react-router-dom";
import RegisterForm from './LoginView/RegisterForm';
import Main from './MainView/Main';
import NewRecipe from './NewRecipeView/NewRecipe';
import List from './ShoppingListView/List';
import Help from './HelpView/Help';
import NavBar from './Layout/NavBar';

export default class App extends Component {

  state = {
    loggedIn: false
  }

  login = () => {
    this.setState({ loggedIn: true });
  }

  logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    this.setState({ loggedIn: false });
  }

  componentDidMount() {
    const authenticatedUser = sessionStorage.getItem("AuthToken") !== null;
    if (authenticatedUser) {
      this.setState({ loggedIn: true })
    }
  }

  render() {

    const userPages = (<React.Fragment>
      <div>
        <NavBar />
        <Route exact path="/" render={() => <Main />} />
        <Route path="/new" render={() => <NewRecipe />} />
        <Route path="/list" render={() => <List />} />
        <Route path="/help" render={() => <Help />} />
      </div>
    </React.Fragment>);

    const loginAndRegister = (<React.Fragment>
      <Route exact path="/" render={() => <Login login={() => { this.login() }} />} />
      <Route path="/register" render={() => <RegisterForm login={() => { this.login() }} />} />
    </React.Fragment>);

    return this.state.loggedIn ? userPages : loginAndRegister;

  }
}