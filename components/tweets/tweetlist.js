import React, { Component } from 'react';
import { Grid, Segment, Header, Image } from 'semantic-ui-react';

const Tweet = (props) => {
  const { tweet } = props
  return (
    <Grid.Row>
      <Grid.Column width={15}>
      <Segment.Group>
          <Segment clearing={true}>
              <Header 
              as='h1'
              floated='left'
              style={{height: '5rem', padding:0, margin:0}}
              >
              <Image circular src={`/static/img/bird.png`} />
              {tweet.username}
              </Header>
              <Header textAlign='right' as='h5' floated='right'>
              {tweet.userHandle}
              </Header>
          </Segment>
        <Segment style={{height: '6rem', verticalAlign:'middle'}}>
            {tweet.text}
        </Segment>
        <Segment.Group horizontal>
          <Segment>
            <Header 
              as='h5' 
              textAlign="left"
              >
            {tweet.timeLapsed} days ago
            </Header>
          </Segment>
        </Segment.Group>
      </Segment.Group>
      </Grid.Column>
    </Grid.Row>
  )
}

class Tweetlist extends Component {
  
  render() {
    const { tweetList, creating } = this.props;
    return (
      <Grid container centered columns={2}>

        <Grid.Row>
          <Grid.Column width={15}>
            {creating ? this.props.children : null}
          </Grid.Column>
        </Grid.Row>

      {
        tweetList.map((x, i) => <Tweet key={i} tweet={x}/>)
      }

      </Grid>
    )
  }


}

export default Tweetlist;