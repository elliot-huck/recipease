import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import NewRecipeForm from './NewRecipeForm'

export default class NewRecipe extends Component {

	state = {
		formSubmitted: false,
	}

	submitRecipe = () => {
		this.setState({formSubmitted: true})
	}

	render() {
		if (this.state.formSubmitted) {
			return ( <Redirect to="/" /> )
		} else {
			return ( <NewRecipeForm redirect={() => {this.submitRecipe()}} /> )
		}
	}
}