import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

const Register = () => (
  <Grid centered columns={3}>
    <Grid.Column>
      <Header as="h2" textAlign="center">
        Register
      </Header>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Email address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="blue" fluid size="large">
            Register
          </Button>
        </Form>
      </Segment>
      <Message>
        Registered? Back to Login - <a href="#">Login</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default Register;