import React, { Component } from 'react'
import ShoppingListIngredient from './ShoppingListIngredient'
import { List, Container, Header, Button } from 'semantic-ui-react'
import ApiMethods from '../API/ApiMethods'
import { Link } from 'react-router-dom'

export default class ShoppingList extends Component {

	state = {
		ingredientList: [{ quantity: 'loading', food: '', checked: false }]
	}

	toggleIngredient = (evt) => {
		const ingredientIndex = evt.target.id.split('-')[2];
		const updatedIngredients = this.state.ingredientList;
		updatedIngredients[ingredientIndex].checked = !this.state.ingredientList[ingredientIndex].checked;

		this.setState(() => {
			return { ingredientList: updatedIngredients }
		})
	}

	getAllActiveIngredients = () => {
		ApiMethods.getShoppingList()
					.then(ingredientsArray =>
						this.setState(() => {
							ingredientsArray.forEach(ingredient => {
								ingredient.checked = false;
							})
							return { ingredientList: ingredientsArray }
						})
					)
	}

	clearList = () => {
		ApiMethods.clearShoppingList()
			.then(() => {
				this.getAllActiveIngredients();
			})
	}

	componentDidMount() {
		this.getAllActiveIngredients();
	}

	render() {

		const allBoxesChecked = !(this.state.ingredientList.map(ingredient => ingredient.checked)).includes(false);

		const ingredientsNotEmpty = (this.state.ingredientList.length > 0);

		const button = (allBoxesChecked && ingredientsNotEmpty) ? { disabled: false, color: 'red' } : { disabled: true }

		return (
			<Container>
				<Header size="huge"></Header>
				<Header size="huge"></Header>
				<Header size="huge">Shopping List</Header>

				<Link to="/" color='white'>
					<Button icon='arrow left' content='Add more recipes' color='violet' labelPosition='left' />
				</Link>

				<List size='massive'>
					{this.state.ingredientList.map((ingredient, i) => {
						return <ShoppingListIngredient index={i} ingredient={ingredient} key={`ingredient-${ingredient.ingredientId}`}
							toggleIngredient={(evt) => { this.toggleIngredient(evt) }} />
					})}
				</List>

				<Button content='Clear shopping list'
					disabled={button.disabled} color={button.color}
					onClick={() => { this.clearList() }} />

			</Container>
		)
	}
}