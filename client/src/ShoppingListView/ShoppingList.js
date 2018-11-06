import React, { Component } from 'react'
import ShoppingListIngredient from './ShoppingListIngredient'
import { List, Container, Header } from 'semantic-ui-react'
import ApiMethods from '../API/ApiMethods'

export default class ShoppingList extends Component {

	state = {
		ingredientList: [{}]
	}

	componentDidMount() {
		ApiMethods.getShoppingList()
			.then(ingredientsArray =>
				this.setState(() => {
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

				<List>
					{this.state.ingredientList.map((ingredient, i) => {
						return <ShoppingListIngredient index={i} ingredient={ingredient} key={ingredient.ingredientId} toggleIngredient={(evt) => { this.toggleingredient(evt) }} />
					})}
				</List>
			</Container>
		)
	}
}