import React, { Component } from 'react'
import NavBar from '../Layout/NavBar';
import ShoppingList from './ShoppingList';

export default class List extends Component {

	render() {
		return (
			<div>
				<NavBar />
				<ShoppingList />
			</div>
		)
	}
}