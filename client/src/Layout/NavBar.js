import React, { Component } from 'react'
import { Menu, Container, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default class NavBar extends Component {

	render() {
		return (
			<Menu fixed='top' color='violet' inverted id="navbar">
				<Container>
					<Menu.Item header size='huge'>
						{/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
						<Header size='medium' inverted>RecipEase</Header>
					</Menu.Item>

					<Link to="/new">
						<Menu.Item>New recipe</Menu.Item>
					</Link>
|
					<Link to="/">
						<Menu.Item>My cookbook</Menu.Item>
					</Link>
|
					<Link to="/list">
						<Menu.Item>Shopping list</Menu.Item>
					</Link>


					{/* <Dropdown item simple text='Dropdown'>
							<Dropdown.Menu>
								<Dropdown.Item>List Item</Dropdown.Item>
								<Dropdown.Item>List Item</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Header>Header Item</Dropdown.Header>
								<Dropdown.Item>
									<i className='dropdown icon' />
									<span className='text'>Submenu</span>
									<Dropdown.Menu>
										<Dropdown.Item>List Item</Dropdown.Item>
										<Dropdown.Item>List Item</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown.Item>
								<Dropdown.Item>List Item</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown> */}
				</Container>
			</Menu>
		)
	}
}