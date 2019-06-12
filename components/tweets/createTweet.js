import React, { Component } from 'react';
import { Button ,Form, Segment, Header, TextArea } from 'semantic-ui-react';

const CreateTweet = (props) => {
  return (
    <Segment.Group>
      <Segment>
        <Header 
        as='h2' 
        textAlign="left"
        >
        Compose Tweet
        </Header>
      </Segment>
      <Segment clearing={true}>
        <Form>
          <Form.Field>
            <TextArea focus={true} placeholder='Tweet - it' />
          </Form.Field>
          <Button type='submit' floated='left'>
            Tweet
          </Button>
          <Header 
              as='h5' 
              textAlign="right"
              floated="right"
              >
              5
          </Header>
        </Form>
      </Segment>
  </Segment.Group>
  )
}

export default CreateTweet