import React, { Component } from 'react'
import { Container, Header, List, Segment } from 'semantic-ui-react'

export default class HelpPage extends Component {

	render() {
		return (
			<Container>
				<Header size="huge"></Header>
				<Header size="huge"></Header>
				<Header size="huge">RecipEase Help</Header>

				<Header size="medium">About RecipEase</Header>
				<Segment.Group>
					<Segment>
						<Header size='small'>RecipEase is a digital cookbook that helps you plan meals and make a weekly shopping list. With RecipEase, you can...</Header>
						<List bulleted size='large'>
							<List.Item>Save all your favorite recipes in one place</List.Item>
							<List.Item>Create a menu of recipes to plan out which meals you want to make</List.Item>
							<List.Item>See a shopping list containing all the ingredients that you'll need to make the meals on your menu</List.Item>
							<List.Item>Check off ingredients as you get them so you can see what you have and what you still need</List.Item>
						</List>
					</Segment>
				</Segment.Group>

				<Header size="medium">How to use RecipEase</Header>
				<Segment.Group>

					<Segment>
						<Header size='small'>In order to use RecipEase, you'll need to add some recipes to your cookbook</Header>
						<List bulleted size='large'>
							<List.Item>Click on the 'New Recipe' link in the navigation bar or click the 'Add new recipe' button on the cookbook page. You'll be taken to a page where you can fill out the details of the new recipe</List.Item>
							<List.Item>Fill out the new recipe form
							<List.List>
									<List.Item>You must fill out the name of the recipe and at least one ingredient</List.Item>
									<List.Item>If you need to add more ingredients, click the 'Add Ingredient' button</List.Item>
									<List.Item>If you need to delete an ingredient, click the 'Remove Ingredient' button next to the ingredient you want to delete</List.Item>
									<List.Item>The 'Source' field is optional, but you can use it to help you remember where you found the recipe</List.Item>
									<List.Item>If you change your mind about adding the recipe, click the red circle with the 'x' in it at the top right of the form to cancel adding the recipe and go back to the cookbook page</List.Item>
								</List.List>
							</List.Item>
							<List.Item>Once you've finished filling out the recipe, click the 'Save Recipe' button at the bottom of the page. Your recipe will be saved and you'll be taken back to the cookbook page where you'll be able to see it</List.Item>
						</List>
					</Segment>

					<Segment>
						<Header size='small'>After you have a few recipes in your cookbook, you can start adding them to your menu</Header>
						<List bulleted size='large'>
							<List.Item>Click on the green 'Add to menu' button next to the recipe you want to add
							<List.List>
								<List.Item>The entry in your cookbook should change colors, showing that it has been added to you planned menu</List.Item>
								<List.Item>If you want to remove a recipe from your menu, you can click the gray 'Remove from menu' button that appears in place of the 'Add to menu' button</List.Item>
								</List.List>
							</List.Item>
							<List.Item>When you're happy with the menu you've made, click the 'Shopping List' link in the navigation bar or click the 'See shopping list' button on the cookbook page to view a shopping list of all the ingredients you'll need</List.Item>
						</List>
					</Segment>

					<Segment>
						<Header size='small'>As you get ingredients, you can check them off your shopping list</Header>
						<List bulleted size='large'>
							<List.Item>All the ingredients from all the recipes on your menu will show up in alphabetical order on the shopping list</List.Item>

							<List.Item>Click on an ingredient or the checkbox next to it to mark it off your list
								<List.List>
									<List.Item>Some ingredients may appear more than once if there are multiple recipes using that ingredient</List.Item>
									<List.Item>Checked ingredients can be unchecked, if necessary</List.Item>
								</List.List>
							</List.Item>

							<List.Item>If you want to add or remove a recipe from the menu at any time, you can go back to the cookbook by clicking the 'Cookbook' link in the navigation bar or the 'Add/remove recipes' button at the top of the shopping list. Once you add or remove a recipe, the shopping list will automatically update</List.Item>

							<List.Item>When you've checked off every ingredient on your shopping list, you can click the red 'Clear shopping list' button to remove all the recipes from your menu and clear all the ingredients from your shopping list</List.Item>
						</List>
					</Segment>

				</Segment.Group>

				<Header size="huge"></Header>
				<Header size="huge"></Header>

			</Container>
		)
	}
}