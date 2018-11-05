import React, { Component } from 'react'
import { Container, SegmentGroup, Header} from 'semantic-ui-react';
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
				<Header size="huge"></Header>
				<Header size="huge"></Header>
				<Header size="huge">Your Cookbook</Header>
				<SegmentGroup>
					{this.state.recipeList.map(recipe => {
						return <MainRecipe recipe={recipe} key={recipe.recipeId} />
					})}
				</SegmentGroup>
			</Container>
		)
	}
}