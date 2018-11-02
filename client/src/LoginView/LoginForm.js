import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <div className='login-form' id="login-form">
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='center'>
          {/* <Image src='/logo.png' /> */}
					Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

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

export default LoginForm