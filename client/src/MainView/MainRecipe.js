import React, { Component } from 'react'
import { Segment, Button } from 'semantic-ui-react';
import RecipeDetails from './MainRecipeDetail'

export default class MainRecipe extends Component {

	render() {

		const segmentProps = this.props.recipe.isActive ?
			{ inverted: true, color: 'blue', tertiary: true } :
			{ inverted: false, tertiary: false }

		const buttonProps = this.props.recipe.isActive ?
			{ activate: false, icon: 'minus', content: 'Remove from menu', size: 'medium' } :
			{ activate: true, icon: 'plus', content: 'Add to menu', size: 'medium' }

		return (
			<Segment size="large" id={`recipe-${this.props.recipe.recipeId}`}
				inverted={segmentProps.inverted} color={segmentProps.color} tertiary={segmentProps.tertiary} >
				<strong>{this.props.recipe.name}</strong>&emsp;<em>{this.props.recipe.source}</em>



				<Button id={`button-${this.props.recipe.recipeId}-${this.props.index}`}
					toggle active={buttonProps.activate}
					floated='right' size={buttonProps.size}
					icon={buttonProps.icon} labelPosition='left'
					content={buttonProps.content}
					onClick={this.props.toggleRecipe} />

				<RecipeDetails recipe={this.props.recipe} />

			</Segment>
		)
	}
}