import React, { Component } from 'react'
import LoginForm from './LoginForm';
import './Login.css'

export default class Login extends Component {

	render() {
		return <LoginForm login={this.props.login}/>
	}
}