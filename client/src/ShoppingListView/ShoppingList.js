import React, { Component } from 'react'
import ShoppingListIngredient from './ShoppingListIngredient'
import { List, Container, Header } from 'semantic-ui-react'
import ApiMethods from '../API/ApiMethods'

export default class ShoppingList extends Component {

	state = {
		ingredientList: [{}]
	}

	toggleIngredient = (evt) => {
		const ingredientIndex = evt.target.id.split('-')[2];
		const updatedIngredients = this.state.ingredientList;
		updatedIngredients[ingredientIndex].checked = !this.state.ingredientList[ingredientIndex].checked;

		this.setState(() => {
			return {ingredientList: updatedIngredients}
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
		return (
			<Container>
				<Header size="huge"></Header>
				<Header size="huge"></Header>
				<Header size="huge">Shopping List</Header>

				<List size='massive'>
					{this.state.ingredientList.map((ingredient, i) => {
						return <ShoppingListIngredient index={i} ingredient={ingredient} key={ingredient.ingredientId}
						toggleIngredient={(evt) => { this.toggleIngredient(evt) }} />
					})}
				</List>
			</Container>
		)
	}
}