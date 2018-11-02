import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ApiMethods from '../API/ApiMethods'


export default class LoginForm extends Component {

	state = {
		FirstName: "",
		Email: "",
		Username: "",
		Password: ""
	}

	// Updates state as input typed into either field
	handleChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	}

	handleRegister = (evt) => {
		evt.preventDefault();
		ApiMethods.attemptRegister(this.state)
			.then((response) => {
				console.log(response)
				if (typeof response === "string") {
					sessionStorage.setItem("AuthToken", response);
					this.props.login();
				} else {
					alert(`${response.statusText}`)
				}
			})
	}


	render() {

		return (
			<div className='login-form' id="login-form">
				<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as='h2' color='teal' textAlign='center'>
							{/* <Image src='/logo.png' /> */}
							Register a new account
        </Header>
						<Form size='large' onSubmit={(evt) => this.handleRegister(evt)}>
							<Segment stacked>

							<Form.Input fluid icon='user' iconPosition='left'
									id='FirstName'
									placeholder='First name'
									onChange={(evt) => { this.handleChange(evt) }} />

									<Form.Input fluid icon='user' iconPosition='left'
									id='Email'
									placeholder='E-mail address'
									type='e-mail'
									onChange={(evt) => { this.handleChange(evt) }} />

								<Form.Input fluid icon='user' iconPosition='left'
									id='Username'
									placeholder='Username'
									onChange={(evt) => { this.handleChange(evt) }} />
								<Form.Input fluid icon='lock' iconPosition='left'
									id='Password'
									placeholder='Password'
									type='password'
									onChange={(evt) => { this.handleChange(evt) }} />

								<Button color='teal' fluid size='large' type='submit'>
									Register
            		</Button>
							</Segment>
						</Form>

						<Message>
							Already have an account? <Link to="/">Log in here!</Link>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		)
	}

}