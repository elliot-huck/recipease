import React, { Component } from 'react'
import { Form, Grid, GridColumn, Button } from 'semantic-ui-react'

export default class NewRecipeIngredient extends Component {

	render() {

		let deleteButton = (<Grid.Column width={2}></Grid.Column>);

		if (this.props.index > 0) {
			deleteButton =
				(
					<GridColumn verticalAlign='bottom' width={2}>
						<Button size='tiny' color='red' content='Remove' id={`remove-${this.props.index}`}
							onClick={(evt) => { this.props.delete(evt) }} />
					</GridColumn>
				)
		}

		return (
			<Grid.Row>
				<Grid.Column width={2}></Grid.Column>

				<Grid.Column width={4}>
					<Form.Input required id={`quantity-${this.props.index}`} label='Quantity' placeholder="e.g.  1 & 1/2 Tbs"
						onChange={(evt) => { this.props.handleChange(evt) }} />
				</Grid.Column>

				<Grid.Column width={8}>
					<Form.Input required id={`food-${this.props.index}`} label='Ingredient' placeholder="e.g.  olive oil"
						onChange={(evt) => { this.props.handleChange(evt) }} />
				</Grid.Column>

				{deleteButton}

			</Grid.Row>
		)
	}
}