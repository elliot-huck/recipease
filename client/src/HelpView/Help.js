import React, { Component } from 'react'
import NavBar from '../Layout/NavBar';
import HelpPage from './HelpPage'

export default class Help extends Component {

	render() {
		return (
			<div>
				<NavBar />
				<HelpPage />
			</div>
		)
	}
}