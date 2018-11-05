import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, SegmentGroup, Header, Button } from 'semantic-ui-react';
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
					return { recipeList: recipesArray }
				})
			)
	}

	render() {
		return (
			<Container>
				<Header size="huge"></Header>
				<Header size="huge"></Header>
				<Header size="huge">Your Cookbook</Header>


				<Link to="/new" color='white'>
					<Button icon='plus' content='Add a recipe' color='green' labelPosition='left' />
				</Link>


				<SegmentGroup>
					{this.state.recipeList.map(recipe => {
						return <MainRecipe recipe={recipe} key={recipe.recipeId} />
					})}
				</SegmentGroup>
			</Container>
		)
	}
}