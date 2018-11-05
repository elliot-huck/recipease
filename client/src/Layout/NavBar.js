import React, { Component } from 'react'
import {Menu, Container, Dropdown} from 'semantic-ui-react'

export default class NavBar extends Component {

	render() {
		return (
			<Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
          Project Name
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Dropdown'>
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
        </Dropdown>
      </Container>
    </Menu>
		)
	}
}