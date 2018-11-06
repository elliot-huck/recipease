import React, { Component } from 'react'
import {List} from 'semantic-ui-react'

export default class ShoppingListIngredient extends Component {

	render() {
		return (
			<List.Item>
				<List.Icon name='box' />
				<List.Content>{`${this.props.ingredient.quantity} ${this.props.ingredient.food}`}</List.Content>
			</List.Item>
		)
	}
}