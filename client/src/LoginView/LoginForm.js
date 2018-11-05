import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ApiMethods from '../API/ApiMethods'


export default class LoginForm extends Component {

	state = {
		Username: "",
		Password: ""
	}

	// Updates state as input typed into either field
	handleChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	}

	handleLogin = (evt) => {
		evt.preventDefault();
		ApiMethods.attemptLogin(this.state)
			.then((response) => {
				console.log(response)
				if (typeof response === "string") {
					sessionStorage.setItem("AuthToken", response);
					this.props.login();
				} else {
					alert(`${response.statusText}: That username and/or password is invalid`)
				}
			})
	}


	render() {

		return (
			<div className='login-form' id="login-form">
				<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as='h2' color='violet' textAlign='center'>
							{/* <Image src='/logo.png' /> */}
							Log-in to your account
        </Header>
						<Form size='large' onSubmit={(evt) => this.handleLogin(evt)}>
							<Segment stacked>
								<Form.Input required fluid icon='user' iconPosition='left'
									id='Username'
									placeholder='Username'
									onChange={(evt) => { this.handleChange(evt) }} />
								<Form.Input required fluid icon='lock' iconPosition='left'
									id='Password'
									placeholder='Password'
									type='password'
									onChange={(evt) => { this.handleChange(evt) }} />

								<Button color='violet' fluid size='large' type='submit'>
									Login
            		</Button>
							</Segment>
						</Form>

						<Message>
							New to RecipEase? <Link to="/register">Sign up here!</Link>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		)
	}

}