import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import NewRecipeForm from './NewRecipeForm'

export default class NewRecipe extends Component {

	state = {
		formSubmitted: false,
	}

	submitRecipe = () => {
		this.setState({ formSubmitted: true })
	}

	render() {
		let pageComponent = (<NewRecipeForm redirect={() => { this.submitRecipe() }} />);
		if (this.state.formSubmitted) {
			pageComponent = (<Redirect to="/" />)
		}
		return pageComponent
	}
}