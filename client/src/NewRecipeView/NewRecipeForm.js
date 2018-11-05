import React, { Component } from 'react'
import { Form, Grid, Header, Container, Button, GridColumn } from 'semantic-ui-react'

export default class NewRecipeForm extends Component {

	state = {
		name: "",
		source: "",
		isActive: "",
		isFavorite: "",
		categoryId: "",
		ingredients: [{}]
	}

	render() {
		return (
			<Container>
				<Header size="huge"></Header>
				<Header size="huge"></Header>
				<Form>
					<Grid>

						<Grid.Row>
							<Grid.Column width={1}></Grid.Column>
							<Grid.Column width={6}>
								<Header size='huge'>Add a New Recipe</Header>
							</Grid.Column>

							<GridColumn width={7}>
								<Button floated='right' content='Save recipe' icon='save' color='violet' labelPosition='left' />
							</GridColumn>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column width={2}></Grid.Column>
							<Grid.Column width={8}>
								<Form.Input required label='Recipe Name' placeholder='New Recipe' size='massive' />
							</Grid.Column>

						</Grid.Row>

						<Grid.Row>
							<Grid.Column width={2}></Grid.Column>
							<Grid.Column width={6}>
								<Form.Input label='Source' placeholder="e.g.  Favorite Cookbook, pg. 53" />
							</Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column width={2}></Grid.Column>
							<Grid.Column width={4}>
								<Form.Input required label='Quantity' placeholder="e.g.  1 & 1/2 Tbs" />
							</Grid.Column>
							<Grid.Column width={8}>
								<Form.Input required label='Ingredient' placeholder="e.g.  olive oil" />
							</Grid.Column>
							<Grid.Column width={2}></Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column width={2}></Grid.Column>
							<Grid.Column width={12}>
								<Button floated='right' content='Add ingredient' icon='plus' color='green' labelPosition='left' />
							</Grid.Column>
						</Grid.Row>

					</Grid>

				</Form>
			</Container>
		)
	}
}