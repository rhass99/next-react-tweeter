import React, { Component } from 'react';
import { Button ,Form, Segment, Header, TextArea } from 'semantic-ui-react';
import { TweetButton, CreateTweetSegment } from '../styledComponents/Components';

const CreateTweet = (props) => {
  return (
    <Segment.Group>
      <CreateTweetSegment>
        <Header 
        as='h2' 
        textAlign="left"
        >
        Compose Tweet
        </Header>
      </CreateTweetSegment>
      <CreateTweetSegment clearing={true}>
        <Form>
          <Form.Field>
            <TextArea focus={true} placeholder='Tweet - it' />
          </Form.Field>
          <TweetButton type='submit' floated='left'>
            Tweet
          </TweetButton>
          <Header 
              as='h5' 
              textAlign="right"
              floated="right"
              >
              5
          </Header>
        </Form>
      </CreateTweetSegment>
  </Segment.Group>
  )
}

export default CreateTweet