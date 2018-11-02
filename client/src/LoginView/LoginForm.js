import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default class LoginForm extends Component {

	state = {
		usernameInput: "",
		passwordInput: ""
	}

	// Updates state as input typed into either field
	handleChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	}


	render() {
		return (
			<div className='login-form' id="login-form">
				<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as='h2' color='blue' textAlign='center'>
							{/* <Image src='/logo.png' /> */}
							Log-in to your account
        </Header>
						<Form size='large'>
							<Segment stacked>
								<Form.Input fluid icon='user' iconPosition='left'
									id='usernameInput'
									placeholder='Username'
									onChange={(evt) => { this.handleChange(evt) }} />
								<Form.Input fluid icon='lock' iconPosition='left'
									id='passwordInput'
									placeholder='Password'
									type='password'
									onChange={(evt) => { this.handleChange(evt) }} />

								<Button color='blue' fluid size='large'>
									Login
            </Button>
							</Segment>
						</Form>

						<Message>
							New to RecipEase? <a href='#'>Sign up here!</a>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		)
	}

}