import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, SegmentGroup, Header, Button } from 'semantic-ui-react';
import MainRecipe from './MainRecipe';
import ApiMethods from '../API/ApiMethods';

export default class MainCookbook extends Component {

	state = {
		recipeList: []
	}

	toggleRecipe = (evt) => {
		// evt.preventDefault();
		const recipeId = evt.target.id.split('-')[1];
		const recipeIndex = evt.target.id.split('-')[2];
		ApiMethods.toggleRecipe(recipeId)
			.then(() => {
				this.setState(oldState => {
					const activatedRecipe = oldState.recipeList;
					activatedRecipe[recipeIndex].isActive = !(oldState.recipeList[recipeIndex].isActive);
					return { recipeList: activatedRecipe };
				})
			})
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
					<Button icon='plus' content='New recipe' color='violet' labelPosition='left' />
				</Link>

				<Link to="/list" color='white'>
					<Button icon='cart' floated='right' content='See shopping list' color='violet' labelPosition='right' />
				</Link>


				<SegmentGroup>
					{this.state.recipeList.map((recipe, i) => {
						return <MainRecipe index={i} recipe={recipe} key={recipe.recipeId} toggleRecipe={(evt) => { this.toggleRecipe(evt) }} />
					})}
				</SegmentGroup>
			</Container>
		)
	}
}