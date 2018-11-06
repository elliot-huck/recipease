import React, { Component } from 'react'
import NavBar from '../Layout/NavBar';
import ShoppingList from './ShoppingList';
import {Redirect} from 'react-router-dom'

export default class List extends Component {

	state = {
		listCleared: false,
	}

	setListCleared = () => {
		this.setState({ listCleared: true })
	}

	render() {

		let pageComponent = (<ShoppingList redirect={() => { this.setListCleared() }} />);
		if (this.state.listCleared) {
			pageComponent = (<Redirect to="/" />)
		}
		return (
			<div>
				<NavBar />
				{pageComponent}
			</div>
		)
	}
}