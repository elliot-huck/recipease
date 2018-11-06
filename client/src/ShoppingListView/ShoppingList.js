import React, { Component } from 'react'
import ShoppingListIngredient from './ShoppingListIngredient'
import { List, Container, Header, Button } from 'semantic-ui-react'
import ApiMethods from '../API/ApiMethods'

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

	clearList = () => {
		ApiMethods.clearShoppingList()
			.then(() => {
				this.props.redirect();
			})
	}

	componentDidMount() {
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

	render() {

		const allBoxesChecked = !(this.state.ingredientList.map(ingredient => ingredient.checked)).includes(false);

		const button = (allBoxesChecked) ? { disabled: false, color: 'red' } : { disabled: true }

		return (
			<Container>
				<Header size="huge"></Header>
				<Header size="huge"></Header>
				<Header size="huge">Shopping List</Header>

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