import React, { Component } from 'react'
import { Container, SegmentGroup } from 'semantic-ui-react';
import MainRecipe from './MainRecipe';
import ApiMethods from '../API/ApiMethods';

export default class MainCookbook extends Component {

	state = {
		recipeList: []
	}

	componentDidMount() {
		ApiMethods.getUserRecipes()
			.then(recipesArray =>
				this.setState(() => {
					return {recipeList: recipesArray}
				})
			)
	}

	render() {
		return (
			<Container>
				<SegmentGroup>
					{this.state.recipeList.map(recipe => {
						return <MainRecipe recipe={recipe} key={recipe.recipeId} />
					})}
				</SegmentGroup>
			</Container>
		)
	}
}