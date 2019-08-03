import React, { Component } from 'react'
import { Form, Grid, Header, Container, Button, GridColumn } from 'semantic-ui-react'
import NewRecipeIngredient from './NewRecipeIngredient';
import ApiMethods from '../API/ApiMethods';
import { Link } from 'react-router-dom';
import RecipeFetcher from './NewRecipeFetcher';

export default class NewRecipeForm extends Component {

	state = {
		name: "",
		source: "",
		isActive: false,
		isFavorite: false,
		categoryId: 7,
		ingredients: [
			{}
		]
	}

	// Updates state as input typed into either field
	handleChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	}

	handleIngredientChange = (evt) => {
		const property = evt.target.id.split('-')[0];
		const index = evt.target.id.split('-')[1];
		const updatedIngredients = this.state.ingredients;
		updatedIngredients[index][property] = evt.target.value;
		this.setState({ ingredients: updatedIngredients });
	}

	addIngredient = (evt) => {
		evt.preventDefault();
		const newIngredients = this.state.ingredients;
		newIngredients.push({});
		this.setState({ ingredients: newIngredients });
	}

	removeIngredient = (evt) => {
		evt.preventDefault();
		const index = evt.target.id.split('-')[1];
		const remainingIngredients = this.state.ingredients;
		remainingIngredients.splice(index, 1);
		this.setState(() => {
			return { ingredients: remainingIngredients }
		});
	}

	handleSubmit = (evt) => {

		const newRecipe = this.state;
		ApiMethods.addNewRecipe(newRecipe)
			.then(() => {
				this.props.redirect();
			})

	}

	getRecipeByUrl = (evt, recipeUrl) => {
		evt.preventDefault();
		// Recipe example with strong tags https://pinchofyum.com/feel-good-zucchini-muffins
		// Recipe example without strong tags https://pinchofyum.com/korean-bbq-burrito

		// Checks if url matches pinchofyum regex
		const fromPinchOfYum = Boolean(/pinchofyum/.exec(recipeUrl));
		if (fromPinchOfYum) {
			RecipeFetcher.getPinchOfYumRecipe(recipeUrl).then((newRecipe) => {
				this.setState(newRecipe);
			});
		} else {
			alert("Recipe URL not supported");
		}
	}

	render() {
		return (
			<Container>
				<Header size="huge"></Header>
				<Header size="huge"></Header>
				<Form onSubmit={(evt) => this.handleSubmit(evt)}>
					<Grid>

						<Grid.Row>
							<Grid.Column width={1}></Grid.Column>
							<Grid.Column width={6}>
								<Header size='huge'>Add a New Recipe</Header>
							</Grid.Column>

							<GridColumn width={8}>
								<Link to="/">
									<Button floated='right' icon='x' color='red' circular size='large' />
								</Link>
							</GridColumn>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column width={2}></Grid.Column>
							<Grid.Column width={8}>
								<Form.Input required id="name" label='Recipe Name' placeholder='New Recipe' value={this.state.name} size='massive'
									onChange={(evt) => { this.handleChange(evt) }} />
							</Grid.Column>

						</Grid.Row>

						<Grid.Row>
							<Grid.Column width={2}></Grid.Column>
							<Grid.Column width={10}>
								<Form.Input id="source" label='Source' placeholder="e.g.  Favorite Cookbook, pg. 53"
									action={<Button content='Get recipe from URL' color='violet'
										onClick={(evt) => this.getRecipeByUrl(evt, this.state.source)} />}
									onChange={(evt) => { this.handleChange(evt) }} />

							</Grid.Column>
							{/* <Grid.Column width={4}>

							</Grid.Column> */}
						</Grid.Row>

						{this.state.ingredients.map((element, i) => {
							return <NewRecipeIngredient
								key={i}
								ingredient={element}
								index={i}
								handleChange={(evt) => { this.handleIngredientChange(evt) }}
								delete={(evt) => { this.removeIngredient(evt) }} />
						})}

						<Grid.Row>
							<Grid.Column width={2}></Grid.Column>
							<Grid.Column width={12}>

								<Button floated='right' content='Add ingredient' icon='plus' color='green' labelPosition='left'
									onClick={(evt) => { this.addIngredient(evt) }} />
								{/* <Button type='submit' floated='right' content='Save recipe' icon='save' color='violet' labelPosition='left' /> */}
							</Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column width={2}></Grid.Column>
							<Grid.Column width={12}>
								<Button type='submit' floated='right' content='Save recipe' icon='save' color='violet' labelPosition='left' />
							</Grid.Column>
						</Grid.Row>

					</Grid>

				</Form>
			</Container>
		)
	}
}