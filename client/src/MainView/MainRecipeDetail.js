import React, { Component } from 'react'
import { Button, Header, Loader, Modal, List } from 'semantic-ui-react'
import ApiMethods from '../API/ApiMethods'

export default class MainRecipeDetail extends Component {

	state = {
		ingredientsList: []
	}

	componentDidMount() {
		ApiMethods.getRecipeIngredients(this.props.recipe.recipeId)
			.then(allIngredients => {
				this.setState({ingredientsList: allIngredients});
			})
	}

	render() {

		const ingredientsComponent = this.state.ingredientsList.length === 0 ?
			<Loader content='Loading' /> :
			<List>
				{this.state.ingredientsList.map(ing => {
					return <List.Item>{ing.quantity} {ing.food}</List.Item>
				})}
			</List>


		return (
			<Modal dimmer='inverted'
				trigger={<Button floated='right' color='violet' icon='list' content='See recipe details' labelPosition='left' />}>
				<Modal.Header>
					<Header size='huge'>{this.props.recipe.name}</Header>
					<em style={{ 'fontWeight': 'normal' }}>{this.props.recipe.source}</em>
				</Modal.Header>

				<Modal.Content>
					<Modal.Description>
						<Header size='large'>Ingredients</Header>
						{ingredientsComponent}
					</Modal.Description>
				</Modal.Content>
			</Modal>
		)
	}
}