import React, { Component } from 'react';
import { Button ,Form, Segment, Header, TextArea } from 'semantic-ui-react';
import { TweetButton, CreateTweetSegment } from '../styledComponents/Components';

const handleUpdateTweetValue = () => (prevState, currentProps) => {
  return { ...prevState, newTweetValue: currentProps.newTweetValue}
}

class CreateTweet extends Component {

  state = {
    newTweetValue: ''
  }

  handleNewTweetValue = (event) => {
    const updateState = handleUpdateTweetValue()
    this.setState(updateState(this.state, {newTweetValue: event.target.value}))
  }

  render() {
    const { addTweet } = this.props
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
              <TextArea
              type='text'
              focus='true' placeholder='Tweet - it'
              value={this.state.newTweetValue}
              onChange={this.handleNewTweetValue}
              />
            </Form.Field>
            <TweetButton
              value={this.state.newTweetValue}
              onClick={addTweet}
              floated='left'>
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
}

export default CreateTweet