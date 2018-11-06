import React, { Component } from 'react'
import { List, Checkbox } from 'semantic-ui-react'
import './List.css'

export default class ShoppingListIngredient extends Component {

	render() {

		const checkedIngredient = this.props.ingredient.checked ? 'checkedIngredient' : 'uncheckedIngredient';

		return (
			<List.Item size='huge'  key={`listItem-${this.props.ingredient.id}`}>
				<List.Content size='huge'  key={`listContent-${this.props.ingredient.id}`}>
					<Checkbox id={`checkbox-${this.props.ingredient.id}-${this.props.index}`}
						size='huge' key={`checkBox-${this.props.ingredient.id}`}
						checked={this.props.ingredient.checked}
						className={checkedIngredient}
						label={`${this.props.ingredient.food} (${this.props.ingredient.quantity})`}
						onChange={this.props.toggleIngredient} />
				</List.Content>
			</List.Item>
		)
	}
}