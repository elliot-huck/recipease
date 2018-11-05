import React, { Component } from 'react'
import MainCookbook from './MainCookbook';
import NavBar from '../Layout/NavBar';

export default class Main extends Component {


	render() {
		return (
			<div>
				<NavBar />
				<MainCookbook />
			</div>
		)
	}
}