import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react';

export default class MainRecipe extends Component {

	render() {
		return (
			<Segment size="large" id={`recipe-${this.props.recipe.recipeId}`}>
				{this.props.recipe.name}
			</Segment>
		)
	}
}